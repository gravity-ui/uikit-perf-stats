/* eslint-disable no-param-reassign */

import * as os from 'os';

import type {Reporter, TestCase, TestResult} from '@playwright/test/reporter';

const mapComponentsNameToNodesCount = {
    Avatar: process.env.VITE_AVATAR_NODES_COUNT,
    Button: process.env.VITE_BUTTON_NODES_COUNT,
    Checkbox: process.env.VITE_CHECKBOX_NODES_COUNT,
    Label: process.env.VITE_LABEL_NODES_COUNT,
    Link: process.env.VITE_LINK_NODES_COUNT,
    NumberInput: process.env.VITE_NUMBER_INPUT_NODES_COUNT,
    RadioGroup: process.env.VITE_RADIO_GROUP_NODES_COUNT,
    Switch: process.env.VITE_SWITCH_NODES_COUNT,
    Text: process.env.VITE_TEXT_NODES_COUNT,
    TextInput: process.env.VITE_TEXT_INPUT_NODES_COUNT,
    TextArea: process.env.VITE_TEXT_AREA_NODES_COUNT,
};

interface PerformanceMetrics {
    renderTime: number;
    allMetrics: Array<{
        name: string;
        entryType: string;
        startTime: number;
        duration: number;
    }>;
}

interface SystemInfo {
    os: string;
    osVersion: string;
    cpu: string;
    nodeVersion: string;
    browser?: {
        engine: string;
    };
}

class CustomReporter implements Reporter {
    metrics: Map<string, PerformanceMetrics[]> = new Map();
    systemInfo: SystemInfo = {
        os: os.type(),
        osVersion: os.release(),
        cpu: os.cpus()[0].model,
        nodeVersion: process.version,
    };

    // ANSI color codes
    private readonly GREEN = '\x1b[32m';
    private readonly RED = '\x1b[31m';
    private readonly BLUE = '\x1b[34m';
    private readonly RESET = '\x1b[0m';

    drawTable(headers: string[], rows: string[][]) {
        // Get clean text without ANSI codes for width calculation
        const ESC = String.fromCharCode(27);
        const getCleanText = (text: string) => text.replace(new RegExp(`${ESC}\\[\\d+m`, 'g'), '');
        // Find maximum length for each column
        const columnWidths = headers.map((header, i) => {
            const maxContentLength = Math.max(
                header.length,
                ...rows.map((row) => getCleanText(row[i]).length),
            );
            return maxContentLength;
        });
        const createSeparator = () => {
            return '+' + columnWidths.map((width) => '-'.repeat(width + 2)).join('+') + '+';
        };
        const createRow = (cells: string[]) => {
            return (
                '| ' +
                cells
                    .map((cell, i) => {
                        // Get clean text without ANSI codes for padding calculation
                        const cleanText = cell.replace(new RegExp(`${ESC}\\[\\d+m`, 'g'), '');
                        return cell.padEnd(columnWidths[i] + (cell.length - cleanText.length));
                    })
                    .join(' | ') +
                ' |'
            );
        };

        const table = [
            createSeparator(),
            createRow(headers),
            createSeparator(),
            ...rows.map((row) => createRow(row)),
            createSeparator(),
        ];

        return table.join('\n');
    }

    onTestEnd(test: TestCase, result: TestResult) {
        const performanceAnnotations = result.annotations.filter((a) => a.type === 'performance');
        if (performanceAnnotations.length > 0) {
            // @ts-expect-error
            const testMetrics = performanceAnnotations.map((a) => a.data as PerformanceMetrics);
            const existingMetrics = this.metrics.get(test.title) || [];
            this.metrics.set(test.title, [...existingMetrics, ...testMetrics]);
        }

        if (!this.systemInfo.browser?.engine) {
            const browserName = test.parent?.parent?.title || '';
            this.systemInfo.browser = {
                engine: browserName,
            };
        }
    }

    onEnd() {
        console.info(`\n${this.BLUE}System Information:${this.RESET}\n`);
        let headers = ['Property', 'Value'];
        let rows = [
            ['OS', `${this.systemInfo.os} ${this.systemInfo.osVersion}`],
            ['Device', this.systemInfo.cpu],
            ['Node.js Version', this.systemInfo.nodeVersion],
        ];
        console.info(this.drawTable(headers, rows));

        console.info(`\n${this.BLUE}Environment Information:${this.RESET}\n`);
        headers = ['Property', 'Value'];
        rows = [
            [
                'Browser engine',
                this.systemInfo.browser ? `${this.systemInfo.browser.engine}` : 'unknown',
            ],
            ['Test repeats', process.env.REPEAT_EACH || '1'],
        ];
        console.info(this.drawTable(headers, rows));

        console.info(`\n${this.BLUE}Performance Summary:${this.RESET}`);
        const componentGroups = new Map<string, Map<string, PerformanceMetrics[]>>();
        Array.from(this.metrics.entries()).forEach(([testTitle, testMetrics]) => {
            const componentMatch = testTitle.match(/^(.+?)\s+/);

            if (componentMatch) {
                const componentName = componentMatch[1];
                const libName = testTitle.replace(componentMatch[0], '').trim();

                if (!componentGroups.has(componentName)) {
                    componentGroups.set(componentName, new Map());
                }

                componentGroups.get(componentName)?.set(libName, testMetrics);
            }
        });
        componentGroups.forEach((libMetrics, componentName) => {
            console.info(
                `\n\x1b[33m${componentName}\x1b[0m (${mapComponentsNameToNodesCount[componentName]} nodes):`,
            );

            headers = ['Lib', 'Avg Render Time', 'Min Render Time', 'Max Render Time'];
            rows = Array.from(libMetrics.entries()).map(([libName, metrics]) => {
                const avgRenderTime =
                    metrics.reduce((sum, m) => sum + m.renderTime, 0) / metrics.length;
                const minRenderTime = Math.min(...metrics.map((m) => m.renderTime));
                const maxRenderTime = Math.max(...metrics.map((m) => m.renderTime));

                return [
                    libName,
                    `${avgRenderTime.toFixed(2)}ms`,
                    `${minRenderTime.toFixed(2)}ms`,
                    `${maxRenderTime.toFixed(2)}ms`,
                ];
            });
            const bestValues = rows.reduce(
                (acc, row) => {
                    for (let i = 1; i < row.length; i++) {
                        const value = parseFloat(row[i]);
                        if (!acc[i] || value < acc[i]) {
                            acc[i] = value;
                        }
                    }

                    return acc;
                },
                {} as Record<number, number>,
            );
            const worstValues = rows.reduce(
                (acc, row) => {
                    for (let i = 1; i < row.length; i++) {
                        const value = parseFloat(row[i]);
                        if (!acc[i] || value > acc[i]) {
                            acc[i] = value;
                        }
                    }
                    return acc;
                },
                {} as Record<number, number>,
            );
            const coloredRows = rows.map((row) => {
                return row.map((cell, i) => {
                    // Skip the first column (library names)
                    if (i === 0) return cell;

                    const value = parseFloat(cell);

                    if (value === bestValues[i]) {
                        return `${this.GREEN}${cell}${this.RESET}`;
                    }

                    if (value === worstValues[i]) {
                        return `${this.RED}${cell}${this.RESET}`;
                    }

                    return cell;
                });
            });

            console.info(this.drawTable(headers, coloredRows));
        });
    }
}

export default CustomReporter;
