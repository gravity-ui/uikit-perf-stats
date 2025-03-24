import {Button, Provider, defaultTheme} from '@adobe/react-spectrum';
import {Profiler} from './Profiler';
import {BUTTONS_DATA} from './constants';

export function ReactSpectrumButton() {
    return (
        <Profiler id="react-spectrum-button">
            <Provider theme={defaultTheme}>
                {BUTTONS_DATA.map((button) => (
                    <Button key={button} variant="primary">
                        {button}
                    </Button>
                ))}
            </Provider>
        </Profiler>
    );
}
