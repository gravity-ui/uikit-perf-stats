# Performance Comparer

## Description

Performance Comparer is a tool for measuring and comparing the performance of React components using [Playwright](https://playwright.dev) and [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver).

## TLDR

[Performance Reports](#performance-reports)

## Measurement Approach

Main stages:

1. **Metrics Collection**

   - Uses `PerformanceObserver` to track `measure` events (custom measurements)
   - All metrics are stored in the global `__PERFORMANCE_METRICS__` object

2. **Measured Indicators**

   - Rendering time (ms)
     - Average value
     - Minimum value
     - Maximum value
   - Number of DOM nodes in the component

3. **Measurement Process**
   - Test runs the specified number of times
   - For each run:
     - PerformanceObserver is initialized
     - Component rendering is executed
     - All metrics are collected
     - Total rendering time is calculated
   - Results are aggregated and saved in the report

## How to Use

### Requirements

- Node.js >= 20
- Playwright
- Docker (for running in container)

### Configuration

All environment variables must be defined in the `.env` file:

```bash
REPEAT_EACH=1                       # Number of repetitions for each test
VITE_AVATAR_NODES_COUNT=1000        # Number of nodes for Avatar component
VITE_BUTTON_NODES_COUNT=1000        # Number of nodes for Button component
VITE_CHECKBOX_NODES_COUNT=1000      # Number of nodes for Checkbox component
VITE_LABEL_NODES_COUNT=1000         # Number of nodes for Label component
VITE_LINK_NODES_COUNT=1000          # Number of nodes for Link component
VITE_NUMBER_INPUT_NODES_COUNT=1000  # Number of nodes for NumberInput component
VITE_RADIO_GROUP_NODES_COUNT=1000   # Number of nodes for RadioGroup component
VITE_SWITCH_NODES_COUNT=1000        # Number of nodes for Switch component
VITE_TEXT_NODES_COUNT=1000          # Number of nodes for Text component
VITE_TEXT_INPUT_NODES_COUNT=1000    # Number of nodes for TextInput component
VITE_TEXT_AREA_NODES_COUNT=1000     # Number of nodes for TextArea component
```

### 1. Environment Setup

```bash
# Install dependencies
npm run playwright:install

# Clear cache (if needed, for example when .env file changes)
npm run playwright:clear-cache
```

### 2. Running Tests

```bash
# Run tests locally
npm run playwright

# Run tests in Docker
npm run playwright:docker
```

### 3. Results

Test results will be displayed in the console after successful test completion.

## Performance Reports

The reports present performance testing results for the following UI libraries: [antd](https://github.com/ant-design/ant-design), [@gravity-ui/uikit](https://github.com/gravity-ui/uikit), [@mui/material](https://github.com/mui/material-ui), [@adobe/react-spectrum](https://github.com/adobe/react-spectrum):

- [Report with 10 nodes](./REPORT_10.md)
- [Report with 100 nodes](./REPORT_100.md)
- [Report with 1000 nodes](./REPORT_1000.md)
