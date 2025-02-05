// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

import dotenv from "dotenv"
dotenv.config()

/**
  @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  testMatch: ["**/*test.js", "**/*test.mjs"],
  

  use: {
    headless: true,
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      username: process.env.USER_NAME || "",
      password: process.env.USER_PASSWORD || ""
    },

    trace: "retain-on-failure",
    screenshot: 'only-on-failure',
    video: 'off',
    
  },

  /* Configure projects for major browsers */
  projects: [
    //{
    //  name: "login",
    //  testDir: "./tests/setup",
    //  testMatch: "**.setup.js",
    //  use: {
    //    ...devices["Desktop Chrome"],
    //  }
    //},
    //{
    //  name: 'cars',
    //  testDir: "./tests/storage",
    //  testMatch: "**.test.js",
    //  use: { 
    //    ...devices['Desktop Chrome'],
    //    storageState: "session-storage.json"
    //   },
    //  dependencies: ["login"]
    //},
    {
      name: 'fixture',
      testDir: "./tests/fixture",
      testMatch: "**.test.js",
      use: {
        ...devices['Desktop Chrome'],
        //storageState: "session-storage.json"
       },
      //dependencies: ["login"]
    },
//
    //{
    //  name: 'webkit',
    //  use: { ...devices['Desktop Safari'] },
    //},

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

