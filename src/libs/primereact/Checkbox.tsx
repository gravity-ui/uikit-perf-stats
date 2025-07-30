import * as React from 'react';

import {Checkbox} from 'primereact/checkbox';

import {CHECKBOX_DATA} from '../constants';

export function PrimereactCheckbox() {
    return (
        <React.Fragment>
            {CHECKBOX_DATA.map((checkbox) => (
                <Checkbox key={checkbox} checked={false}>
                    {checkbox}
                </Checkbox>
            ))}
        </React.Fragment>
    );
}
