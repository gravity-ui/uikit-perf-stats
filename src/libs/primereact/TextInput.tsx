import * as React from 'react';

import {InputText} from 'primereact/inputtext';

import {TEXT_INPUT_DATA} from '../constants';

export function PrimereactTextInput() {
    return (
        <React.Fragment>
            {TEXT_INPUT_DATA.map((input) => (
                <InputText key={input} />
            ))}
        </React.Fragment>
    );
}
