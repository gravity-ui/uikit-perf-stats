import {Provider, Switch, defaultTheme} from '@adobe/react-spectrum';

import {SWITCH_DATA} from '../constants';

export function ReactSpectrumSwitch() {
    return (
        <Provider theme={defaultTheme}>
            {SWITCH_DATA.map((switchData) => (
                <Switch key={switchData} />
            ))}
        </Provider>
    );
}
