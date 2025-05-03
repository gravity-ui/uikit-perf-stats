import * as React from 'react';

import {TextField} from '@mui/material';

import {NUMBER_INPUT_DATA} from '../constants';

export function MuiNumberInput() {
    return (
        <React.Fragment>
            {NUMBER_INPUT_DATA.map((numberInput) => (
                <TextField key={numberInput} type="number" />
            ))}
        </React.Fragment>
    );
}
