import * as React from 'react';

import {Button} from 'antd';

import {BUTTONS_DATA} from '../constants';

export function AntButton() {
    return (
        <React.Fragment>
            {BUTTONS_DATA.map((button) => (
                <Button key={button}>{button}</Button>
            ))}
        </React.Fragment>
    );
}
