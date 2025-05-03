import {test} from '@playwright/experimental-ct-react';

import {AntAvatar} from '../src/libs/antd/Avatar';
import {GravityAvatar} from '../src/libs/gravity-ui/Avatar';
import {MaterialAvatar} from '../src/libs/mui/Avatar';
import {ReactSpectrumAvatar} from '../src/libs/react-spectrum/Avatar';

import {collectMetrics} from './utils/metrics';

test('Avatar Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntAvatar />);

    await metrics.finish();
});

test('Avatar Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityAvatar />);

    await metrics.finish();
});

test('Avatar MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialAvatar />);

    await metrics.finish();
});

test('Avatar React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumAvatar />);

    await metrics.finish();
});
