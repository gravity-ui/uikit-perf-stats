import * as React from 'react';

import {Avatar} from 'antd';

import {AVATAR_DATA} from '../constants';

export function AntAvatar() {
    return (
        <React.Fragment>
            {AVATAR_DATA.map((user) => (
                <Avatar key={user} src="https://i.imgur.com/kJOwAdv.png" />
            ))}
        </React.Fragment>
    );
}
