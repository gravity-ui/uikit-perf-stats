import * as React from 'react';

import {Switch} from 'antd';

import {SWITCH_DATA} from '../constants';

export function AntSwitch() {
    return (
        <React.Fragment>
            {SWITCH_DATA.map((switch_) => (
                <Switch key={switch_} />
            ))}
        </React.Fragment>
    );
}
