import * as React from 'react';

import {InputNumber} from 'primereact/inputnumber';

import {NUMBER_INPUT_DATA} from '../constants';

export function PrimereactNumberInput() {
    return (
        <React.Fragment>
            {NUMBER_INPUT_DATA.map((numberInput) => (
                <InputNumber key={numberInput} />
            ))}
        </React.Fragment>
    );
}
