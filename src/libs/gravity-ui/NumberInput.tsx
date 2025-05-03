import {NumberInput, ThemeProvider} from '@gravity-ui/uikit';

import {NUMBER_INPUT_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravityNumberInput() {
    return (
        <ThemeProvider theme="light">
            {NUMBER_INPUT_DATA.map((numberInput) => (
                <NumberInput key={numberInput} />
            ))}
        </ThemeProvider>
    );
}
