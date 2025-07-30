import * as React from 'react';

import {InputTextarea} from 'primereact/inputtextarea';

import {TEXTAREA_DATA} from '../constants';

export function PrimereactTextArea() {
    return (
        <React.Fragment>
            {TEXTAREA_DATA.map((textarea) => (
                <InputTextarea key={textarea} rows={4} />
            ))}
        </React.Fragment>
    );
}
