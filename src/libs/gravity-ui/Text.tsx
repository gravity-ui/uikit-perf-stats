import {Text, ThemeProvider} from '@gravity-ui/uikit';

import {TEXT_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravityText() {
    return (
        <ThemeProvider theme="light">
            {TEXT_DATA.map((text) => (
                <Text key={text}>{text}</Text>
            ))}
        </ThemeProvider>
    );
}
