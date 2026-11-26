import { expect, test } from '@playwright/test';

test.describe('desktop mode', () => {
  test('keeps the classic layout available on the embedded page', async ({ page }) => {
    await page.goto('/components/desktop');

    await expect(page.getByText('Desktop embedded in the classic layout')).toBeVisible();
    await expect(page.getByRole('region', { name: 'Embedded Nebular desktop demo' })).toBeVisible();
    await expect(page.getByRole('dialog', { name: 'Welcome' })).toBeVisible();
    await expect(page.getByRole('button', { name: /launch fullscreen mode/i })).toBeVisible();
  });

  test('opens the fullscreen desktop from the header and returns to the classic layout', async ({
    page
  }) => {
    await page.goto('/components/desktop');

    await page.getByRole('button', { name: 'Desktop mode' }).click();

    await expect(page).toHaveURL(/\/desktop$/);
    await expect(page.getByRole('region', { name: 'Nebular React demo desktop' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Exit desktop mode' })).toBeVisible();

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
});
