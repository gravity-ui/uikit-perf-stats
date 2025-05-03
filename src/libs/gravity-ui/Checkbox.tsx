import {Checkbox, ThemeProvider} from '@gravity-ui/uikit';

import {CHECKBOX_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravityCheckbox() {
    return (
        <ThemeProvider theme="light">
            {CHECKBOX_DATA.map((checkbox) => (
                <Checkbox key={checkbox}>{checkbox}</Checkbox>
            ))}
        </ThemeProvider>
    );
}
