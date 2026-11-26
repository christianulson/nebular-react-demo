import {
  Button,
  Card,
  CodeBlock,
  Desktop,
  Icon,
  createLocalStorageLayoutAdapter,
  createRestLayoutAdapter,
  createSessionStorageLayoutAdapter,
  type DesktopLayoutStatus,
  type DesktopPersistenceAdapter
} from '@nebular-react/core';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createDemoDesktopWindows,
  demoDesktopDisplays,
  demoDesktopEmbeddedApps,
  demoDesktopWorkspaces
} from './desktop-embedded-apps';

type PersistenceMode = 'local' | 'session' | 'rest';

const REST_LAYOUT_ENDPOINT_PREFIX = '/mock-api/desktop/layout';
const REST_LAYOUT_STORAGE_PREFIX = 'nebular-demo-embedded-rest-layout';

const restAdapterExample = `const adapter = createRestLayoutAdapter({
  endpoint: '/api/desktop/layout',
  headers: () => ({ Authorization: \`Bearer \${token}\` })
});

<Desktop
  apps={apps}
  layoutAdapter={adapter}
  onLayoutStatusChange={({ status }) => setStatus(status)}
/>`;

function restLayoutEndpoint(mode: 'single' | 'multi') {
  return `${REST_LAYOUT_ENDPOINT_PREFIX}/${mode}`;
}

function restLayoutStorageKey(endpoint: string) {
  return `${REST_LAYOUT_STORAGE_PREFIX}:${endpoint}`;
}

function mockResponse(status: number, body: string | null) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => (body ? JSON.parse(body) : null)
  } as unknown as Response;
}

/**
 * Minimal fetch implementation that behaves like a layout API backed by
 * localStorage. It intentionally implements only the parts used by
 * `createRestLayoutAdapter`: status/ok/json and the request body.
 */
function createMockRestFetch(): typeof fetch {
  return async (input, init) => {
    const endpoint =
      typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
    const method = (init?.method ?? 'GET').toUpperCase();
    const storageKey = restLayoutStorageKey(endpoint);
    let stored: string | null = null;

    try {
      stored = window.localStorage.getItem(storageKey);
    } catch {
      stored = null;
    }

    if (method === 'GET') {
      return stored ? mockResponse(200, stored) : mockResponse(404, null);
    }

    try {
      window.localStorage.setItem(
        storageKey,
        typeof init?.body === 'string' ? init.body : JSON.stringify(init?.body ?? null)
      );
    } catch {
      return mockResponse(500, null);
    }

    return mockResponse(204, null);
  };
}

function clearMockRestLayout(mode: 'single' | 'multi') {
  try {
    window.localStorage.removeItem(restLayoutStorageKey(restLayoutEndpoint(mode)));
  } catch {
    // localStorage can be unavailable (private mode, quota); the demo still works.
  }
}

export function DesktopDemo() {
  const navigate = useNavigate();
  const [persistence, setPersistence] = useState<PersistenceMode>('local');
  const [multiDisplay, setMultiDisplay] = useState(false);
  const [layoutStatus, setLayoutStatus] = useState<DesktopLayoutStatus>('idle');
  const [layoutRevision, setLayoutRevision] = useState(0);

  const layoutAdapter = useMemo<DesktopPersistenceAdapter>(() => {
    const mode = multiDisplay ? 'multi' : 'single';

    if (persistence === 'rest') {
      const endpoint = restLayoutEndpoint(mode);
      const restAdapter = createRestLayoutAdapter({
        endpoint,
        fetch: createMockRestFetch()
      });

      return {
        ...restAdapter,
        clear: () => clearMockRestLayout(mode)
      };
    }

    const key = `nebular-demo-embedded-${mode}`;
    return persistence === 'local'
      ? createLocalStorageLayoutAdapter(key)
      : createSessionStorageLayoutAdapter(key);
  }, [persistence, multiDisplay]);

  const resetLayout = () => {
    layoutAdapter.clear?.();
    setLayoutStatus('idle');
    setLayoutRevision((revision) => revision + 1);
  };

  return (
    <div className="row">
      <div className="col-12">
        <Card>
          <Card.Header>Desktop embedded in the classic layout</Card.Header>
          <Card.Body>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '1rem'
              }}
            >
              <p style={{ margin: 0, maxWidth: 720 }}>
                This is the classic Nebular demo layout hosting a <code>Desktop</code> window
                manager. The windows below are declared through <code>apps</code> and{' '}
                <code>defaultWindows</code>. The same component can take over the whole screen in
                the fullscreen desktop mode.
              </p>
              <Button size="small" appearance="outline" onClick={() => navigate('/desktop')}>
                <Icon icon="monitor-outline" aria-hidden="true" /> Launch fullscreen mode
              </Button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginBottom: '0.75rem'
              }}
            >
              <Button
                size="small"
                appearance={persistence === 'local' ? 'filled' : 'outline'}
                onClick={() => setPersistence('local')}
              >
                localStorage adapter
              </Button>
              <Button
                size="small"
                appearance={persistence === 'session' ? 'filled' : 'outline'}
                onClick={() => setPersistence('session')}
              >
                sessionStorage adapter
              </Button>
              <Button
                size="small"
                appearance={persistence === 'rest' ? 'filled' : 'outline'}
                onClick={() => setPersistence('rest')}
              >
                REST adapter (mock)
              </Button>
              <Button
                size="small"
                appearance={multiDisplay ? 'filled' : 'outline'}
                onClick={() => setMultiDisplay((current) => !current)}
              >
                Multi-display
              </Button>
              <Button size="small" appearance="outline" onClick={resetLayout}>
                Reset layout
              </Button>
              <span role="status" style={{ fontSize: '0.875rem', opacity: 0.75 }}>
                Layout status: {layoutStatus}
              </span>
            </div>

            <div style={{ height: 600 }}>
              <Desktop
                key={`${persistence}-${multiDisplay}-${layoutRevision}`}
                ariaLabel="Embedded Nebular desktop demo"
                apps={demoDesktopEmbeddedApps}
                defaultWindows={createDemoDesktopWindows(multiDisplay)}
                layoutAdapter={layoutAdapter}
                onLayoutStatusChange={({ status }) => setLayoutStatus(status)}
                workspaces={demoDesktopWorkspaces}
                defaultWorkspace="main"
                displayMode={multiDisplay ? 'span' : 'single'}
                displays={multiDisplay ? demoDesktopDisplays : undefined}
                fitDisplays={multiDisplay}
                commandPalette
                showOverview
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>REST persistence</Card.Header>
          <Card.Body>
            <p style={{ marginTop: 0 }}>
              In production, replace the storage adapters with <code>createRestLayoutAdapter</code>{' '}
              to persist the layout per user or device in the backend. The{' '}
              <strong>REST adapter (mock)</strong> option above runs the same adapter against a
              fetch implementation backed by localStorage, so load and save can be exercised without
              a real API.
            </p>
            <CodeBlock
              code={restAdapterExample}
              language="tsx"
              title="desktop-persistence.tsx"
              showLineNumbers
              copyable
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default DesktopDemo;
