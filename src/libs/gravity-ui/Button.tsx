import {Button, ThemeProvider} from '@gravity-ui/uikit';

import {BUTTONS_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravityButton() {
    return (
        <ThemeProvider theme="light">
            {BUTTONS_DATA.map((button) => (
                <Button key={button}>{button}</Button>
            ))}
        </ThemeProvider>
    );
}
