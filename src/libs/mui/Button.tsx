import * as React from 'react';

import Button from '@mui/material/Button';

import {BUTTONS_DATA} from '../constants';

export function MaterialButton() {
    return (
        <React.Fragment>
            {BUTTONS_DATA.map((button) => (
                <Button key={button}>{button}</Button>
            ))}
        </React.Fragment>
    );
}
