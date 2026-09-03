import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: 0,
  workers: 1,
  use: {
    baseURL: 'http://localhost:3088',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'bunx next start -p 3088',
    url: 'http://localhost:3088',
    reuseExistingServer: false,
    timeout: 15000,
  },
});
