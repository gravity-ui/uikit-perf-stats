import * as React from 'react';

import {Tag} from 'antd';

import {LABEL_DATA} from '../constants';

export function AntLabel() {
    return (
        <React.Fragment>
            {LABEL_DATA.map((label) => (
                <Tag key={label}>{label}</Tag>
            ))}
        </React.Fragment>
    );
}
