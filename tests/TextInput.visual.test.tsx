import {test} from '@playwright/experimental-ct-react';

import {AntTextInput} from '../src/libs/antd/TextInput';
import {GravityTextInput} from '../src/libs/gravity-ui/TextInput';
import {MaterialTextInput} from '../src/libs/mui/TextInput';
import {ReactSpectrumTextInput} from '../src/libs/react-spectrum/TextInput';

import {collectMetrics} from './utils/metrics';

test('TextInput Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntTextInput />);

    await metrics.finish();
});

test('TextInput Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityTextInput />);

    await metrics.finish();
});

test('TextInput MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialTextInput />);

    await metrics.finish();
});

test('TextInput React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumTextInput />);

    await metrics.finish();
});
