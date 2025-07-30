import * as React from 'react';

import {Avatar} from 'primereact/avatar';

import {AVATAR_DATA} from '../constants';

export function PrimereactAvatar() {
    return (
        <React.Fragment>
            {AVATAR_DATA.map((user) => (
                <Avatar key={user} image="https://i.imgur.com/kJOwAdv.png" />
            ))}
        </React.Fragment>
    );
}
