import * as React from 'react';

import Typography from '@mui/material/Typography';

import {TEXT_DATA} from '../constants';

export function MaterialText() {
    return (
        <React.Fragment>
            {TEXT_DATA.map((text) => (
                <Typography key={text}>{text}</Typography>
            ))}
        </React.Fragment>
    );
}
