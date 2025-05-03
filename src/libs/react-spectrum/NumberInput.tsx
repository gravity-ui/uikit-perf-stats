import {NumberField, Provider, defaultTheme} from '@adobe/react-spectrum';

import {NUMBER_INPUT_DATA} from '../constants';

export function ReactSpectrumNumberInput() {
    return (
        <Provider theme={defaultTheme}>
            {NUMBER_INPUT_DATA.map((numberField) => (
                <NumberField key={numberField} />
            ))}
        </Provider>
    );
}
