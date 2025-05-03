import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import {CHECKBOX_DATA} from '../constants';

export function MaterialCheckbox() {
    return (
        <React.Fragment>
            {CHECKBOX_DATA.map((checkbox) => (
                <FormControlLabel key={checkbox} control={<Checkbox />} label={checkbox} />
            ))}
        </React.Fragment>
    );
}
