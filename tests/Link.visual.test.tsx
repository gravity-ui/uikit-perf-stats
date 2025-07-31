import {test} from '@playwright/experimental-ct-react';

import {AntLink} from '../src/libs/antd/Link';
import {GravityLink} from '../src/libs/gravity-ui/Link';
import {MaterialLink} from '../src/libs/mui/Link';
import {PrimereactLink} from '../src/libs/primereact/Link';
import {ReactSpectrumLink} from '../src/libs/react-spectrum/Link';

import {collectMetrics} from './utils/metrics';

test('Link Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntLink />);

    await metrics.finish();
});

test('Link Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityLink />);

    await metrics.finish();
});

test('Link MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialLink />);

    await metrics.finish();
});

test('Link React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumLink />);

    await metrics.finish();
});

test('Link PrimeReact', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<PrimereactLink />);

    await metrics.finish();
});
