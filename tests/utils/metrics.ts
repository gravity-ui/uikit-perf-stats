import type {Page, TestInfo} from '@playwright/test';

interface PerformanceMetric {
    name: string;
    entryType: string;
    startTime: number;
    duration: number;
}

interface PerformanceData {
    renderTime: number;
    allMetrics: PerformanceMetric[];
}

interface PerformanceAnnotation {
    type: string;
    description?: string;
    data?: PerformanceData;
}

export async function collectMetrics(page: Page, testInfo: TestInfo) {
    await page.evaluate(() => {
        performance.mark('begin-mark');
        (window as any).__PERFORMANCE_METRICS__ = [];
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const metrics = (window as any).__PERFORMANCE_METRICS__ || [];
            entries.forEach((entry) => {
                metrics.push({
                    name: entry.name,
                    entryType: entry.entryType,
                    startTime: entry.startTime,
                    duration: entry.duration,
                });
            });
            (window as any).__PERFORMANCE_METRICS__ = metrics;
        });

        observer.observe({entryTypes: ['measure']});
    });

    return {
        finish: async () => {
            await page.evaluate(() => {
                performance.measure('total-render-time', 'begin-mark');
            });

            // Wait for metrics to be collected
            let metrics: PerformanceMetric[] = [];
            let attempts = 0;
            const maxAttempts = 5;

            while (attempts < maxAttempts) {
                await page.waitForTimeout(100);

                metrics = await page.evaluate(() => (window as any).__PERFORMANCE_METRICS__);

                if (metrics.length > 0) {
                    break;
                }

                attempts++;
            }

            const renderTimeMeasure = metrics.find(
                (m: PerformanceMetric) => m.name === 'total-render-time',
            );
            if (renderTimeMeasure) {
                const annotation: PerformanceAnnotation = {
                    type: 'performance',
                    description: 'Render time metrics',
                    data: {
                        renderTime: renderTimeMeasure.duration,
                        allMetrics: metrics,
                    },
                };
                (testInfo.annotations as PerformanceAnnotation[]).push(annotation);
            }
        },
    };
}
