import {resolve} from 'path';

import type {PlaywrightTestConfig} from '@playwright/experimental-ct-react';
import {defineConfig, devices} from '@playwright/experimental-ct-react';
import react from '@vitejs/plugin-react';
import dotenvDefaults from 'dotenv-defaults';

dotenvDefaults.config();

function pathFromRoot(p: string) {
    return resolve(__dirname, '../', p);
}

const reporterConfig: PlaywrightTestConfig['reporter'] = [
    ['dot'],
    [
        'html-reporter/playwright',
        {
            enabled: true,
            path: 'playwright-report',
        },
    ],
];

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
    outputDir: resolve(__dirname, 'test-results'),
    testDir: pathFromRoot('tests'),
    testMatch: '**/*.visual.test.tsx',
    updateSnapshots: process.env.UPDATE_REQUEST ? 'all' : 'missing',
    snapshotPathTemplate:
        '{testDir}/{testFileDir}/__snapshots__/{testFileName}-snapshots/{arg}{-projectName}-linux{ext}',
    timeout: 10 * 1000,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    repeatEach: process.env.REPEAT_EACH ? Number(process.env.REPEAT_EACH) : 1,
    workers: 1,
    reporter: reporterConfig,
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        testIdAttribute: 'data-qa',
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        headless: true,
        screenshot: 'only-on-failure',
        timezoneId: 'UTC',
        ctCacheDir: process.env.IS_DOCKER ? '.cache-docker' : '.cache',
        ctViteConfig: {
            plugins: [react()],
            css: {
                preprocessorOptions: {
                    scss: {
                        api: 'modern-compiler',
                    },
                },
            },
        },
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                deviceScaleFactor: 2,
            },
        },
        // {
        //     name: 'webkit',
        //     use: {
        //         ...devices['Desktop Safari'],
        //         deviceScaleFactor: 2,
        //     },
        // },
    ],
};

export default defineConfig(config);
