import {test} from '@playwright/experimental-ct-react';

import {AntTextArea} from '../src/libs/antd/TextArea';
import {GravityTextArea} from '../src/libs/gravity-ui/TextArea';
import {MaterialTextArea} from '../src/libs/mui/TextArea';
import {ReactSpectrumTextArea} from '../src/libs/react-spectrum/TextArea';

import {collectMetrics} from './utils/metrics';

test('TextArea Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntTextArea />);

    await metrics.finish();
});

test('TextArea Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityTextArea />);

    await metrics.finish();
});

test('TextArea MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialTextArea />);

    await metrics.finish();
});

test('TextArea React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumTextArea />);

    await metrics.finish();
});
