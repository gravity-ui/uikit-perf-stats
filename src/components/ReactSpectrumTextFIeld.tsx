import {Provider, TextField, defaultTheme} from '@adobe/react-spectrum';
import {Profiler} from './Profiler';
import {BUTTONS_DATA} from './constants';

export function ReactSpectrumTextField() {
    return (
        <Profiler id="react-spectrum-text-field">
            <Provider theme={defaultTheme}>
                {BUTTONS_DATA.map((key) => (
                    <TextField key={key} />
                ))}
            </Provider>
        </Profiler>
    );
}
