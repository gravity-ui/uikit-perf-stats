import {Provider, Text, defaultTheme} from '@adobe/react-spectrum';

import {TEXT_DATA} from '../constants';

export function ReactSpectrumText() {
    return (
        <Provider theme={defaultTheme}>
            {TEXT_DATA.map((text) => (
                <Text key={text}>{text}</Text>
            ))}
        </Provider>
    );
}
