import {test} from '@playwright/experimental-ct-react';

import {AntCheckbox} from '../src/libs/antd/Checkbox';
import {GravityCheckbox} from '../src/libs/gravity-ui/Checkbox';
import {MaterialCheckbox} from '../src/libs/mui/Checkbox';
import {ReactSpectrumCheckbox} from '../src/libs/react-spectrum/Checkbox';

import {collectMetrics} from './utils/metrics';

test('Checkbox Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntCheckbox />);

    await metrics.finish();
});

test('Checkbox Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityCheckbox />);

    await metrics.finish();
});

test('Checkbox MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialCheckbox />);

    await metrics.finish();
});

test('Checkbox React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumCheckbox />);

    await metrics.finish();
});
