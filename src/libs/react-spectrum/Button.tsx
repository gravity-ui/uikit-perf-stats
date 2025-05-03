import {Button, Provider, defaultTheme} from '@adobe/react-spectrum';

import {BUTTONS_DATA} from '../constants';

export function ReactSpectrumButton() {
    return (
        <Provider theme={defaultTheme}>
            {BUTTONS_DATA.map((button) => (
                <Button key={button} variant="primary">
                    {button}
                </Button>
            ))}
        </Provider>
    );
}
