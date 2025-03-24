import TextField from '@mui/material/TextField';
import {Profiler} from './Profiler';
import {BUTTONS_DATA} from './constants';

export function MaterialTextField() {
    return (
        <Profiler id="material-text-field">
            {BUTTONS_DATA.map((key) => (
                <TextField key={key} />
            ))}
        </Profiler>
    );
}
