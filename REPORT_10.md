# Performance Comparison Report

## System Information

| Property        | Value         |
| --------------- | ------------- |
| OS              | Darwin 24.4.0 |
| Device          | Apple M3 Pro  |
| Node.js Version | v20.19.1      |

## Environment Information

| Property       | Value    |
| -------------- | -------- |
| Browser engine | chromium |
| Test repeats   | 50       |

## Performance Summary

### Avatar (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">120.70ms</span>  | <span style="color: red">115.70ms</span>  | <span style="color: red">138.60ms</span>  |
| @gravity-ui/uikit     | 71.63ms                                   | 64.80ms                                   | 100.20ms                                  |
| @mui/material         | <span style="color: green">36.92ms</span> | <span style="color: green">33.50ms</span> | <span style="color: green">56.40ms</span> |
| @adobe/react-spectrum | 91.08ms                                   | 84.60ms                                   | 98.00ms                                   |

### Button (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">104.33ms</span>  | <span style="color: red">98.90ms</span>   | <span style="color: red">129.20ms</span>  |
| @gravity-ui/uikit     | 58.25ms                                   | 53.90ms                                   | <span style="color: green">79.40ms</span> |
| @mui/material         | <span style="color: green">37.89ms</span> | <span style="color: green">34.30ms</span> | 83.90ms                                   |
| @adobe/react-spectrum | 86.40ms                                   | 78.10ms                                   | 115.30ms                                  |

### Checkbox (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">97.55ms</span>   | <span style="color: red">93.10ms</span>   | <span style="color: red">106.70ms</span>  |
| @gravity-ui/uikit     | 56.92ms                                   | 53.20ms                                   | 66.20ms                                   |
| @mui/material         | <span style="color: green">38.17ms</span> | <span style="color: green">36.00ms</span> | <span style="color: green">44.50ms</span> |
| @adobe/react-spectrum | 81.03ms                                   | 76.10ms                                   | <span style="color: red">117.60ms</span>  |

### Label (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">97.09ms</span>   | <span style="color: red">92.10ms</span>   | <span style="color: red">104.60ms</span>  |
| @gravity-ui/uikit     | 55.81ms                                   | 50.70ms                                   | 60.50ms                                   |
| @mui/material         | <span style="color: green">35.78ms</span> | <span style="color: green">33.20ms</span> | <span style="color: green">40.30ms</span> |
| @adobe/react-spectrum | 80.34ms                                   | 75.30ms                                   | 88.60ms                                   |

### Link (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">100.90ms</span>  | <span style="color: red">95.00ms</span>   | <span style="color: red">200.80ms</span>  |
| @gravity-ui/uikit     | 56.71ms                                   | 51.40ms                                   | 100.30ms                                  |
| @mui/material         | <span style="color: green">33.84ms</span> | <span style="color: green">30.50ms</span> | <span style="color: green">50.90ms</span> |
| @adobe/react-spectrum | 81.59ms                                   | 76.20ms                                   | 91.30ms                                   |

### NumberInput (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">104.14ms</span>  | <span style="color: red">98.50ms</span>   | 129.50ms                                  |
| @gravity-ui/uikit     | 58.72ms                                   | 54.10ms                                   | 64.00ms                                   |
| @mui/material         | <span style="color: green">52.74ms</span> | <span style="color: green">46.90ms</span> | <span style="color: green">60.70ms</span> |
| @adobe/react-spectrum | 92.16ms                                   | 84.60ms                                   | <span style="color: red">138.00ms</span>  |

### RadioGroup (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">101.83ms</span>  | <span style="color: red">93.30ms</span>   | <span style="color: red">160.80ms</span>  |
| @gravity-ui/uikit     | 57.66ms                                   | 51.70ms                                   | 107.50ms                                  |
| @mui/material         | <span style="color: green">56.16ms</span> | <span style="color: green">49.80ms</span> | <span style="color: green">63.00ms</span> |
| @adobe/react-spectrum | 85.01ms                                   | 79.40ms                                   | 135.00ms                                  |

### Switch (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">98.74ms</span>   | <span style="color: red">92.20ms</span>   | <span style="color: red">114.10ms</span>  |
| @gravity-ui/uikit     | 57.47ms                                   | 52.60ms                                   | 63.80ms                                   |
| @mui/material         | <span style="color: green">37.61ms</span> | <span style="color: green">34.70ms</span> | <span style="color: green">43.10ms</span> |
| @adobe/react-spectrum | 82.46ms                                   | 77.80ms                                   | 91.50ms                                   |

### Text (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">98.74ms</span>   | <span style="color: red">93.50ms</span>   | <span style="color: red">130.80ms</span>  |
| @gravity-ui/uikit     | 56.26ms                                   | 51.00ms                                   | 67.10ms                                   |
| @mui/material         | <span style="color: green">32.86ms</span> | <span style="color: green">28.90ms</span> | <span style="color: green">36.40ms</span> |
| @adobe/react-spectrum | 81.51ms                                   | 73.30ms                                   | 90.20ms                                   |

### TextArea (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">101.05ms</span>  | <span style="color: red">96.20ms</span>   | 112.00ms                                  |
| @gravity-ui/uikit     | 60.12ms                                   | 55.10ms                                   | <span style="color: green">82.40ms</span> |
| @mui/material         | <span style="color: green">42.09ms</span> | <span style="color: green">37.20ms</span> | 90.20ms                                   |
| @adobe/react-spectrum | 84.36ms                                   | 79.80ms                                   | <span style="color: red">94.40ms</span>   |

### TextInput (10 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">101.18ms</span>  | <span style="color: red">97.00ms</span>   | <span style="color: red">113.80ms</span>  |
| @gravity-ui/uikit     | 56.82ms                                   | 51.60ms                                   | 65.80ms                                   |
| @mui/material         | <span style="color: green">39.81ms</span> | <span style="color: green">35.30ms</span> | <span style="color: green">44.00ms</span> |
| @adobe/react-spectrum | 83.13ms                                   | 78.30ms                                   | 97.30ms                                   |
