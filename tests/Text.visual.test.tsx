import {test} from '@playwright/experimental-ct-react';

import {AntText} from '../src/libs/antd/Text';
import {GravityText} from '../src/libs/gravity-ui/Text';
import {MaterialText} from '../src/libs/mui/Text';
import {PrimereactText} from '../src/libs/primereact/Text';
import {ReactSpectrumText} from '../src/libs/react-spectrum/Text';

import {collectMetrics} from './utils/metrics';

test('Text Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntText />);

    await metrics.finish();
});

test('Text Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityText />);

    await metrics.finish();
});

test('Text MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialText />);

    await metrics.finish();
});

test('Text React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumText />);

    await metrics.finish();
});

test('Text PrimeReact', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<PrimereactText />);

    await metrics.finish();
});
