import {render} from '@testing-library/react';

import {AntLink} from '../../src/libs/antd/Link';
import {GravityLink} from '../../src/libs/gravity-ui/Link';
import {MaterialLink} from '../../src/libs/mui/Link';
import {ReactSpectrumLink} from '../../src/libs/react-spectrum/Link';

import {collectMetrics} from './utils/metrics';

it('Link Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntLink />);

    await metrics.finish();
});

it('Link Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityLink />);

    await metrics.finish();
});

it('Link MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialLink />);

    await metrics.finish();
});

it('Link React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumLink />);

    await metrics.finish();
});
