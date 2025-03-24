import {Input} from 'antd';
import {Profiler} from './Profiler';
import {BUTTONS_DATA} from './constants';

export function AntTextField() {
    return (
        <Profiler id="ant-text-field">
            {BUTTONS_DATA.map((key) => (
                <Input key={key} />
            ))}
        </Profiler>
    );
}
