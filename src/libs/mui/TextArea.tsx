import * as React from 'react';

import TextField from '@mui/material/TextField';

import {TEXTAREA_DATA} from '../constants';

export function MaterialTextArea() {
    return (
        <React.Fragment>
            {TEXTAREA_DATA.map((textarea) => (
                <TextField key={textarea} multiline rows={4} />
            ))}
        </React.Fragment>
    );
}
