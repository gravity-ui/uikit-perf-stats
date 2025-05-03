import * as React from 'react';

import {Input} from 'antd';

import {TEXT_INPUT_DATA} from '../constants';

export function AntTextInput() {
    return (
        <React.Fragment>
            {TEXT_INPUT_DATA.map((input) => (
                <Input key={input} />
            ))}
        </React.Fragment>
    );
}
