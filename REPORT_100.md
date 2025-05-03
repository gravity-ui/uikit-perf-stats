# Performance Comparison Report

[← Back to README](./README.md)

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

### Avatar (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">124.45ms</span>  | <span style="color: red">120.80ms</span>  | <span style="color: red">142.20ms</span>  |
| @gravity-ui/uikit     | 71.51ms                                   | 64.80ms                                   | 102.00ms                                  |
| @mui/material         | <span style="color: green">38.95ms</span> | <span style="color: green">35.40ms</span> | <span style="color: green">46.50ms</span> |
| @adobe/react-spectrum | 91.48ms                                   | 85.80ms                                   | 105.00ms                                  |

### Button (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">112.67ms</span>  | <span style="color: red">107.80ms</span>  | <span style="color: red">125.90ms</span>  |
| @gravity-ui/uikit     | 57.20ms                                   | 52.00ms                                   | 64.00ms                                   |
| @mui/material         | <span style="color: green">42.09ms</span> | <span style="color: green">39.40ms</span> | <span style="color: green">45.30ms</span> |
| @adobe/react-spectrum | 96.03ms                                   | 89.40ms                                   | 108.50ms                                  |

### Checkbox (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">105.00ms</span>  | <span style="color: red">99.50ms</span>   | <span style="color: red">120.80ms</span>  |
| @gravity-ui/uikit     | 58.79ms                                   | 56.10ms                                   | <span style="color: green">63.20ms</span> |
| @mui/material         | <span style="color: green">46.40ms</span> | <span style="color: green">42.10ms</span> | 80.70ms                                   |
| @adobe/react-spectrum | 85.95ms                                   | 81.90ms                                   | 116.60ms                                  |

### Label (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">100.33ms</span>  | <span style="color: red">92.50ms</span>   | <span style="color: red">157.70ms</span>  |
| @gravity-ui/uikit     | 57.90ms                                   | 52.20ms                                   | 89.30ms                                   |
| @mui/material         | <span style="color: green">38.88ms</span> | <span style="color: green">36.40ms</span> | <span style="color: green">43.50ms</span> |
| @adobe/react-spectrum | 82.32ms                                   | 78.60ms                                   | 94.00ms                                   |

### Link (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">104.43ms</span>  | <span style="color: red">100.00ms</span>  | <span style="color: red">119.80ms</span>  |
| @gravity-ui/uikit     | 56.30ms                                   | 53.70ms                                   | 61.40ms                                   |
| @mui/material         | <span style="color: green">37.21ms</span> | <span style="color: green">31.00ms</span> | <span style="color: green">42.30ms</span> |
| @adobe/react-spectrum | 84.20ms                                   | 79.00ms                                   | 97.00ms                                   |

### NumberInput (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | 114.75ms                                  | 109.40ms                                  | 133.10ms                                  |
| @gravity-ui/uikit     | 67.25ms                                   | 63.60ms                                   | 85.40ms                                   |
| @mui/material         | <span style="color: green">63.79ms</span> | <span style="color: green">57.20ms</span> | <span style="color: green">79.80ms</span> |
| @adobe/react-spectrum | <span style="color: red">128.67ms</span>  | <span style="color: red">121.80ms</span>  | <span style="color: red">157.90ms</span>  |

### RadioGroup (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">118.02ms</span>  | <span style="color: red">110.60ms</span>  | <span style="color: red">138.20ms</span>  |
| @gravity-ui/uikit     | <span style="color: green">62.61ms</span> | <span style="color: green">56.60ms</span> | <span style="color: green">76.80ms</span> |
| @mui/material         | 80.86ms                                   | 73.70ms                                   | 94.10ms                                   |
| @adobe/react-spectrum | 105.85ms                                  | 99.60ms                                   | 149.50ms                                  |

### Switch (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">104.47ms</span>  | <span style="color: red">99.00ms</span>   | 114.40ms                                  |
| @gravity-ui/uikit     | 59.38ms                                   | 55.60ms                                   | 64.00ms                                   |
| @mui/material         | <span style="color: green">44.85ms</span> | <span style="color: green">42.00ms</span> | <span style="color: green">49.00ms</span> |
| @adobe/react-spectrum | 85.91ms                                   | 78.00ms                                   | <span style="color: red">117.70ms</span>  |

### Text (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">101.74ms</span>  | <span style="color: red">97.60ms</span>   | 113.30ms                                  |
| @gravity-ui/uikit     | 56.26ms                                   | 49.90ms                                   | 60.70ms                                   |
| @mui/material         | <span style="color: green">35.93ms</span> | <span style="color: green">30.70ms</span> | <span style="color: green">39.40ms</span> |
| @adobe/react-spectrum | 83.91ms                                   | 75.50ms                                   | <span style="color: red">121.80ms</span>  |

### TextArea (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">109.14ms</span>  | <span style="color: red">104.50ms</span>  | <span style="color: red">137.70ms</span>  |
| @gravity-ui/uikit     | 71.39ms                                   | 66.50ms                                   | 80.90ms                                   |
| @mui/material         | <span style="color: green">61.77ms</span> | <span style="color: green">59.10ms</span> | <span style="color: green">64.40ms</span> |
| @adobe/react-spectrum | 103.51ms                                  | 97.00ms                                   | 111.10ms                                  |

### TextInput (100 nodes)

| Lib                   | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| --------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd                  | <span style="color: red">107.55ms</span>  | <span style="color: red">103.50ms</span>  | <span style="color: red">118.60ms</span>  |
| @gravity-ui/uikit     | 59.51ms                                   | 56.00ms                                   | 64.90ms                                   |
| @mui/material         | <span style="color: green">50.10ms</span> | <span style="color: green">45.60ms</span> | <span style="color: green">54.70ms</span> |
| @adobe/react-spectrum | 92.20ms                                   | 88.50ms                                   | 103.40ms                                  |

[← Back to README](./README.md)
