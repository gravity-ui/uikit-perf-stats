import {render} from '@testing-library/react';

import {AntText} from '../../src/libs/antd/Text';
import {GravityText} from '../../src/libs/gravity-ui/Text';
import {MaterialText} from '../../src/libs/mui/Text';
import {ReactSpectrumText} from '../../src/libs/react-spectrum/Text';

import {collectMetrics} from './utils/metrics';

it('Text Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntText />);

    await metrics.finish();
});

it('Text Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityText />);

    await metrics.finish();
});

it('Text MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialText />);

    await metrics.finish();
});

it('Text React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumText />);

    await metrics.finish();
});
