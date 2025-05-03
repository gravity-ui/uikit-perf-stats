import * as React from 'react';

import {Radio, RadioGroup} from '@adobe/react-spectrum';

import {RADIO_GROUP_DATA} from '../constants';

export const ReactSpectrumRadioGroup = () => {
    return (
        <React.Fragment>
            {RADIO_GROUP_DATA.map((label, index) => (
                <RadioGroup key={index} defaultValue="1">
                    <Radio key={index} value={'1'}>
                        {label}
                    </Radio>
                    <Radio key={index} value={'2'}>
                        {label}
                    </Radio>
                    <Radio key={index} value={'3'}>
                        {label}
                    </Radio>
                </RadioGroup>
            ))}
        </React.Fragment>
    );
};
