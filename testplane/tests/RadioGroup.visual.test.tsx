import {render} from '@testing-library/react';

import {AntRadioGroup} from '../../src/libs/antd/RadioGroup';
import {GravityRadioGroup} from '../../src/libs/gravity-ui/RadioGroup';
import {MaterialRadioGroup} from '../../src/libs/mui/RadioGroup';
import {ReactSpectrumRadioGroup} from '../../src/libs/react-spectrum/RadioGroup';

import {collectMetrics} from './utils/metrics';

it('RadioGroup Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntRadioGroup />);

    await metrics.finish();
});

it('RadioGroup Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityRadioGroup />);

    await metrics.finish();
});

it('RadioGroup MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialRadioGroup />);

    await metrics.finish();
});

it('RadioGroup React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumRadioGroup />);

    await metrics.finish();
});
