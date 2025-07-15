import {render} from '@testing-library/react';

import {AntCheckbox} from '../../src/libs/antd/Checkbox';
import {GravityCheckbox} from '../../src/libs/gravity-ui/Checkbox';
import {MaterialCheckbox} from '../../src/libs/mui/Checkbox';
import {ReactSpectrumCheckbox} from '../../src/libs/react-spectrum/Checkbox';

import {collectMetrics} from './utils/metrics';

it('Checkbox Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntCheckbox />);

    await metrics.finish();
});

it('Checkbox Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityCheckbox />);

    await metrics.finish();
});

it('Checkbox MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialCheckbox />);

    await metrics.finish();
});

it('Checkbox React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumCheckbox />);

    await metrics.finish();
});
