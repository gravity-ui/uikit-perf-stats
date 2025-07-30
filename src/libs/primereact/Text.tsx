import * as React from 'react';

import {TEXT_DATA} from '../constants';

export function PrimereactText() {
    return (
        <React.Fragment>
            {TEXT_DATA.map((text) => (
                <span key={text}>{text}</span>
            ))}
        </React.Fragment>
    );
}
