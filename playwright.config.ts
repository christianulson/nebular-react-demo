import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4174',
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    // Firefox/WebKit need extra browser downloads. Opt in on CI with
    // PW_ALL_BROWSERS=1 after running `npx playwright install firefox webkit`.
    ...(process.env.PW_ALL_BROWSERS
      ? [
          {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
          },
          {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }
          }
        ]
      : [])
  ],
  webServer: {
    command: 'yarn preview --host 127.0.0.1 --port 4174 --strictPort',
    url: 'http://127.0.0.1:4174',
    reuseExistingServer: false,
    timeout: 120000
  }
});
