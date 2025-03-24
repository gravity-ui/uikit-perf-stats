import {Checkbox, Provider, defaultTheme} from '@adobe/react-spectrum';
import {Profiler} from './Profiler';
import {CHECKBOX_DATA} from './constants';

export function ReactSpectrumCheckbox() {
    return (
        <Profiler id="react-spectrum-checkbox">
            <Provider theme={defaultTheme}>
                {CHECKBOX_DATA.map((key) => (
                    <Checkbox key={key} />
                ))}
            </Provider>
        </Profiler>
    );
}
