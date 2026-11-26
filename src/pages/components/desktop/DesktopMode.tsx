import { Button, Desktop, Icon, type CommandPaletteAction } from '@nebular-react/core';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  createDemoDesktopWindows,
  createDemoDesktopWindowsForApp,
  demoDesktopApps,
  demoDesktopNotifications,
  demoDesktopWorkspaces,
  findDemoDesktopApp
} from './desktop-apps';

function DesktopExitAction({ onExit }: { onExit: () => void }) {
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
      <Button size="small" appearance="outline" aria-label="Exit desktop mode" onClick={onExit}>
        <Icon icon="log-out-outline" aria-hidden="true" /> Exit
      </Button>
    </div>
  );
}

export function DesktopMode() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const requestedApp = findDemoDesktopApp(searchParams.get('app'));
  const defaultWindows = requestedApp
    ? createDemoDesktopWindowsForApp(requestedApp)
    : createDemoDesktopWindows();

  const commands: CommandPaletteAction[] = [
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
      key={requestedApp?.id ?? 'default'}
      fullscreen
      ariaLabel="Nebular React demo desktop"
      apps={demoDesktopApps}
      defaultWindows={defaultWindows}
      workspaces={demoDesktopWorkspaces}
      defaultWorkspace="main"
      storageKey={requestedApp ? undefined : 'nebular-demo-desktop-layout'}
      commandPalette
      commands={commands}
      showOverview
      notifications={demoDesktopNotifications}
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
      taskbarActions={<DesktopExitAction onExit={() => navigate('/')} />}
    />
  );
}

export default DesktopMode;
