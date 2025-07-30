import * as React from 'react';

import {InputSwitch} from 'primereact/inputswitch';

import {SWITCH_DATA} from '../constants';

export function PrimereactSwitch() {
    return (
        <React.Fragment>
            {SWITCH_DATA.map((switchData) => (
                <InputSwitch key={switchData} checked={true} />
            ))}
        </React.Fragment>
    );
}
