import {Switch, ThemeProvider} from '@gravity-ui/uikit';

import {SWITCH_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravitySwitch() {
    return (
        <ThemeProvider theme="light">
            {SWITCH_DATA.map((switch_) => (
                <Switch key={switch_} />
            ))}
        </ThemeProvider>
    );
}
