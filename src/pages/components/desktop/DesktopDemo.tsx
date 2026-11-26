import {
  Button,
  Card,
  CodeBlock,
  Desktop,
  Icon,
  createLocalStorageLayoutAdapter,
  createSessionStorageLayoutAdapter,
  type DesktopLayoutStatus
} from '@nebular-react/core';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createDemoDesktopWindows,
  demoDesktopApps,
  demoDesktopDisplays,
  demoDesktopWorkspaces
} from './desktop-apps';

const restAdapterExample = `const adapter = createRestLayoutAdapter({
  endpoint: '/api/desktop/layout',
  headers: () => ({ Authorization: \`Bearer \${token}\` })
});

<Desktop
  apps={apps}
  layoutAdapter={adapter}
  onLayoutStatusChange={({ status }) => setStatus(status)}
/>`;

export function DesktopDemo() {
  const navigate = useNavigate();
  const [persistence, setPersistence] = useState<'local' | 'session'>('local');
  const [multiDisplay, setMultiDisplay] = useState(false);
  const [layoutStatus, setLayoutStatus] = useState<DesktopLayoutStatus>('idle');
  const [layoutRevision, setLayoutRevision] = useState(0);

  const layoutAdapter = useMemo(() => {
    const key = `nebular-demo-embedded-${multiDisplay ? 'multi' : 'single'}`;
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
                apps={demoDesktopApps}
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
              to persist the layout per user or device in the backend.
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
