import {render} from '@testing-library/react';

import {AntSwitch} from '../../src/libs/antd/Switch';
import {GravitySwitch} from '../../src/libs/gravity-ui/Switch';
import {MaterialSwitch} from '../../src/libs/mui/Switch';
import {ReactSpectrumSwitch} from '../../src/libs/react-spectrum/Switch';

import {collectMetrics} from './utils/metrics';

it('Switch Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntSwitch />);

    await metrics.finish();
});

it('Switch Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravitySwitch />);

    await metrics.finish();
});

it('Switch MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialSwitch />);

    await metrics.finish();
});

it('Switch React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumSwitch />);

    await metrics.finish();
});
