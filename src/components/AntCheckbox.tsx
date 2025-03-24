import {Checkbox} from 'antd';
import {Profiler} from './Profiler';
import {CHECKBOX_DATA} from './constants';

export function AntCheckbox() {
    return (
        <Profiler id="ant-checkbox">
            {CHECKBOX_DATA.map((key) => (
                <Checkbox key={key} />
            ))}
        </Profiler>
    );
}
