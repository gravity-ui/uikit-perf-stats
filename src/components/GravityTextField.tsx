import {TextInput, ThemeProvider} from '@gravity-ui/uikit';
import {Profiler} from './Profiler';
import {BUTTONS_DATA} from './constants';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function GravityTextField() {
    return (
        <Profiler id="gravity-text-field">
            <ThemeProvider theme="light">
                {BUTTONS_DATA.map((key) => (
                    <TextInput key={key} />
                ))}
            </ThemeProvider>
        </Profiler>
    );
}
