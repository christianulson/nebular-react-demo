import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  '/extra-components/alert',
  '/ui-features/typography',
  '/forms/buttons',
  '/components/data-grid',
  '/components/advanced-forms',
  '/components/display',
  '/components/charts',
  '/components/charts-advanced',
  '/components/data-views',
  '/components/utilities',
  '/components/layout-kit',
  '/components/content-kit',
  '/components/editors',
  '/components/form-builders',
  '/components/workspace',
  '/components/media',
  '/components/scheduling',
  '/components/insights',
  '/components/charts-more',
  '/components/i18n',
  '/components/desktop',
  '/desktop',
  '/components/lab',
  '/components/select',
  '/components/overlays',
  '/forms/form-inputs',
  '/forms/datepicker',
  '/modal-overlays/dialog'
];

for (const path of pages) {
  test(`has no critical accessibility violations on ${path}`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => (document.querySelector('#root')?.childElementCount ?? 0) > 0);
    await page.waitForTimeout(1000);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const violations = results.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      nodes: violation.nodes.map((node) => ({
        target: node.target,
        html: node.html.slice(0, 180),
        summary: node.failureSummary
      }))
    }));

    expect(violations).toEqual([]);
  });
}
