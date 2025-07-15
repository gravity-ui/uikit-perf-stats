export default {
    gridUrl: 'local',
    baseUrl: 'http://localhost',
    pageLoadTimeout: 0,
    httpTimeout: 60000,
    testTimeout: 90000,
    resetCursor: false,
    sessionsPerBrowser: 3,
    system: {
        testRunEnv: ['browser', {viteConfig: './vite.config.ts'}],
    },
    sets: {
        desktop: {
            files: ['testplane/tests/*.test.tsx'],
            browsers: ['chrome'],
        },
    },
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome-headless-shell',
            },
        },
    },
    plugins: {
        'html-reporter/testplane': {
            // https://github.com/gemini-testing/html-reporter
            enabled: true,
            path: 'testplane-report',
            defaultView: 'all',
            diffMode: '3-up-scaled',
        },
    },
};
