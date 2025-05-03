import * as React from 'react';

import TextField from '@mui/material/TextField';

import {TEXT_INPUT_DATA} from '../constants';

export function MaterialTextInput() {
    return (
        <React.Fragment>
            {TEXT_INPUT_DATA.map((input) => (
                <TextField key={input} />
            ))}
        </React.Fragment>
    );
}
