import { expect, test } from '@playwright/test';

const routes = [
  { path: '/forms/buttons', text: 'Hero Buttons' },
  { path: '/forms/form-inputs', text: 'Default Inputs' },
  { path: '/charts/chartsjs', text: 'Bar Horizontal' },
  { path: '/charts/echarts', text: 'Area Stack' },
  { path: '/tables-data/react-table', text: 'TanStack Table' },
  { path: '/layout/tabs', text: 'Closable tabs' },
  { path: '/modal-overlays/dialog', text: 'Open Dialog' },
  { path: '/extra-components/calendar', text: 'Selected date' },
  { path: '/ui-features/typography', text: 'Used Fonts' },
  { path: '/ui-features/icons', text: 'Font awesom icons' },
  { path: '/editors/ckeditor', text: 'CKEditor' },
  { path: '/editors/tinymce', text: 'Tiny MCE' },
  { path: '/components/select', text: 'Searchable + clearable' },
  { path: '/components/data-grid', text: 'DataGrid' },
  { path: '/components/advanced-forms', text: 'Form controls' },
  { path: '/components/display', text: 'Breadcrumbs & Divider' },
  { path: '/components/overlays', text: 'Drawer' },
  { path: '/components/charts', text: 'Line chart' },
  { path: '/components/charts-advanced', text: 'Funnel chart' },
  { path: '/components/data-views', text: 'GanttChart' },
  { path: '/components/utilities', text: 'CodeBlock & CopyButton' },
  { path: '/components/layout-kit', text: 'Container' },
  { path: '/components/content-kit', text: 'Markdown' },
  { path: '/components/editors', text: 'CodeEditor' },
  { path: '/components/form-builders', text: 'SchemaForm' },
  { path: '/components/workspace', text: 'DockLayout' },
  { path: '/components/media', text: 'MediaPlayer' },
  { path: '/components/scheduling', text: 'RecurrenceEditor' },
  { path: '/components/insights', text: 'TraceWaterfall' },
  { path: '/components/charts-more', text: 'BoxPlotChart' },
  { path: '/components/i18n', text: 'Global locale & messages' },
  { path: '/components/lab', text: 'DashboardGrid' }
];

for (const route of routes) {
  test(`renders ${route.path}`, async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto(route.path);
    await expect(page.getByText(route.text, { exact: false }).first()).toBeVisible({
      timeout: 20000
    });
    expect(pageErrors).toEqual([]);
  });
}
