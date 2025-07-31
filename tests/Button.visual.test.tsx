import {test} from '@playwright/experimental-ct-react';

import {AntButton} from '../src/libs/antd/Button';
import {GravityButton} from '../src/libs/gravity-ui/Button';
import {MaterialButton} from '../src/libs/mui/Button';
import {PrimereactButton} from '../src/libs/primereact/Button';
import {ReactSpectrumButton} from '../src/libs/react-spectrum/Button';

import {collectMetrics} from './utils/metrics';

test('Button Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntButton />);
    // await page.screenshot({path: `screenshots/antd-button-${testInfo.title}.png`});

    await metrics.finish();
});

test('Button Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityButton />);

    await metrics.finish();
});

test('Button MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialButton />);

    await metrics.finish();
});

test('Button React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumButton />);

    await metrics.finish();
});

test('Button PrimeReact', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<PrimereactButton />);

    await metrics.finish();
});
