import {Label, ThemeProvider} from '@gravity-ui/uikit';

import {LABEL_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravityLabel() {
    return (
        <ThemeProvider theme="light">
            {LABEL_DATA.map((label) => (
                <Label key={label}>{label}</Label>
            ))}
        </ThemeProvider>
    );
}
