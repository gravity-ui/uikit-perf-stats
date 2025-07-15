import {render} from '@testing-library/react';

import {AntAvatar} from '../../src/libs/antd/Avatar';
import {GravityAvatar} from '../../src/libs/gravity-ui/Avatar';
import {MaterialAvatar} from '../../src/libs/mui/Avatar';
import {ReactSpectrumAvatar} from '../../src/libs/react-spectrum/Avatar';

import {collectMetrics} from './utils/metrics';

it('Avatar Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntAvatar />);

    await metrics.finish();
});

it('Avatar Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityAvatar />);

    await metrics.finish();
});

it('Avatar MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialAvatar />);

    await metrics.finish();
});

it('Avatar React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumAvatar />);

    await metrics.finish();
});
