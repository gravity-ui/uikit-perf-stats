import * as React from 'react';

import Chip from '@mui/material/Chip';

import {LABEL_DATA} from '../constants';

export function MaterialLabel() {
    return (
        <React.Fragment>
            {LABEL_DATA.map((label) => (
                <Chip key={label} label={label} />
            ))}
        </React.Fragment>
    );
}
