import * as React from 'react';

import {Button} from 'primereact/button';

import {BUTTONS_DATA} from '../constants';

export function PrimereactButton() {
    return (
        <React.Fragment>
            {BUTTONS_DATA.map((button) => (
                <Button key={button}>{button}</Button>
            ))}
        </React.Fragment>
    );
}
