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

### Avatar (1000 nodes)

| Lib               | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| ----------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd              | <span style="color: red">162.33ms</span>  | <span style="color: red">155.80ms</span>  | <span style="color: red">173.80ms</span>  |
| @gravity-ui/uikit | 73.27ms                                   | 69.40ms                                   | 81.60ms                                   |
| @mui/material     | <span style="color: green">51.18ms</span> | <span style="color: green">49.60ms</span> | <span style="color: green">57.00ms</span> |
| React Spectrum    | 101.98ms                                  | 97.50ms                                   | 125.30ms                                  |

### Button (1000 nodes)

| Lib               | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| ----------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd              | <span style="color: red">192.80ms</span>  | <span style="color: red">180.30ms</span>  | <span style="color: red">214.90ms</span>  |
| @gravity-ui/uikit | <span style="color: green">60.17ms</span> | <span style="color: green">55.00ms</span> | 87.00ms                                   |
| @mui/material     | 62.44ms                                   | 57.20ms                                   | <span style="color: green">73.30ms</span> |
| React Spectrum    | 168.81ms                                  | 158.50ms                                  | 186.30ms                                  |

### Checkbox (1000 nodes)

| Lib               | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| ----------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd              | <span style="color: red">166.37ms</span>  | <span style="color: red">138.00ms</span>  | <span style="color: red">180.60ms</span>  |
| @gravity-ui/uikit | <span style="color: green">70.59ms</span> | <span style="color: green">67.20ms</span> | <span style="color: green">77.70ms</span> |
| @mui/material     | 95.65ms                                   | 93.60ms                                   | 100.70ms                                  |
| React Spectrum    | 121.51ms                                  | 118.40ms                                  | 129.80ms                                  |

### Label (1000 nodes)

| Lib               | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| ----------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd              | <span style="color: red">121.52ms</span>  | <span style="color: red">112.40ms</span>  | <span style="color: red">150.20ms</span>  |
| @gravity-ui/uikit | 61.76ms                                   | 57.40ms                                   | 81.40ms                                   |
| @mui/material     | <span style="color: green">49.11ms</span> | <span style="color: green">46.70ms</span> | <span style="color: green">53.90ms</span> |
| React Spectrum    | 89.23ms                                   | 83.80ms                                   | 101.00ms                                  |

### Link (1000 nodes)

| Lib               | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| ----------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd              | <span style="color: red">143.22ms</span>  | <span style="color: red">136.60ms</span>  | <span style="color: red">161.00ms</span>  |
| @gravity-ui/uikit | 59.56ms                                   | 54.30ms                                   | 65.40ms                                   |
| @mui/material     | <span style="color: green">49.27ms</span> | <span style="color: green">45.30ms</span> | <span style="color: green">52.60ms</span> |
| React Spectrum    | 102.62ms                                  | 99.40ms                                   | 108.20ms                                  |

### NumberInput (1000 nodes)

| Lib               | Avg Render Time                            | Min Render Time                            | Max Render Time                            |
| ----------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| antd              | 210.43ms                                   | 173.90ms                                   | 230.00ms                                   |
| @gravity-ui/uikit | <span style="color: green">107.91ms</span> | <span style="color: green">104.10ms</span> | <span style="color: green">119.40ms</span> |
| @mui/material     | 131.51ms                                   | 123.60ms                                   | 197.00ms                                   |
| React Spectrum    | <span style="color: red">468.11ms</span>   | <span style="color: red">456.60ms</span>   | <span style="color: red">544.10ms</span>   |

### RadioGroup (1000 nodes)

| Lib               | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| ----------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd              | 347.88ms                                  | 339.70ms                                  | 392.40ms                                  |
| @gravity-ui/uikit | <span style="color: green">86.55ms</span> | <span style="color: green">81.90ms</span> | <span style="color: green">91.30ms</span> |
| @mui/material     | 360.07ms                                  | 350.60ms                                  | 422.40ms                                  |
| React Spectrum    | <span style="color: red">469.38ms</span>  | <span style="color: red">395.40ms</span>  | <span style="color: red">585.90ms</span>  |

### Switch (1000 nodes)

| Lib               | Avg Render Time                           | Min Render Time                           | Max Render Time                            |
| ----------------- | ----------------------------------------- | ----------------------------------------- | ------------------------------------------ |
| antd              | <span style="color: red">163.68ms</span>  | <span style="color: red">138.60ms</span>  | <span style="color: red">346.40ms</span>   |
| @gravity-ui/uikit | <span style="color: green">69.87ms</span> | <span style="color: green">62.30ms</span> | <span style="color: green">101.80ms</span> |
| @mui/material     | 90.55ms                                   | 78.30ms                                   | 267.20ms                                   |
| React Spectrum    | 102.81ms                                  | 95.70ms                                   | 111.20ms                                   |

### Text (1000 nodes)

| Lib               | Avg Render Time                           | Min Render Time                           | Max Render Time                           |
| ----------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| antd              | <span style="color: red">139.26ms</span>  | <span style="color: red">129.90ms</span>  | <span style="color: red">158.70ms</span>  |
| @gravity-ui/uikit | 58.44ms                                   | 52.80ms                                   | 63.00ms                                   |
| @mui/material     | <span style="color: green">41.68ms</span> | <span style="color: green">38.30ms</span> | <span style="color: green">49.90ms</span> |
| React Spectrum    | 84.18ms                                   | 79.60ms                                   | 105.10ms                                  |

### TextArea (1000 nodes)

| Lib               | Avg Render Time                            | Min Render Time                            | Max Render Time                            |
| ----------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| antd              | <span style="color: green">164.28ms</span> | <span style="color: green">150.70ms</span> | <span style="color: green">186.70ms</span> |
| @gravity-ui/uikit | <span style="color: red">1459.53ms</span>  | <span style="color: red">1435.10ms</span>  | <span style="color: red">1556.70ms</span>  |
| @mui/material     | 745.51ms                                   | 710.70ms                                   | 824.20ms                                   |
| React Spectrum    | 442.96ms                                   | 403.20ms                                   | 520.30ms                                   |

### TextInput (1000 nodes)

| Lib               | Avg Render Time                            | Min Render Time                            | Max Render Time                            |
| ----------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| antd              | <span style="color: green">161.90ms</span> | <span style="color: green">150.10ms</span> | <span style="color: green">184.60ms</span> |
| @gravity-ui/uikit | 65.57ms                                    | 59.50ms                                    | 80.60ms                                    |
| @mui/material     | 112.49ms                                   | 104.90ms                                   | 179.70ms                                   |
| React Spectrum    | <span style="color: red">165.24ms</span>   | <span style="color: red">153.60ms</span>   | <span style="color: red">238.00ms</span>   |
