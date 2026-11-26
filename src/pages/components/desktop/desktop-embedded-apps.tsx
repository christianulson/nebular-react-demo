import {
  Button,
  Icon,
  changeDirection,
  changeTheme,
  useDesktop,
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

type PageComponent = React.ComponentType;

/**
 * Wraps a page module in `React.lazy`, picking the named component export.
 * Every demo page is code-split, including the heavy editors, maps and charts.
 */
export function lazyPage<TModule extends object>(
  loader: () => Promise<TModule>,
  name: keyof TModule
): React.LazyExoticComponent<PageComponent> {
  return lazy(async () => {
    const module = await loader();
    return { default: module[name] as PageComponent };
  });
}

const ECommerce = lazyPage(() => import('../../e-commerce/ECommerce'), 'ECommerce');
const IotDashboard = lazyPage(() => import('../../iot-dashboard/IotDashboard'), 'IotDashboard');
const SelectDemo = lazyPage(() => import('../select/SelectDemo'), 'SelectDemo');
const DataGridDemo = lazyPage(() => import('../data-grid/DataGridDemo'), 'DataGridDemo');
const AdvancedFormsDemo = lazyPage(
  () => import('../advanced-forms/AdvancedFormsDemo'),
  'AdvancedFormsDemo'
);
const DisplayDemo = lazyPage(() => import('../display/DisplayDemo'), 'DisplayDemo');
const OverlaysDemo = lazyPage(() => import('../overlays/OverlaysDemo'), 'OverlaysDemo');
const NebularChartsDemo = lazyPage(
  () => import('../charts/NebularChartsDemo'),
  'NebularChartsDemo'
);
const AdvancedChartsDemo = lazyPage(
  () => import('../charts/AdvancedChartsDemo'),
  'AdvancedChartsDemo'
);
const DataViewsDemo = lazyPage(() => import('../data-views/DataViewsDemo'), 'DataViewsDemo');
const UtilitiesDemo = lazyPage(() => import('../utilities/UtilitiesDemo'), 'UtilitiesDemo');
const LayoutKitDemo = lazyPage(() => import('../layout-kit/LayoutKitDemo'), 'LayoutKitDemo');
const ContentKitDemo = lazyPage(() => import('../content-kit/ContentKitDemo'), 'ContentKitDemo');
const EditorsDemo = lazyPage(() => import('../editors/EditorsDemo'), 'EditorsDemo');
const FormBuildersDemo = lazyPage(
  () => import('../form-builders/FormBuildersDemo'),
  'FormBuildersDemo'
);
const WorkspaceDemo = lazyPage(() => import('../workspace/WorkspaceDemo'), 'WorkspaceDemo');
const MediaDemo = lazyPage(() => import('../media/MediaDemo'), 'MediaDemo');
const SchedulingDemo = lazyPage(() => import('../scheduling/SchedulingDemo'), 'SchedulingDemo');
const InsightsDemo = lazyPage(() => import('../insights/InsightsDemo'), 'InsightsDemo');
const MoreChartsDemo = lazyPage(() => import('../charts/MoreChartsDemo'), 'MoreChartsDemo');
const I18nDemo = lazyPage(() => import('../i18n/I18nDemo'), 'I18nDemo');
const ComponentsLabDemo = lazyPage(() => import('../lab/ComponentsLabDemo'), 'ComponentsLabDemo');

const StepperDemo = lazyPage(() => import('../../layout/stepper/Stepper'), 'StepperDemo');
const ListDemo = lazyPage(() => import('../../layout/list/List'), 'ListDemo');
const AccordionDemo = lazyPage(() => import('../../layout/accordion/Accordion'), 'AccordionDemo');
const TabsDemo = lazyPage(() => import('../../layout/tabs/Tabs'), 'TabsDemo');

const FormInputsDemo = lazyPage(
  () => import('../../forms/form-inputs/FormInputs'),
  'FormInputsDemo'
);
const FormLayoutsDemo = lazyPage(
  () => import('../../forms/form-layouts/FormLayouts'),
  'FormLayoutsDemo'
);
const ButtonsDemo = lazyPage(() => import('../../forms/buttons/Buttons'), 'ButtonsDemo');
const DatepickerDemo = lazyPage(
  () => import('../../forms/datepicker/Datepicker'),
  'DatepickerDemo'
);

const GridDemo = lazyPage(() => import('../../ui-features/grid/Grid'), 'GridDemo');
const IconsDemo = lazyPage(() => import('../../ui-features/icons/Icons'), 'IconsDemo');
const TypographyDemo = lazyPage(
  () => import('../../ui-features/typography/Typography'),
  'TypographyDemo'
);
const SearchFieldsDemo = lazyPage(
  () => import('../../ui-features/search-fields/SearchFields'),
  'SearchFieldsDemo'
);

const DialogDemo = lazyPage(() => import('../../modal-overlays/dialog/Dialog'), 'DialogDemo');
const WindowDemo = lazyPage(() => import('../../modal-overlays/window/Window'), 'WindowDemo');
const PopoverDemo = lazyPage(() => import('../../modal-overlays/popover/Popover'), 'PopoverDemo');
const ToastrDemo = lazyPage(() => import('../../modal-overlays/toastr/Toastr'), 'ToastrDemo');
const TooltipDemo = lazyPage(() => import('../../modal-overlays/tooltip/Tooltip'), 'TooltipDemo');

const CalendarDemo = lazyPage(
  () => import('../../extra-components/calendar/Calendar'),
  'CalendarDemo'
);
const ProgressBarDemo = lazyPage(
  () => import('../../extra-components/progress-bar/ProgressBar'),
  'ProgressBarDemo'
);
const LoaderDemo = lazyPage(() => import('../../extra-components/loader/Loader'), 'LoaderDemo');
const AlertDemo = lazyPage(() => import('../../extra-components/alert/Alert'), 'AlertDemo');
const CalendarKitDemo = lazyPage(
  () => import('../../extra-components/calendar-kit/CalendarKit'),
  'CalendarKitDemo'
);
const ChatDemo = lazyPage(() => import('../../extra-components/chat/Chat'), 'ChatDemo');

const GoogleMapsDemo = lazyPage(() => import('../../maps/google-maps/GoogleMaps'), 'default');
const LeafletMapsDemo = lazyPage(() => import('../../maps/leaflet/LeafletMaps'), 'LeafletMapsDemo');
const BubbleMapsDemo = lazyPage(() => import('../../maps/bubble/BubbleMaps'), 'BubbleMapsDemo');

const EChartsDemo = lazyPage(() => import('../../charts/echarts/ECharts'), 'EChartsDemo');
const ChartJsDemo = lazyPage(() => import('../../charts/chartjs/ChartJs'), 'ChartJsDemo');

const CKEditorDemo = lazyPage(() => import('../../editors/ckeditor/CKEditor'), 'CKEditorDemo');
const TinyMCEDemo = lazyPage(() => import('../../editors/tinymce/TinyMCE'), 'TinyMCEDemo');

const ReactTableDemo = lazyPage(
  () => import('../../tables/react-table/ReactTable'),
  'ReactTableDemo'
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
  const { apps, openWindow } = useDesktop();
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
        {apps
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

export interface PageAppOptions {
  id: string;
  title: string;
  icon: string;
  component: React.LazyExoticComponent<PageComponent>;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  pinned?: boolean;
}

export function createPageApp({
  id,
  title,
  icon,
  component: Component,
  width = 960,
  height = 660,
  minWidth = 600,
  minHeight = 400,
  pinned
}: PageAppOptions): DesktopApp {
  return {
    id,
    title,
    icon: <Icon icon={icon} aria-hidden="true" />,
    content: (
      <DemoPage>
        <Component />
      </DemoPage>
    ),
    defaultWidth: width,
    defaultHeight: height,
    minWidth,
    minHeight,
    singleInstance: true,
    pinned
  };
}

/**
 * Every route in `PageRoutes.tsx` except the desktop page itself, which is added by
 * the fullscreen registry (`desktop-apps.tsx`) to avoid a recursive desktop window.
 * Keep ids stable: they are used by the command palette, workspace layout
 * persistence and `/desktop?app=<id>` deep links.
 */
const pageApps: DesktopApp[] = [
  createPageApp({
    id: 'ecommerce',
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    component: ECommerce,
    width: 1040,
    height: 680,
    minWidth: 640,
    minHeight: 420,
    pinned: true
  }),
  createPageApp({
    id: 'iot',
    title: 'IoT Dashboard',
    icon: 'home-outline',
    component: IotDashboard,
    width: 1040,
    height: 680,
    minWidth: 640,
    minHeight: 420
  }),
  createPageApp({
    id: 'datagrid',
    title: 'DataGrid',
    icon: 'grid-outline',
    component: DataGridDemo,
    width: 1000,
    height: 660,
    minWidth: 620,
    minHeight: 400,
    pinned: true
  }),
  createPageApp({
    id: 'select',
    title: 'Select & Autocomplete',
    icon: 'chevron-down-outline',
    component: SelectDemo,
    width: 900,
    height: 620,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'advanced-forms',
    title: 'Advanced Forms',
    icon: 'edit-2-outline',
    component: AdvancedFormsDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'display',
    title: 'Display & Feedback',
    icon: 'layers-outline',
    component: DisplayDemo,
    width: 920,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'overlays',
    title: 'Overlays & Editor',
    icon: 'browser-outline',
    component: OverlaysDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'charts',
    title: 'Nebular Charts',
    icon: 'pie-chart-outline',
    component: NebularChartsDemo,
    width: 980,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'charts-advanced',
    title: 'Advanced Charts',
    icon: 'bar-chart-outline',
    component: AdvancedChartsDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'data-views',
    title: 'Data Views',
    icon: 'list-outline',
    component: DataViewsDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'utilities',
    title: 'Utilities & Feedback',
    icon: 'settings-2-outline',
    component: UtilitiesDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'layout-kit',
    title: 'Layout Kit',
    icon: 'layout-outline',
    component: LayoutKitDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'content-kit',
    title: 'Content Kit',
    icon: 'image-outline',
    component: ContentKitDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'editors',
    title: 'Editors & Diff',
    icon: 'text-outline',
    component: EditorsDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'form-builders',
    title: 'Form Builders',
    icon: 'build-outline',
    component: FormBuildersDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'workspace',
    title: 'Workspace & Collaboration',
    icon: 'briefcase-outline',
    component: WorkspaceDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'media',
    title: 'Media & Files',
    icon: 'film-outline',
    component: MediaDemo,
    width: 920,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'scheduling',
    title: 'Scheduling',
    icon: 'calendar-outline',
    component: SchedulingDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'insights',
    title: 'Insights & Diagnostics',
    icon: 'activity-outline',
    component: InsightsDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'charts-more',
    title: 'More Charts',
    icon: 'bar-chart-outline',
    component: MoreChartsDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'i18n',
    title: 'Internationalization',
    icon: 'globe-outline',
    component: I18nDemo,
    width: 900,
    height: 620,
    minWidth: 560,
    minHeight: 380,
    pinned: true
  }),
  createPageApp({
    id: 'lab',
    title: 'Components Lab',
    icon: 'flask-outline',
    component: ComponentsLabDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'stepper',
    title: 'Stepper',
    icon: 'layout-outline',
    component: StepperDemo,
    width: 820,
    height: 600,
    minWidth: 520,
    minHeight: 360
  }),
  createPageApp({
    id: 'list',
    title: 'List',
    icon: 'layout-outline',
    component: ListDemo,
    width: 820,
    height: 600,
    minWidth: 520,
    minHeight: 360
  }),
  createPageApp({
    id: 'accordion',
    title: 'Accordion',
    icon: 'layout-outline',
    component: AccordionDemo,
    width: 860,
    height: 620,
    minWidth: 540,
    minHeight: 380
  }),
  createPageApp({
    id: 'tabs',
    title: 'Tabs',
    icon: 'layout-outline',
    component: TabsDemo,
    width: 860,
    height: 620,
    minWidth: 540,
    minHeight: 380
  }),
  createPageApp({
    id: 'form-inputs',
    title: 'Form Inputs',
    icon: 'edit-2-outline',
    component: FormInputsDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'form-layouts',
    title: 'Form Layouts',
    icon: 'edit-2-outline',
    component: FormLayoutsDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'buttons',
    title: 'Buttons',
    icon: 'edit-2-outline',
    component: ButtonsDemo,
    width: 860,
    height: 620,
    minWidth: 540,
    minHeight: 380
  }),
  createPageApp({
    id: 'datepicker',
    title: 'Datepicker',
    icon: 'edit-2-outline',
    component: DatepickerDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'grid',
    title: 'Grid',
    icon: 'keypad-outline',
    component: GridDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'icons',
    title: 'Icons',
    icon: 'keypad-outline',
    component: IconsDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'typography',
    title: 'Typography',
    icon: 'keypad-outline',
    component: TypographyDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'animated-searches',
    title: 'Animated Searches',
    icon: 'keypad-outline',
    component: SearchFieldsDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'dialog',
    title: 'Dialog',
    icon: 'browser-outline',
    component: DialogDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'window',
    title: 'Window',
    icon: 'browser-outline',
    component: WindowDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'popover',
    title: 'Popover',
    icon: 'browser-outline',
    component: PopoverDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'toastr',
    title: 'Toastr',
    icon: 'browser-outline',
    component: ToastrDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'tooltip',
    title: 'Tooltip',
    icon: 'browser-outline',
    component: TooltipDemo,
    width: 900,
    height: 640,
    minWidth: 560,
    minHeight: 380
  }),
  createPageApp({
    id: 'calendar',
    title: 'Calendar',
    icon: 'message-circle-outline',
    component: CalendarDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'progress-bar',
    title: 'Progress Bar',
    icon: 'message-circle-outline',
    component: ProgressBarDemo,
    width: 860,
    height: 600,
    minWidth: 540,
    minHeight: 380
  }),
  createPageApp({
    id: 'loader',
    title: 'Loader',
    icon: 'message-circle-outline',
    component: LoaderDemo,
    width: 860,
    height: 600,
    minWidth: 540,
    minHeight: 380
  }),
  createPageApp({
    id: 'alert',
    title: 'Alert',
    icon: 'message-circle-outline',
    component: AlertDemo,
    width: 860,
    height: 600,
    minWidth: 540,
    minHeight: 380
  }),
  createPageApp({
    id: 'calendar-kit',
    title: 'Calendar Kit',
    icon: 'message-circle-outline',
    component: CalendarKitDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'chat',
    title: 'Chat',
    icon: 'message-circle-outline',
    component: ChatDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  }),
  createPageApp({
    id: 'google-maps',
    title: 'Google Maps',
    icon: 'map-outline',
    component: GoogleMapsDemo,
    width: 1000,
    height: 700,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'leaflet-maps',
    title: 'Leaflet Maps',
    icon: 'map-outline',
    component: LeafletMapsDemo,
    width: 1000,
    height: 700,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'bubble-maps',
    title: 'Bubble Maps',
    icon: 'map-outline',
    component: BubbleMapsDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'echarts',
    title: 'ECharts',
    icon: 'pie-chart-outline',
    component: EChartsDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'chartjs',
    title: 'Chart.js',
    icon: 'pie-chart-outline',
    component: ChartJsDemo,
    width: 1000,
    height: 680,
    minWidth: 620,
    minHeight: 420
  }),
  createPageApp({
    id: 'ckeditor',
    title: 'CKEditor',
    icon: 'text-outline',
    component: CKEditorDemo,
    width: 1040,
    height: 700,
    minWidth: 640,
    minHeight: 420
  }),
  createPageApp({
    id: 'tinymce',
    title: 'TinyMCE',
    icon: 'text-outline',
    component: TinyMCEDemo,
    width: 1040,
    height: 700,
    minWidth: 640,
    minHeight: 420
  }),
  createPageApp({
    id: 'react-table',
    title: 'React Table',
    icon: 'grid-outline',
    component: ReactTableDemo,
    width: 960,
    height: 660,
    minWidth: 600,
    minHeight: 400
  })
];

export const demoDesktopEmbeddedApps: DesktopApp[] = [
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
