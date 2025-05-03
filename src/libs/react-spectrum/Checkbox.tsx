import {Checkbox, Provider, defaultTheme} from '@adobe/react-spectrum';

import {CHECKBOX_DATA} from '../constants';

export function ReactSpectrumCheckbox() {
    return (
        <Provider theme={defaultTheme}>
            {CHECKBOX_DATA.map((checkbox) => (
                <Checkbox key={checkbox}>{checkbox}</Checkbox>
            ))}
        </Provider>
    );
}
