import {render} from '@testing-library/react';

import {AntButton} from '../../src/libs/antd/Button';
import {GravityButton} from '../../src/libs/gravity-ui/Button';
import {MaterialButton} from '../../src/libs/mui/Button';
import {ReactSpectrumButton} from '../../src/libs/react-spectrum/Button';

import {collectMetrics} from './utils/metrics';

it('Button Antd', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<AntButton />);
    // await page.screenshot({path: `screenshots/antd-button-${testInfo.title}.png`});

    await metrics.finish();
});

it('Button Gravity UI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<GravityButton />);

    await metrics.finish();
});

it('Button MUI', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<MaterialButton />);

    await metrics.finish();
});

it('Button React Spectrum', async ({browser}) => {
    const metrics = await collectMetrics(browser);

    await render(<ReactSpectrumButton />);

    await metrics.finish();
});
