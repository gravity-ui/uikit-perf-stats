import * as React from 'react';

import {Typography} from 'antd';

import {LINKS_DATA} from '../constants';

export function AntLink() {
    return (
        <React.Fragment>
            {LINKS_DATA.map((link) => (
                <Typography.Link key={link} href="#">
                    {link}
                </Typography.Link>
            ))}
        </React.Fragment>
    );
}
