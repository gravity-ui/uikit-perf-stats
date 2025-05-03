import * as React from 'react';

import {Typography} from 'antd';

import {TEXT_DATA} from '../constants';

const {Text} = Typography;

export function AntText() {
    return (
        <React.Fragment>
            {TEXT_DATA.map((text) => (
                <Text key={text}>{text}</Text>
            ))}
        </React.Fragment>
    );
}
