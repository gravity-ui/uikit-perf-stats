# Performance Comparer

## Описание

Performance Comparer - это инструмент для измерения и сравнения производительности React-компонентов с использованием [Playwright](https://playwright.dev) и [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver).

## TLDR

[Отчеты о производительности](#отчеты-о-производительности)

## Подход к измерению

Основные этапы:

1. **Сбор метрик**

   - Используется `PerformanceObserver` для отслеживания событий `measure` (пользовательские измерения)
   - Все метрики сохраняются в глобальном объекте `__PERFORMANCE_METRICS__`

2. **Измеряемые показатели**

   - Время рендеринга (мс)
     - Среднее значение
     - Минимальное значение
     - Максимальное значение
   - Количество DOM-узлов в компоненте

3. **Процесс измерения**
   - Тест запускается указанное количество раз
   - Для каждого запуска:
     - Инициализируется PerformanceObserver
     - Выполняется рендеринг компонента
     - Собираются все метрики
     - Вычисляется общее время рендеринга
   - Результаты агрегируются и сохраняются в отчет

## Как использовать

### Требования

- Node.js >= 20
- Playwright
- Docker (для запуска в контейнере)

### Конфигурация

Все переменные окружения должны быть определены в файле `.env`:

```bash
REPEAT_EACH=1                       # Количество повторений выполнения для каждого теста
VITE_AVATAR_NODES_COUNT=1000        # Количество узлов для компонента Avatar
VITE_BUTTON_NODES_COUNT=1000        # Количество узлов для компонента Button
VITE_CHECKBOX_NODES_COUNT=1000      # Количество узлов для компонента Checkbox
VITE_LABEL_NODES_COUNT=1000         # Количество узлов для компонента Label
VITE_LINK_NODES_COUNT=1000          # Количество узлов для компонента Link
VITE_NUMBER_INPUT_NODES_COUNT=1000  # Количество узлов для компонента NumberInput
VITE_RADIO_GROUP_NODES_COUNT=1000   # Количество узлов для компонента RadioGroup
VITE_SWITCH_NODES_COUNT=1000        # Количество узлов для компонента Switch
VITE_TEXT_NODES_COUNT=1000          # Количество узлов для компонента Text
VITE_TEXT_INPUT_NODES_COUNT=1000    # Количество узлов для компонента TextInput
VITE_TEXT_AREA_NODES_COUNT=1000     # Количество узлов для компонента TextArea
```

### 1. Настройка окружения

```bash
# Установка зависимостей
npm run playwright:install

# Очистка кэша (при необходимости, например когда меняется файл .env)
npm run playwright:clear-cache
```

### 2. Запуск тестов

```bash
# Запуск тестов локально
npm run playwright

# Запуск тестов в Docker
npm run playwright:docker
```

### 3. Результаты

Результаты тестов будут отображены в консоли после успешного завершения тестов.

## Отчеты о производительности

В отчетах представлены результаты тестирования производительности следующих UI-библиотек: [antd](https://github.com/ant-design/ant-design),[ @gravity-ui/uikit](https://github.com/gravity-ui/uikit), [@mui/material](https://github.com/mui/material-ui), [@adobe/react-spectrum](https://github.com/adobe/react-spectrum):

- [Отчет с 10 узлами](./REPORT_10.md)
- [Отчет со 100 узлами](./REPORT_100.md)
- [Отчет с 1000 узлами](./REPORT_1000.md)
