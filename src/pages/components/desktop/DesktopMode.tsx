import {
  Button,
  Desktop,
  Icon,
  createLocalStorageLayoutAdapter,
  type CommandPaletteAction,
  type DesktopLayoutSnapshot,
  type DesktopWindowState
} from '@nebular-react/core';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  createDemoDesktopWindows,
  createDemoDesktopWindowsForApp,
  demoDesktopApps,
  demoDesktopNotifications,
  demoDesktopWorkspaces,
  findDemoDesktopApp
} from './desktop-apps';

const DESKTOP_LAYOUT_STORAGE_KEY = 'nebular-demo-desktop-layout';

interface DesktopUrlState {
  nebularDesktopSynced?: boolean;
}

/**
 * Wraps the storage adapter so the reset action can stop the outgoing desktop
 * from flushing its old layout during unmount. Without this, clearing the key
 * and remounting would immediately restore the layout the user asked to reset.
 */
function createFullscreenLayoutAdapter() {
  const storage = createLocalStorageLayoutAdapter(DESKTOP_LAYOUT_STORAGE_KEY);
  let enabled = true;

  return {
    load(signal?: AbortSignal) {
      return enabled ? (storage.load?.(signal) ?? null) : null;
    },
    save(snapshot: DesktopLayoutSnapshot) {
      if (enabled) {
        storage.save(snapshot);
      }
    },
    flush(snapshot: DesktopLayoutSnapshot) {
      if (enabled) {
        storage.flush?.(snapshot);
      }
    },
    clear() {
      storage.clear?.();
    },
    suspend() {
      enabled = false;
    }
  };
}

function DesktopTaskbarActions({ onReset, onExit }: { onReset: () => void; onExit: () => void }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        paddingInlineEnd: '0.25rem'
      }}
    >
      <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>Nebular React</span>
      <Button size="small" appearance="outline" aria-label="Reset desktop layout" onClick={onReset}>
        <Icon icon="refresh-outline" aria-hidden="true" /> Reset
      </Button>
      <Button size="small" appearance="outline" aria-label="Exit desktop mode" onClick={onExit}>
        <Icon icon="log-out-outline" aria-hidden="true" /> Exit
      </Button>
    </div>
  );
}

export function DesktopMode() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // A URL written by the sync below is marked in history state. On reload the app
  // param is then only presentation, not a deep link, so the persisted layout wins.
  const [deepLinkedAppId] = useState(() =>
    (location.state as DesktopUrlState | null)?.nebularDesktopSynced
      ? null
      : searchParams.get('app')
  );
  const [layoutRevision, setLayoutRevision] = useState(0);

  const requestedApp = useMemo(() => findDemoDesktopApp(deepLinkedAppId), [deepLinkedAppId]);
  const defaultWindows = useMemo(
    () =>
      requestedApp ? createDemoDesktopWindowsForApp(requestedApp) : createDemoDesktopWindows(),
    [requestedApp]
  );

  const [layoutAdapter, setLayoutAdapter] = useState(createFullscreenLayoutAdapter);

  // Keep the last URL we wrote in a ref so two callbacks fired in the same tick
  // (for example workspace change followed by window open) compose instead of
  // overwriting each other with stale search params.
  const searchParamsRef = useRef(searchParams);
  searchParamsRef.current = searchParams;
  const locationStateRef = useRef(location.state);
  locationStateRef.current = location.state;

  const syncUrl = useCallback(
    ({ appId, workspaceId }: { appId?: string; workspaceId?: string }) => {
      const { current } = searchParamsRef;
      const next = new URLSearchParams(current);

      if (appId && next.get('app') !== appId) {
        next.set('app', appId);
      }
      if (workspaceId && next.get('workspace') !== workspaceId) {
        next.set('workspace', workspaceId);
      }
      if (next.toString() === current.toString()) {
        return;
      }

      const state: DesktopUrlState = {
        ...(locationStateRef.current ?? {}),
        nebularDesktopSynced: true
      };
      searchParamsRef.current = next;
      locationStateRef.current = state;
      setSearchParams(next, { replace: true, state });
    },
    [setSearchParams]
  );

  const handleWindowOpen = useCallback(
    (window: DesktopWindowState) => {
      if (window.appId) {
        syncUrl({ appId: window.appId });
      }
    },
    [syncUrl]
  );

  const handleWindowFocus = useCallback(
    (window: DesktopWindowState) => {
      if (window.appId) {
        syncUrl({ appId: window.appId });
      }
    },
    [syncUrl]
  );

  const handleWorkspaceChange = useCallback(
    (workspaceId: string) => {
      syncUrl({ workspaceId });
    },
    [syncUrl]
  );

  const handleResetLayout = useCallback(() => {
    layoutAdapter.suspend();
    layoutAdapter.clear?.();

    const next = new URLSearchParams(searchParamsRef.current);
    if (deepLinkedAppId) {
      next.set('app', deepLinkedAppId);
    } else {
      next.delete('app');
    }
    next.delete('workspace');
    searchParamsRef.current = next;
    setSearchParams(next, { replace: true, state: locationStateRef.current });
    setLayoutAdapter(createFullscreenLayoutAdapter());
    setLayoutRevision((revision) => revision + 1);
  }, [deepLinkedAppId, layoutAdapter, setSearchParams]);

  const commands: CommandPaletteAction[] = [
    {
      id: 'reset-desktop-layout',
      label: 'Reset desktop layout',
      description: 'Clear the saved layout and restore the default windows.',
      icon: <Icon icon="refresh-outline" aria-hidden="true" />,
      group: 'Desktop',
      onSelect: handleResetLayout
    },
    {
      id: 'open-classic-demo',
      label: 'Open classic demo',
      description: 'Leave the desktop shell and return to the sidebar layout.',
      icon: <Icon icon="home-outline" aria-hidden="true" />,
      group: 'Desktop',
      onSelect: () => navigate('/')
    }
  ];

  return (
    <Desktop
      key={`${deepLinkedAppId ?? 'default'}-${layoutRevision}`}
      fullscreen
      ariaLabel="Nebular React demo desktop"
      apps={demoDesktopApps}
      defaultWindows={defaultWindows}
      workspaces={demoDesktopWorkspaces}
      defaultWorkspace="main"
      layoutAdapter={requestedApp ? undefined : layoutAdapter}
      commandPalette
      commands={commands}
      showOverview
      notifications={demoDesktopNotifications}
      onWindowOpen={handleWindowOpen}
      onWindowFocus={handleWindowFocus}
      onWorkspaceChange={handleWorkspaceChange}
      icons={[
        {
          id: 'datagrid-shortcut',
          label: 'DataGrid',
          appId: 'datagrid',
          icon: <Icon icon="grid-outline" aria-hidden="true" />
        },
        {
          id: 'i18n-shortcut',
          label: 'i18n',
          appId: 'i18n',
          icon: <Icon icon="globe-outline" aria-hidden="true" />
        }
      ]}
      taskbarActions={
        <DesktopTaskbarActions onReset={handleResetLayout} onExit={() => navigate('/')} />
      }
    />
  );
}

export default DesktopMode;
