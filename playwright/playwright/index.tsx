import * as React from 'react';

import {beforeMount} from '@playwright/experimental-ct-react/hooks';

beforeMount(async ({App}) => {
    return (
        <div id="root">
            <App />
        </div>
    );
});
