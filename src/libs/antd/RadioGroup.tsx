import * as React from 'react';

import {Radio} from 'antd';

import {RADIO_GROUP_DATA} from '../constants';

export const AntRadioGroup = () => {
    return (
        <React.Fragment>
            {RADIO_GROUP_DATA.map((label, index) => (
                <Radio.Group key={index} value={1}>
                    <Radio value={1}>{label}</Radio>
                    <Radio value={2}>{label}</Radio>
                    <Radio value={3}>{label}</Radio>
                </Radio.Group>
            ))}
        </React.Fragment>
    );
};
