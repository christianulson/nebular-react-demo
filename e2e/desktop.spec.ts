import { expect, test } from '@playwright/test';

test.describe('desktop mode', () => {
  test.describe.configure({ timeout: 60_000 });

  test('keeps the classic layout available on the embedded page', async ({ page }) => {
    await page.goto('/components/desktop');

    await expect(page.getByText('Desktop embedded in the classic layout')).toBeVisible({
      timeout: 20_000
    });
    await expect(page.getByRole('region', { name: 'Embedded Nebular desktop demo' })).toBeVisible({
      timeout: 20_000
    });
    await expect(page.getByRole('dialog', { name: 'Welcome' })).toBeVisible({
      timeout: 20_000
    });
    await expect(page.getByRole('button', { name: /launch fullscreen mode/i })).toBeVisible();
  });

  test('opens the fullscreen desktop from the header and returns to the classic layout', async ({
    page
  }) => {
    await page.goto('/components/desktop');

    await page.getByRole('button', { name: 'Desktop mode' }).click();

    await expect(page).toHaveURL(/\/desktop$/);
    await expect(page.getByRole('region', { name: 'Nebular React demo desktop' })).toBeVisible({
      timeout: 20_000
    });
    await expect(page.getByRole('button', { name: 'Exit desktop mode' })).toBeVisible({
      timeout: 20_000
    });

    await page.getByRole('button', { name: 'Exit desktop mode' }).click();

    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByText('Nebular React Demo')).toBeVisible();
  });

  test('switches the embedded desktop to multi-display', async ({ page }) => {
    await page.goto('/components/desktop');

    await page.getByRole('button', { name: 'Multi-display' }).click();

    await expect(page.getByRole('dialog', { name: 'Demo Explorer' })).toBeVisible();
    await expect(page.getByRole('dialog', { name: 'Welcome' })).toBeVisible();
  });

  test('toggles theme and RTL inside a desktop window', async ({ page }) => {
    await page.goto('/desktop');

    const readBackground = () =>
      page.evaluate(() =>
        getComputedStyle(document.documentElement).getPropertyValue('--background-basic-color-1')
      );

    const backgroundBefore = await readBackground();

    await page.getByRole('button', { name: 'Toggle theme' }).click();

    await expect.poll(readBackground).not.toBe(backgroundBefore);

    await page.getByRole('button', { name: 'Toggle RTL' }).click();

    const desktop = page.getByRole('region', { name: 'Nebular React demo desktop' });
    await expect
      .poll(() => desktop.evaluate((element) => element.closest('div[dir="rtl"]') !== null))
      .toBe(true);
  });

  test('opens a demo page inside a desktop window', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto('/desktop');

    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByRole('menuitem', { name: 'Open DataGrid' }).first().click();

    const window = page.getByRole('dialog', { name: 'DataGrid' });
    await expect(window).toBeVisible();
    await expect(window.getByRole('table', { name: 'Users' })).toBeVisible({
      timeout: 20000
    });

    await window.getByRole('button', { name: 'Close DataGrid' }).click();
    await expect(window).toHaveCount(0);
    expect(pageErrors).toEqual([]);
  });

  test('opens a demo page from the app deep link', async ({ page }) => {
    await page.goto('/desktop?app=datagrid');

    const window = page.getByRole('dialog', { name: 'DataGrid' });
    await expect(window).toBeVisible();
    await expect(window.getByRole('table', { name: 'Users' })).toBeVisible({
      timeout: 20000
    });
  });

  test('syncs the fullscreen URL with the focused app and workspace', async ({ page }) => {
    await page.goto('/desktop');

    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByRole('menuitem', { name: 'Open DataGrid' }).first().click();

    await expect(page).toHaveURL(/[?&]app=datagrid/);
    await expect(page.getByRole('dialog', { name: 'DataGrid' })).toBeVisible();

    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByRole('menuitem', { name: 'Open Internationalization' }).first().click();
    await expect(page).toHaveURL(/[?&]app=i18n/);

    await page
      .getByRole('toolbar', { name: 'Taskbar' })
      .getByRole('button', { name: 'DataGrid' })
      .click();
    await expect(page).toHaveURL(/[?&]app=datagrid/);

    await page.getByRole('button', { name: 'Workspace Components' }).click();

    await expect(page).toHaveURL(/[?&]workspace=components/);
    await expect(page).toHaveURL(/[?&]app=datagrid/);
  });

  test('keeps the persisted layout when reloading a synced URL', async ({ page }) => {
    await page.goto('/desktop');

    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByRole('menuitem', { name: 'Open DataGrid' }).first().click();
    await expect(page).toHaveURL(/[?&]app=datagrid/);

    await page.waitForFunction(() =>
      localStorage.getItem('nebular-demo-desktop-layout')?.includes('"appId":"datagrid"')
    );
    await page.reload();

    await expect(page).toHaveURL(/[?&]app=datagrid/);
    await expect(page.getByRole('dialog', { name: 'Welcome' })).toBeVisible();
    await expect(page.getByRole('dialog', { name: 'DataGrid' })).toBeVisible();
  });

  test('resets the fullscreen layout to the default windows', async ({ page }) => {
    await page.goto('/desktop');

    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByRole('menuitem', { name: 'Open DataGrid' }).first().click();
    await expect(page.getByRole('dialog', { name: 'DataGrid' })).toBeVisible();

    await page.getByRole('button', { name: 'Reset desktop layout' }).click();

    await expect(page.getByRole('dialog', { name: 'DataGrid' })).toHaveCount(0);
    await expect(page.getByRole('dialog', { name: 'Welcome' })).toBeVisible();
    await expect(page).not.toHaveURL(/[?&]app=/);
  });

  test('does not nest a desktop inside the demo explorer', async ({ page }) => {
    await page.goto('/desktop');

    await page.getByRole('button', { name: 'Start' }).click();
    await page.getByRole('menuitem', { name: 'Open Demo Explorer' }).first().click();

    const explorer = page.getByRole('dialog', { name: 'Demo Explorer' });
    await expect(explorer).toBeVisible();
    await expect(explorer.getByRole('button', { name: 'Desktop Mode' })).toHaveCount(0);
    await expect(explorer.getByRole('button', { name: 'DataGrid' })).toBeVisible();
  });

  test('persists the embedded desktop through the mock REST adapter', async ({ page }) => {
    await page.goto('/components/desktop');

    await page.getByRole('button', { name: 'REST adapter (mock)' }).click();
    await page
      .getByRole('dialog', { name: 'Welcome' })
      .getByRole('button', { name: 'Open DataGrid' })
      .click();

    const layoutStatus = page.getByRole('status').filter({ hasText: 'Layout status:' });
    await expect(layoutStatus).toHaveText('Layout status: saved', { timeout: 15000 });

    const storedKeys = await page.evaluate(() =>
      Object.keys(localStorage).filter((key) => key.startsWith('nebular-demo-embedded-rest-layout'))
    );
    expect(storedKeys.length).toBeGreaterThan(0);

    await page.getByRole('button', { name: 'localStorage adapter' }).click();
    await expect(page.getByRole('dialog', { name: 'DataGrid' })).toHaveCount(0);

    await page.getByRole('button', { name: 'REST adapter (mock)' }).click();
    await expect(page.getByRole('dialog', { name: 'DataGrid' })).toBeVisible({ timeout: 15000 });
  });
});
