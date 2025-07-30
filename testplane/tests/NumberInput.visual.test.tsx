import {render} from '@testing-library/react';

import {AntNumberInput} from '../../src/libs/antd/NumberInput';
import {GravityNumberInput} from '../../src/libs/gravity-ui/NumberInput';
import {MuiNumberInput} from '../../src/libs/mui/NumberInput';
import {ReactSpectrumNumberInput} from '../../src/libs/react-spectrum/NumberInput';

import {collectMetrics} from './utils/metrics';

it('NumberInput Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntNumberInput />);

    await metrics.finish();
});

it('NumberInput Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityNumberInput />);

    await metrics.finish();
});

it('NumberInput MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MuiNumberInput />);

    await metrics.finish();
});

it('NumberInput React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumNumberInput />);

    await metrics.finish();
});
