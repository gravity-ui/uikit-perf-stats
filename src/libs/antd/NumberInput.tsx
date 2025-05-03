import * as React from 'react';

import {InputNumber} from 'antd';

import {NUMBER_INPUT_DATA} from '../constants';

export function AntNumberInput() {
    return (
        <React.Fragment>
            {NUMBER_INPUT_DATA.map((numberInput) => (
                <InputNumber key={numberInput} />
            ))}
        </React.Fragment>
    );
}
