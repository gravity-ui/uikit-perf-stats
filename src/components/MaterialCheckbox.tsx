import Checkbox from '@mui/material/Checkbox';
import {Profiler} from './Profiler';
import {CHECKBOX_DATA} from './constants';

export function MaterialCheckbox() {
    return (
        <Profiler id="material-checkbox">
            {CHECKBOX_DATA.map((key) => (
                <Checkbox key={key} />
            ))}
        </Profiler>
    );
}
