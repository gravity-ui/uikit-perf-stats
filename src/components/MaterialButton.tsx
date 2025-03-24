import Button from '@mui/material/Button';
import {Profiler} from './Profiler';
import {BUTTONS_DATA} from './constants';

export function MaterialButton() {
    return (
        <Profiler id="material-button">
            {BUTTONS_DATA.map((button) => (
                <Button key={button}>{button}</Button>
            ))}
        </Profiler>
    );
}
