import {Provider, TextField, defaultTheme} from '@adobe/react-spectrum';

import {TEXT_INPUT_DATA} from '../constants';

export function ReactSpectrumTextInput() {
    return (
        <Provider theme={defaultTheme}>
            {TEXT_INPUT_DATA.map((input) => (
                <TextField key={input} />
            ))}
        </Provider>
    );
}
