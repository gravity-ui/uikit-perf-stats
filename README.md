# React components performance comparison

## Методоллогия

> [!IMPORTANT]
> The proposed method for comparing component performance is not intended to obtain precise absolute numbers. Primarily, it aims to establish an identical environment for running code, obtaining results relative to this environment, and subsequently comparing them.

- Select `n` libraries for comparison
- Select `n` browsers to run code written using the selected libraries
- Choose one device on which the code will be executed
- Compile a list of components that will be used for comparison. Components should have identical functionality and use the minimum necessary number of parameters when comparing
- Each component is rendered in an isolated environment (it should contain the minimum amount of code required for the correct rendering of a single component)
- Each component is wrapped in [React.Profiler](https://react.dev/reference/react/Profiler). Rendering time is calculated as:

```js
const duration = commitTime - startTime;
```

- Measurements are taken for the following events: `mount`, `onchange`, `mouseover` / `mouseout`
- Each component is measured at least 20 times, after which the arithmetic mean is calculated

## Results

- Libraries being compared:
  - `@adobe/react-spectrum`
  - `@gravity-ui/uikit`
  - `@mui/material`
  - `antd`
- Browsers:
  - `Firefox` 136.0.2 (aarch64)
  - `Google Chrome` Version 134.0.6998.166 (Official Build), (arm64)
  - `Safari` Version 18.3 (20620.2.4.11.5)
- Device: Apple M1 Pro, macOS 15.3.1

---

### Button

<details>
<summary>1000 buttons rendering results</summary>

#### Firefox

| Library               | Mount  | Onchange | Mouseover / Mouseout |
| :-------------------- | :----- | :------- | :------------------- |
| @adobe/react-spectrum | 140.31 | -        | 2.90                 |
| @gravity-ui/uikit     | 20.15  | -        | 0                    |
| @mui/material         | 112.28 | -        | 2.25                 |
| antd                  | 134.58 | -        | 0                    |

#### Google Chrome

| Library               | Mount  | Onchange | Mouseover / Mouseout |
| :-------------------- | :----- | :------- | :------------------- |
| @adobe/react-spectrum | 109.63 | -        | 2.32                 |
| @gravity-ui/uikit     | 19.95  | -        | 0                    |
| @mui/material         | 82.89  | -        | 1.75                 |
| antd                  | 101.32 | -        | 0                    |

#### Safari

| Library               | Mount  | Onchange | Mouseover / Mouseout |
| :-------------------- | :----- | :------- | :------------------- |
| @adobe/react-spectrum | 209.35 | -        | 3.87                 |
| @gravity-ui/uikit     | 36.50  | -        | 0                    |
| @mui/material         | 181.91 | -        | 3.21                 |
| antd                  | 211.40 | -        | 0                    |

</details>

---

### TextField

<details>
<summary>1000 text fields rendering results</summary>

#### Firefox

| Library               | Mount  | Onchange | Mouseover / Mouseout |
| :-------------------- | :----- | :------- | :------------------- |
| @adobe/react-spectrum | 197.10 | 3.58     | 2.67                 |
| @gravity-ui/uikit     | 52.31  | 3.28     | 0                    |
| @mui/material         | 321.23 | 2.78\*   | 0                    |
| antd                  | 119.25 | 2.69     | 0                    |

\* rendering occurs only when the first character is entered and the characters are completely deleted

#### Google Chrome

| Library               | Mount  | Onchange | Mouseover / Mouseout |
| :-------------------- | :----- | :------- | :------------------- |
| @adobe/react-spectrum | 223.36 | 2.05     | 1.14                 |
| @gravity-ui/uikit     | 46.57  | 1.62     | 0                    |
| @mui/material         | 218.56 | 1.88\*   | 0                    |
| antd                  | 101.57 | 1.57     | 0                    |

\* rendering occurs only when the first character is entered and the characters are completely deleted

#### Safari

| Library               | Mount  | Onchange | Mouseover / Mouseout |
| :-------------------- | :----- | :------- | :------------------- |
| @adobe/react-spectrum | 333.63 | 4.92     | 2.55                 |
| @gravity-ui/uikit     | 88.79  | 3.18     | 0                    |
| @mui/material         | 474.34 | 3.27\*   | 0                    |
| antd                  | 196.59 | 4.65     | 0                    |

\* rendering occurs only when the first character is entered and the characters are completely deleted

</details>

---

### Checkbox

<details>
<summary>1000 checkboxes rendering results</summary>

#### Firefox

| Library               | Mount  | Onchange | Mouseover / Mouseout |
| :-------------------- | :----- | :------- | :------------------- |
| @adobe/react-spectrum | 197.31 | 2.22     | 1.89                 |
| @gravity-ui/uikit     | 73.45  | 2.04     | 0                    |
| @mui/material         | 237.68 | 1.54     | 1.11                 |
| antd                  | 117.93 | 1.12     | 0                    |

#### Google Chrome

| Library               | Mount  | Onchange | Mouseover / Mouseout |
| :-------------------- | :----- | :------- | :------------------- |
| @adobe/react-spectrum | 233.31 | 1.59     | 1.27                 |
| @gravity-ui/uikit     | 60.10  | 1.40     | 0                    |
| @mui/material         | 157.18 | 1.31     | 0.63                 |
| antd                  | 90.63  | 0.95     | 0                    |

#### Safari

| Library               | Mount  | Onchange | Mouseover / Mouseout |
| :-------------------- | :----- | :------- | :------------------- |
| @adobe/react-spectrum | 378.46 | 2.60     | 2.62                 |
| @gravity-ui/uikit     | 116.52 | 4.20     | 0                    |
| @mui/material         | 359.78 | 2.56     | 1.98                 |
| antd                  | 193.97 | 2.01     | 0                    |

</details>

## Development

```bash
git clone git@github.com:korvin89/gravity-ui-perf.git
cd ./gravity-ui-perf
npm ci
npm run dev
# Fill all the prompts
# Open development server in your browser
```
