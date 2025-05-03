import * as React from 'react';

import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';

import {RADIO_GROUP_DATA} from '../constants';

export const MaterialRadioGroup = () => {
    return (
        <React.Fragment>
            {RADIO_GROUP_DATA.map((label, index) => (
                <FormControl key={index}>
                    <FormLabel id="mui-radio-group">Label</FormLabel>
                    <RadioGroup
                        aria-labelledby="mui-radio-group"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1" control={<Radio />} label={label} />
                        <FormControlLabel value="2" control={<Radio />} label={label} />
                        <FormControlLabel value="3" control={<Radio />} label={label} />
                    </RadioGroup>
                </FormControl>
            ))}
        </React.Fragment>
    );
};
