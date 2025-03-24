import {Button} from 'antd';
import {Profiler} from './Profiler';
import {BUTTONS_DATA} from './constants';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function AntButton() {
    return (
        <Profiler id="ant-button">
            {BUTTONS_DATA.map((button) => (
                <Button key={button}>{button}</Button>
            ))}
        </Profiler>
    );
}
