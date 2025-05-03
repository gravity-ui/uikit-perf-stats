import * as React from 'react';

import Link from '@mui/material/Link';

import {LINKS_DATA} from '../constants';

export function MaterialLink() {
    return (
        <React.Fragment>
            {LINKS_DATA.map((link) => (
                <Link key={link} href="#">
                    {link}
                </Link>
            ))}
        </React.Fragment>
    );
}
