import * as React from 'react';

import {Button} from 'primereact/button';

import {LINKS_DATA} from '../constants';

export function PrimereactLink() {
    return (
        <React.Fragment>
            {LINKS_DATA.map((link) => (
                <Button key={link} label={link} link onClick={() => window.open('#', '_blank')} />
            ))}
        </React.Fragment>
    );
}
