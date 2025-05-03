import {Avatar, ThemeProvider} from '@gravity-ui/uikit';

import {AVATAR_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravityAvatar() {
    return (
        <ThemeProvider theme="light">
            {AVATAR_DATA.map((user) => (
                <Avatar key={user} text={user} srcSet="https://i.imgur.com/kJOwAdv.png" />
            ))}
        </ThemeProvider>
    );
}
