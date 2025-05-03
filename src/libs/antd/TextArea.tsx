import * as React from 'react';

import {Input} from 'antd';

import {TEXTAREA_DATA} from '../constants';

const {TextArea} = Input;

export function AntTextArea() {
    return (
        <React.Fragment>
            {TEXTAREA_DATA.map((textarea) => (
                <TextArea key={textarea} />
            ))}
        </React.Fragment>
    );
}
