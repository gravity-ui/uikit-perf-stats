import * as React from 'react';

import {RadioGroup} from '@gravity-ui/uikit';

import {RADIO_GROUP_DATA} from '../constants';

export const GravityRadioGroup = () => {
    return (
        <React.Fragment>
            {RADIO_GROUP_DATA.map((label, index) => (
                <RadioGroup key={index} defaultValue="1">
                    <RadioGroup.Option key={index} value={'1'}>
                        {label}
                    </RadioGroup.Option>
                    <RadioGroup.Option key={index} value={'2'}>
                        {label}
                    </RadioGroup.Option>
                    <RadioGroup.Option key={index} value={'3'}>
                        {label}
                    </RadioGroup.Option>
                </RadioGroup>
            ))}
        </React.Fragment>
    );
};
