import {Checkbox, ThemeProvider} from '@gravity-ui/uikit';
import {Profiler} from './Profiler';
import {CHECKBOX_DATA} from './constants';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function GravityCheckbox() {
    return (
        <Profiler id="gravity-checkbox">
            <ThemeProvider theme="light">
                {CHECKBOX_DATA.map((checkbox) => (
                    <Checkbox key={checkbox} />
                ))}
            </ThemeProvider>
        </Profiler>
    );
}
