import * as React from 'react';

import Switch from '@mui/material/Switch';

import {SWITCH_DATA} from '../constants';

export function MaterialSwitch() {
    return (
        <React.Fragment>
            {SWITCH_DATA.map((switchData) => (
                <Switch key={switchData} />
            ))}
        </React.Fragment>
    );
}
