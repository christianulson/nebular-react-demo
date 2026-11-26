import {
  Button,
  Icon,
  changeDirection,
  changeTheme,
  useDesktopWindow,
  useNebularDir,
  type DesktopApp,
  type DesktopWindowState,
  type DesktopWorkspace,
  type NotificationItem
} from '@nebular-react/core';
import React, { lazy, Suspense, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AllThemes } from '../../../themes/AllThemes';

const ECommerce = lazy(() =>
  import('../../e-commerce/ECommerce').then((module) => ({ default: module.ECommerce }))
);
const IotDashboard = lazy(() =>
  import('../../iot-dashboard/IotDashboard').then((module) => ({ default: module.IotDashboard }))
);
const SelectDemo = lazy(() =>
  import('../select/SelectDemo').then((module) => ({ default: module.SelectDemo }))
);
const DataGridDemo = lazy(() =>
  import('../data-grid/DataGridDemo').then((module) => ({ default: module.DataGridDemo }))
);
const AdvancedFormsDemo = lazy(() =>
  import('../advanced-forms/AdvancedFormsDemo').then((module) => ({
    default: module.AdvancedFormsDemo
  }))
);
const DisplayDemo = lazy(() =>
  import('../display/DisplayDemo').then((module) => ({ default: module.DisplayDemo }))
);
const DataViewsDemo = lazy(() =>
  import('../data-views/DataViewsDemo').then((module) => ({ default: module.DataViewsDemo }))
);
const NebularChartsDemo = lazy(() =>
  import('../charts/NebularChartsDemo').then((module) => ({
    default: module.NebularChartsDemo
  }))
);
const WorkspaceDemo = lazy(() =>
  import('../workspace/WorkspaceDemo').then((module) => ({ default: module.WorkspaceDemo }))
);
const I18nDemo = lazy(() =>
  import('../i18n/I18nDemo').then((module) => ({ default: module.I18nDemo }))
);
const ComponentsLabDemo = lazy(() =>
  import('../lab/ComponentsLabDemo').then((module) => ({
    default: module.ComponentsLabDemo
  }))
);
const MediaDemo = lazy(() =>
  import('../media/MediaDemo').then((module) => ({ default: module.MediaDemo }))
);
const LayoutKitDemo = lazy(() =>
  import('../layout-kit/LayoutKitDemo').then((module) => ({
    default: module.LayoutKitDemo
  }))
);
const InsightsDemo = lazy(() =>
  import('../insights/InsightsDemo').then((module) => ({ default: module.InsightsDemo }))
);

function DemoPage({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div style={{ padding: '1rem' }}>Loading demo page…</div>}>
      {children}
    </Suspense>
  );
}

function DesktopWelcome() {
  const { openWindow } = useDesktopWindow();
  const navigate = useNavigate();
  const location = useLocation();
  const dir = useNebularDir();
  const [dark, setDark] = useState(false);
  const isFullscreen = location.pathname === '/desktop';

  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark';
    const item = AllThemes.find((theme) => theme.name === next);
    if (item) {
      changeTheme(item.theme);
      setDark(!dark);
    }
  };

  return (
    <div style={{ padding: '1rem', display: 'grid', gap: '0.75rem' }}>
      <h3 style={{ margin: 0 }}>Nebular Desktop</h3>
      <p style={{ margin: 0 }}>
        This window is a real desktop window: drag the title bar, resize it, snap it to an edge or
        minimize it to the taskbar. Open the start menu to explore the demo pages.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button size="small" onClick={() => openWindow({ appId: 'datagrid' })}>
          Open DataGrid
        </Button>
        <Button size="small" appearance="outline" onClick={() => openWindow({ appId: 'i18n' })}>
          Open i18n
        </Button>
        <Button size="small" appearance="outline" onClick={toggleTheme}>
          Toggle theme
        </Button>
        <Button
          size="small"
          appearance="outline"
          onClick={() => changeDirection(dir === 'rtl' ? 'ltr' : 'rtl')}
        >
          Toggle RTL
        </Button>
        {!isFullscreen && (
          <Button size="small" appearance="outline" onClick={() => navigate('/desktop')}>
            Open fullscreen desktop
          </Button>
        )}
      </div>
      <div>
        <strong>Keyboard shortcuts</strong>
        <ul style={{ margin: '0.25rem 0 0 1.25rem', padding: 0 }}>
          <li>
            <code>Ctrl/Cmd+K</code> opens the command palette.
          </li>
          <li>
            <code>Alt+Tab</code> cycles through open windows.
          </li>
          <li>
            <code>Alt+Arrow</code> snaps the focused window; drag it to an edge for the same result.
          </li>
          <li>
            <code>Ctrl/Cmd+Arrow</code> moves between workspaces.
          </li>
        </ul>
      </div>
    </div>
  );
}

function DemoExplorer() {
  const { openWindow } = useDesktopWindow();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '1rem', display: 'grid', gap: '0.75rem' }}>
      <div>
        <h3 style={{ margin: 0 }}>Demo apps</h3>
        <p style={{ margin: '0.25rem 0 0' }}>
          Every page below opens in a desktop window. The classic layout keeps working at the
          original routes.
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
          gap: '0.5rem'
        }}
      >
        {demoDesktopApps
          .filter((app) => app.id !== 'explorer')
          .map((app) => (
            <Button
              key={app.id}
              size="small"
              appearance="outline"
              onClick={() => openWindow({ appId: app.id })}
            >
              {app.title}
            </Button>
          ))}
      </div>
      <Button size="small" onClick={() => navigate('/')}>
        Open classic demo
      </Button>
    </div>
  );
}

const pageApps: DesktopApp[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce',
    icon: <Icon icon="shopping-cart-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <ECommerce />
      </DemoPage>
    ),
    defaultWidth: 1040,
    defaultHeight: 680,
    minWidth: 640,
    minHeight: 420,
    singleInstance: true,
    pinned: true
  },
  {
    id: 'iot',
    title: 'IoT Dashboard',
    icon: <Icon icon="home-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <IotDashboard />
      </DemoPage>
    ),
    defaultWidth: 1040,
    defaultHeight: 680,
    minWidth: 640,
    minHeight: 420,
    singleInstance: true
  },
  {
    id: 'datagrid',
    title: 'DataGrid',
    icon: <Icon icon="grid-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <DataGridDemo />
      </DemoPage>
    ),
    defaultWidth: 1000,
    defaultHeight: 660,
    minWidth: 620,
    minHeight: 400,
    singleInstance: true,
    pinned: true
  },
  {
    id: 'select',
    title: 'Select & Autocomplete',
    icon: <Icon icon="chevron-down-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <SelectDemo />
      </DemoPage>
    ),
    defaultWidth: 900,
    defaultHeight: 620,
    minWidth: 560,
    minHeight: 380,
    singleInstance: true
  },
  {
    id: 'advanced-forms',
    title: 'Advanced Forms',
    icon: <Icon icon="edit-2-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <AdvancedFormsDemo />
      </DemoPage>
    ),
    defaultWidth: 960,
    defaultHeight: 660,
    minWidth: 600,
    minHeight: 400,
    singleInstance: true
  },
  {
    id: 'display',
    title: 'Display & Feedback',
    icon: <Icon icon="layers-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <DisplayDemo />
      </DemoPage>
    ),
    defaultWidth: 920,
    defaultHeight: 640,
    minWidth: 560,
    minHeight: 380,
    singleInstance: true
  },
  {
    id: 'data-views',
    title: 'Data Views',
    icon: <Icon icon="list-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <DataViewsDemo />
      </DemoPage>
    ),
    defaultWidth: 960,
    defaultHeight: 660,
    minWidth: 600,
    minHeight: 400,
    singleInstance: true
  },
  {
    id: 'charts',
    title: 'Nebular Charts',
    icon: <Icon icon="pie-chart-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <NebularChartsDemo />
      </DemoPage>
    ),
    defaultWidth: 980,
    defaultHeight: 660,
    minWidth: 600,
    minHeight: 400,
    singleInstance: true
  },
  {
    id: 'workspace',
    title: 'Workspace & Collaboration',
    icon: <Icon icon="briefcase-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <WorkspaceDemo />
      </DemoPage>
    ),
    defaultWidth: 1000,
    defaultHeight: 680,
    minWidth: 620,
    minHeight: 420,
    singleInstance: true
  },
  {
    id: 'i18n',
    title: 'Internationalization',
    icon: <Icon icon="globe-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <I18nDemo />
      </DemoPage>
    ),
    defaultWidth: 900,
    defaultHeight: 620,
    minWidth: 560,
    minHeight: 380,
    singleInstance: true,
    pinned: true
  },
  {
    id: 'lab',
    title: 'Components Lab',
    icon: <Icon icon="flask-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <ComponentsLabDemo />
      </DemoPage>
    ),
    defaultWidth: 1000,
    defaultHeight: 680,
    minWidth: 620,
    minHeight: 420,
    singleInstance: true
  },
  {
    id: 'media',
    title: 'Media & Files',
    icon: <Icon icon="film-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <MediaDemo />
      </DemoPage>
    ),
    defaultWidth: 920,
    defaultHeight: 640,
    minWidth: 560,
    minHeight: 380,
    singleInstance: true
  },
  {
    id: 'layout-kit',
    title: 'Layout Kit',
    icon: <Icon icon="layout-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <LayoutKitDemo />
      </DemoPage>
    ),
    defaultWidth: 960,
    defaultHeight: 660,
    minWidth: 600,
    minHeight: 400,
    singleInstance: true
  },
  {
    id: 'insights',
    title: 'Insights & Diagnostics',
    icon: <Icon icon="activity-outline" aria-hidden="true" />,
    content: (
      <DemoPage>
        <InsightsDemo />
      </DemoPage>
    ),
    defaultWidth: 960,
    defaultHeight: 660,
    minWidth: 600,
    minHeight: 400,
    singleInstance: true
  }
];

export const demoDesktopApps: DesktopApp[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    icon: <Icon icon="home-outline" aria-hidden="true" />,
    content: <DesktopWelcome />,
    defaultWidth: 560,
    defaultHeight: 380,
    minWidth: 420,
    minHeight: 280,
    singleInstance: true,
    pinned: true
  },
  {
    id: 'explorer',
    title: 'Demo Explorer',
    icon: <Icon icon="grid-outline" aria-hidden="true" />,
    content: <DemoExplorer />,
    defaultWidth: 680,
    defaultHeight: 460,
    minWidth: 480,
    minHeight: 320,
    singleInstance: true,
    pinned: true
  },
  ...pageApps
];

export const demoDesktopWorkspaces: DesktopWorkspace[] = [
  {
    id: 'main',
    title: 'Main',
    background: '#eef2f9'
  },
  {
    id: 'components',
    title: 'Components',
    background: '#eef7f2',
    accentColor: '#00a86b'
  },
  {
    id: 'data',
    title: 'Data',
    background: '#f4f0ff',
    accentColor: '#7b61ff'
  }
];

export const demoDesktopNotifications: NotificationItem[] = [
  {
    id: 'desktop-welcome',
    title: 'Desktop mode is ready',
    message: 'Drag the title bar, snap windows to the edges and press Ctrl/Cmd+K to search apps.',
    timestamp: new Date().toISOString(),
    status: 'info'
  }
];

export const demoDesktopDisplays = [
  {
    id: 'left',
    label: 'Left display',
    primary: true,
    bounds: { x: 0, y: 0, width: 560, height: 480 }
  },
  {
    id: 'right',
    label: 'Right display',
    bounds: { x: 560, y: 0, width: 560, height: 480 }
  }
];

/**
 * Default windows shared by the embedded and the fullscreen demos.
 * The embedded page uses the declarative API (`defaultWindows`), while the
 * fullscreen route adds persistence and workspaces on top of it.
 */
export function createDemoDesktopWindows(multiDisplay = false) {
  const windows: DesktopWindowState[] = [
    {
      id: 'welcome-window',
      appId: 'welcome',
      workspaceId: 'main',
      x: 72,
      y: 56,
      width: 560,
      height: 380,
      minimized: false,
      maximized: false,
      zIndex: 1
    }
  ];

  if (multiDisplay) {
    windows.push({
      id: 'explorer-window',
      appId: 'explorer',
      workspaceId: 'main',
      displayId: 'right',
      x: 620,
      y: 72,
      width: 520,
      height: 420,
      minimized: false,
      maximized: false,
      zIndex: 2
    });
  }

  return windows;
}
