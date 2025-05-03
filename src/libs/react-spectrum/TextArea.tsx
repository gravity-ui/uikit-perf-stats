import {Provider, TextArea, defaultTheme} from '@adobe/react-spectrum';

import {TEXTAREA_DATA} from '../constants';

export function ReactSpectrumTextArea() {
    return (
        <Provider theme={defaultTheme}>
            {TEXTAREA_DATA.map((textarea) => (
                <TextArea key={textarea} />
            ))}
        </Provider>
    );
}
