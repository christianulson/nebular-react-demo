import type { DesktopApp, DesktopWindowState } from '@nebular-react/core';
import { createPageApp, demoDesktopEmbeddedApps, lazyPage } from './desktop-embedded-apps';

export {
  createDemoDesktopWindows,
  demoDesktopDisplays,
  demoDesktopNotifications,
  demoDesktopWorkspaces
} from './desktop-embedded-apps';

const DesktopDemo = lazyPage(() => import('./DesktopDemo'), 'DesktopDemo');

/**
 * The desktop page itself is registered here rather than in the embedded registry,
 * otherwise `desktop-apps -> DesktopDemo -> desktop-apps` would be a circular import.
 * The desktop demo receives `demoDesktopEmbeddedApps`, so opening it nests one level
 * and never recurses into another desktop page.
 */
const desktopPageApp: DesktopApp = createPageApp({
  id: 'desktop',
  title: 'Desktop Mode',
  icon: 'monitor-outline',
  component: DesktopDemo,
  width: 960,
  height: 660,
  minWidth: 600,
  minHeight: 400
});

/**
 * Full registry: every route in `PageRoutes.tsx` plus the `welcome` and `explorer`
 * desktop apps.
 */
export const demoDesktopApps: DesktopApp[] = [...demoDesktopEmbeddedApps, desktopPageApp];

export function findDemoDesktopApp(id: string | null | undefined): DesktopApp | undefined {
  return id ? demoDesktopApps.find((app) => app.id === id) : undefined;
}

/**
 * Builds the initial window for `/desktop?app=<id>`. The requested app is the
 * only window, sized to fit the viewport, so a persisted layout cannot hide it.
 */
export function createDemoDesktopWindowsForApp(app: DesktopApp): DesktopWindowState[] {
  const viewportWidth = typeof window === 'undefined' ? 1280 : window.innerWidth;
  const viewportHeight = typeof window === 'undefined' ? 720 : window.innerHeight;
  const width = Math.min(app.defaultWidth ?? 960, Math.max(360, viewportWidth - 128));
  const height = Math.min(app.defaultHeight ?? 660, Math.max(260, viewportHeight - 128));

  return [
    {
      id: `${app.id}-window`,
      appId: app.id,
      workspaceId: 'main',
      x: Math.max(24, (viewportWidth - width) / 2),
      y: Math.max(24, (viewportHeight - height) / 2 - 32),
      width,
      height,
      minimized: false,
      maximized: false,
      zIndex: 1
    }
  ];
}
