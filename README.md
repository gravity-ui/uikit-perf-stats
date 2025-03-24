# Сравнение производительности React компонентов

## Методоллогия

> [!INFO]
> Предлагаемый способ сравнения производительности компонентов не предназначен для получения точных абсолютных чисел. В первую очередь он предполагает организацию одинаковой среды для запуска кода, получения результатов относительно этой среды и последующее их сравнение.

- Выбираем n библиотек для сравнения
- Выбираем n браузеров для запуска кода, написанного с использованием выбранных библиотек
- Выбираем одно устройство, на котором будет запускаться код
- Составляем список компонентов, которые будут использованы для сравнения. Компоненты должны иметь одинаковый функционал и при сравнении использовать минимально необходимое количество параметров
- Каждый компонент рендерится в изолированной среде (в ней должно быть минимальное количество кода для корректного рендера одного компонента)
- Каждый компонент обернут в [React.Profiler](https://react.dev/reference/react/Profiler). Время рендеринга рассчитывается так:

```js
const duration = commitTime - startTime;
```

- Делаем замеры для следующих событий: `mount`, `onchange`, `mouseover` / `mouseout`
- Замер для каждого компонента делается минимум 20 раз, после чего высчитывается среднее арифметическое

## Результаты

- Сравниваемые библиотеки:
  - `@adobe/react-spectrum`
  - `@gravity-ui/uikit`
  - `@mui/material`
  - `antd`
- Браузеры:
  - `Firefox` 136.0.2 (aarch64)
  - `Google Chrome` Version 134.0.6998.166 (Official Build), (arm64)
  - `Safari` Version 18.3 (20620.2.4.11.5)
- Устройство: Apple M1 Pro, macOS 15.3.1

---

### Button

<details>
<summary>Результаты рендера 1000 кнопок</summary>

#### Firefox

| Library               | Mount                                    | Onchange | Mouseover / Mouseout                  |
| :-------------------- | :--------------------------------------- | :------- | :------------------------------------ |
| @adobe/react-spectrum | <span style="color: red;">140.31</span>  | -        | <span style="color: red;">2.90</span> |
| @gravity-ui/uikit     | <span style="color: green;">20.15</span> | -        | <span style="color: green;">0</span>  |
| @mui/material         | 112.28                                   | -        | 2.25                                  |
| antd                  | 134.58                                   | -        | <span style="color: green;">0</span>  |

#### Google Chrome

| Library               | Mount                                    | Onchange | Mouseover / Mouseout                  |
| :-------------------- | :--------------------------------------- | :------- | :------------------------------------ |
| @adobe/react-spectrum | <span style="color: red;">109.63</span>  | -        | <span style="color: red;">2.32</span> |
| @gravity-ui/uikit     | <span style="color: green;">19.95</span> | -        | <span style="color: green;">0</span>  |
| @mui/material         | 82.89                                    | -        | 1.75                                  |
| antd                  | 101.32                                   | -        | <span style="color: green;">0</span>  |

#### Safari

| Library               | Mount                                    | Onchange | Mouseover / Mouseout                  |
| :-------------------- | :--------------------------------------- | :------- | :------------------------------------ |
| @adobe/react-spectrum | 209.35                                   | -        | <span style="color: red;">3.87</span> |
| @gravity-ui/uikit     | <span style="color: green;">36.50</span> | -        | <span style="color: green;">0</span>  |
| @mui/material         | 181.91                                   | -        | 3.21                                  |
| antd                  | <span style="color: red;">211.40</span>  | -        | <span style="color: green;">0</span>  |

</details>

---

### TextField

<details>
<summary>Результаты рендера 1000 полей для ввода текста</summary>

#### Firefox

| Library               | Mount                                    | Onchange                                | Mouseover / Mouseout                  |
| :-------------------- | :--------------------------------------- | :-------------------------------------- | :------------------------------------ |
| @adobe/react-spectrum | 197.10                                   | <span style="color: red;">3.58</span>   | <span style="color: red;">2.67</span> |
| @gravity-ui/uikit     | <span style="color: green;">52.31</span> | 3.28                                    | <span style="color: green;">0</span>  |
| @mui/material         | <span style="color: red;">321.23</span>  | 2.78\*                                  | <span style="color: green;">0</span>  |
| antd                  | 119.25                                   | <span style="color: green;">2.69</span> | <span style="color: green;">0</span>  |

\* ререндер происходит только при вводе первого символа и полном удалении символов

#### Google Chrome

| Library               | Mount                                    | Onchange                                | Mouseover / Mouseout                  |
| :-------------------- | :--------------------------------------- | :-------------------------------------- | :------------------------------------ |
| @adobe/react-spectrum | <span style="color: red;">223.36</span>  | <span style="color: red;">2.05</span>   | <span style="color: red;">1.14</span> |
| @gravity-ui/uikit     | <span style="color: green;">46.57</span> | 1.62                                    | <span style="color: green;">0</span>  |
| @mui/material         | 218.56                                   | 1.88\*                                  | <span style="color: green;">0</span>  |
| antd                  | 101.57                                   | <span style="color: green;">1.57</span> | <span style="color: green;">0</span>  |

\* ререндер происходит только при вводе первого символа и полном удалении символов

#### Safari

| Library               | Mount                                    | Onchange                                | Mouseover / Mouseout                  |
| :-------------------- | :--------------------------------------- | :-------------------------------------- | :------------------------------------ |
| @adobe/react-spectrum | 333.63                                   | <span style="color: red;">4.92</span>   | <span style="color: red;">2.55</span> |
| @gravity-ui/uikit     | <span style="color: green;">88.79</span> | <span style="color: green;">3.18</span> | <span style="color: green;">0</span>  |
| @mui/material         | <span style="color: red;">474.34</span>  | 3.27\*                                  | <span style="color: green;">0</span>  |
| antd                  | 196.59                                   | 4.65                                    | <span style="color: green;">0</span>  |

\* ререндер происходит только при вводе первого символа и полном удалении символов

</details>

---

### Checkbox

<details>
<summary>Результаты рендера 1000 чекбоксов</summary>

#### Firefox

| Library               | Mount                                    | Onchange                                | Mouseover / Mouseout                  |
| :-------------------- | :--------------------------------------- | :-------------------------------------- | :------------------------------------ |
| @adobe/react-spectrum | 197.31                                   | <span style="color: red;">2.22</span>   | <span style="color: red;">1.89</span> |
| @gravity-ui/uikit     | <span style="color: green;">73.45</span> | 2.04                                    | <span style="color: green;">0</span>  |
| @mui/material         | <span style="color: red;">237.68</span>  | 1.54                                    | 1.11                                  |
| antd                  | 117.93                                   | <span style="color: green;">1.12</span> | <span style="color: green;">0</span>  |

#### Google Chrome

| Library               | Mount                                    | Onchange                                | Mouseover / Mouseout                  |
| :-------------------- | :--------------------------------------- | :-------------------------------------- | :------------------------------------ |
| @adobe/react-spectrum | <span style="color: red;">233.31</span>  | <span style="color: red;">1.59</span>   | <span style="color: red;">1.27</span> |
| @gravity-ui/uikit     | <span style="color: green;">60.10</span> | 1.40                                    | <span style="color: green;">0</span>  |
| @mui/material         | 157.18                                   | 1.31                                    | 0.63                                  |
| antd                  | 90.63                                    | <span style="color: green;">0.95</span> | <span style="color: green;">0</span>  |

#### Safari

| Library               | Mount                                     | Onchange                                | Mouseover / Mouseout                  |
| :-------------------- | :---------------------------------------- | :-------------------------------------- | :------------------------------------ |
| @adobe/react-spectrum | <span style="color: red;">378.46</span>   | 2.60                                    | <span style="color: red;">2.62</span> |
| @gravity-ui/uikit     | <span style="color: green;">116.52</span> | <span style="color: red;">4.20</span>   | <span style="color: green;">0</span>  |
| @mui/material         | 359.78                                    | 2.56                                    | 1.98                                  |
| antd                  | 193.97                                    | <span style="color: green;">2.01</span> | <span style="color: green;">0</span>  |

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
