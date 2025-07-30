import {render} from '@testing-library/react';

import {AntTextArea} from '../../src/libs/antd/TextArea';
import {GravityTextArea} from '../../src/libs/gravity-ui/TextArea';
import {MaterialTextArea} from '../../src/libs/mui/TextArea';
import {ReactSpectrumTextArea} from '../../src/libs/react-spectrum/TextArea';

import {collectMetrics} from './utils/metrics';

it('TextArea Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntTextArea />);

    await metrics.finish();
});

it('TextArea Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityTextArea />);

    await metrics.finish();
});

it('TextArea MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialTextArea />);

    await metrics.finish();
});

it('TextArea React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumTextArea />);

    await metrics.finish();
});
