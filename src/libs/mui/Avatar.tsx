import * as React from 'react';

import Avatar from '@mui/material/Avatar';

import {AVATAR_DATA} from '../constants';

export function MaterialAvatar() {
    return (
        <React.Fragment>
            {AVATAR_DATA.map((user) => (
                <Avatar key={user} src="https://i.imgur.com/kJOwAdv.png" />
            ))}
        </React.Fragment>
    );
}
