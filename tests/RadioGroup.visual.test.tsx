import {test} from '@playwright/experimental-ct-react';

import {AntRadioGroup} from '../src/libs/antd/RadioGroup';
import {GravityRadioGroup} from '../src/libs/gravity-ui/RadioGroup';
import {MaterialRadioGroup} from '../src/libs/mui/RadioGroup';
import {PrimereactRadioGroup} from '../src/libs/primereact/RadioGroup';
import {ReactSpectrumRadioGroup} from '../src/libs/react-spectrum/RadioGroup';

import {collectMetrics} from './utils/metrics';

test('RadioGroup Antd', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<AntRadioGroup />);

    await metrics.finish();
});

test('RadioGroup Gravity UI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<GravityRadioGroup />);

    await metrics.finish();
});

test('RadioGroup MUI', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<MaterialRadioGroup />);

    await metrics.finish();
});

test('RadioGroup React Spectrum', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<ReactSpectrumRadioGroup />);

    await metrics.finish();
});

test('RadioGroup PrimeReact', async ({mount, page}, testInfo) => {
    const metrics = await collectMetrics(page, testInfo);

    await mount(<PrimereactRadioGroup />);

    await metrics.finish();
});
