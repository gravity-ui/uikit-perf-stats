import {TextInput, ThemeProvider} from '@gravity-ui/uikit';

import {TEXT_INPUT_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravityTextInput() {
    return (
        <ThemeProvider theme="light">
            {TEXT_INPUT_DATA.map((input) => (
                <TextInput key={input} />
            ))}
        </ThemeProvider>
    );
}
