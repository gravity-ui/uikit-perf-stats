import * as React from 'react';

import {Checkbox} from 'antd';

import {CHECKBOX_DATA} from '../constants';

export function AntCheckbox() {
    return (
        <React.Fragment>
            {CHECKBOX_DATA.map((checkbox) => (
                <Checkbox key={checkbox}>{checkbox}</Checkbox>
            ))}
        </React.Fragment>
    );
}
