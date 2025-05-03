import {test} from '@playwright/experimental-ct-react';

import {AntLabel} from '../src/libs/antd/Label';
import {GravityLabel} from '../src/libs/gravity-ui/Label';
import {MaterialLabel} from '../src/libs/mui/Label';
import {ReactSpectrumLabel} from '../src/libs/react-spectrum/Label';

import {collectMetrics} from './utils/metrics';

test('Label Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntLabel />);

    await metrics.finish();
});

test('Label Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityLabel />);

    await metrics.finish();
});

test('Label MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialLabel />);

    await metrics.finish();
});

test('Label React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumLabel />);

    await metrics.finish();
});
