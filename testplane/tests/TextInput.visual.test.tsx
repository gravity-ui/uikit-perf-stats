import {render} from '@testing-library/react';

import {AntTextInput} from '../../src/libs/antd/TextInput';
import {GravityTextInput} from '../../src/libs/gravity-ui/TextInput';
import {MaterialTextInput} from '../../src/libs/mui/TextInput';
import {ReactSpectrumTextInput} from '../../src/libs/react-spectrum/TextInput';

import {collectMetrics} from './utils/metrics';

it('TextInput Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntTextInput />);

    await metrics.finish();
});

it('TextInput Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityTextInput />);

    await metrics.finish();
});

it('TextInput MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialTextInput />);

    await metrics.finish();
});

it('TextInput React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumTextInput />);

    await metrics.finish();
});
