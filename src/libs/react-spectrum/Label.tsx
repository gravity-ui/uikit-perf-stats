import {Badge, Provider, defaultTheme} from '@adobe/react-spectrum';

import {LABEL_DATA} from '../constants';

export function ReactSpectrumLabel() {
    return (
        <Provider theme={defaultTheme}>
            {LABEL_DATA.map((label) => (
                <Badge key={label} variant="info">
                    {label}
                </Badge>
            ))}
        </Provider>
    );
}
