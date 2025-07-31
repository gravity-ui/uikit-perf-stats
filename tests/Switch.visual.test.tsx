import {test} from '@playwright/experimental-ct-react';

import {AntSwitch} from '../src/libs/antd/Switch';
import {GravitySwitch} from '../src/libs/gravity-ui/Switch';
import {MaterialSwitch} from '../src/libs/mui/Switch';
import {PrimereactSwitch} from '../src/libs/primereact/Switch';
import {ReactSpectrumSwitch} from '../src/libs/react-spectrum/Switch';

import {collectMetrics} from './utils/metrics';

test('Switch Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntSwitch />);

    await metrics.finish();
});

test('Switch Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravitySwitch />);

    await metrics.finish();
});

test('Switch MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialSwitch />);

    await metrics.finish();
});

test('Switch React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumSwitch />);

    await metrics.finish();
});

test('Switch PrimeReact', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<PrimereactSwitch />);

    await metrics.finish();
});
