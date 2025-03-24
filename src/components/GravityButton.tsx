import {Button, ThemeProvider} from '@gravity-ui/uikit';
import {Profiler} from './Profiler';
import {BUTTONS_DATA} from './constants';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function GravityButton() {
    return (
        <Profiler id="gravity-button">
            <ThemeProvider theme="light">
                {BUTTONS_DATA.map((button) => (
                    <Button key={button}>{button}</Button>
                ))}
            </ThemeProvider>
        </Profiler>
    );
}
