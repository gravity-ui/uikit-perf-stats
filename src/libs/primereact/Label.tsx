import * as React from 'react';

import {Tag} from 'primereact/tag';

import {LABEL_DATA} from '../constants';

export function PrimereactLabel() {
    return (
        <React.Fragment>
            {LABEL_DATA.map((label) => (
                <Tag key={label} value={label}>
                    {label}
                </Tag>
            ))}
        </React.Fragment>
    );
}
