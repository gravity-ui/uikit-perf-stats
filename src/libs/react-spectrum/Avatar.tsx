import {Avatar, Provider, defaultTheme} from '@adobe/react-spectrum';

import {AVATAR_DATA} from '../constants';

export function ReactSpectrumAvatar() {
    return (
        <Provider theme={defaultTheme}>
            {AVATAR_DATA.map((user) => (
                <Avatar key={user} src="https://i.imgur.com/kJOwAdv.png" />
            ))}
        </Provider>
    );
}
