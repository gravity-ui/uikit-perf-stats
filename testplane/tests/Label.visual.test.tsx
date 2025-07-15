import {render} from '@testing-library/react';

import {AntLabel} from '../../src/libs/antd/Label';
import {GravityLabel} from '../../src/libs/gravity-ui/Label';
import {MaterialLabel} from '../../src/libs/mui/Label';
import {ReactSpectrumLabel} from '../../src/libs/react-spectrum/Label';

import {collectMetrics} from './utils/metrics';

it('Label Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntLabel />);

    await metrics.finish();
});

it('Label Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityLabel />);

    await metrics.finish();
});

it('Label MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialLabel />);

    await metrics.finish();
});

it('Label React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumLabel />);

    await metrics.finish();
});
