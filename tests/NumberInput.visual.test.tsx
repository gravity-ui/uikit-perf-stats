import {test} from '@playwright/experimental-ct-react';

import {AntNumberInput} from '../src/libs/antd/NumberInput';
import {GravityNumberInput} from '../src/libs/gravity-ui/NumberInput';
import {MuiNumberInput} from '../src/libs/mui/NumberInput';
import {ReactSpectrumNumberInput} from '../src/libs/react-spectrum/NumberInput';

import {collectMetrics} from './utils/metrics';

test('NumberInput Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntNumberInput />);

    await metrics.finish();
});

test('NumberInput Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityNumberInput />);

    await metrics.finish();
});

test('NumberInput MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MuiNumberInput />);

    await metrics.finish();
});

test('NumberInput React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumNumberInput />);

    await metrics.finish();
});
