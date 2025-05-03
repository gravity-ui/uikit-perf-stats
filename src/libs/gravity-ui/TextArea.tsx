import {TextArea, ThemeProvider} from '@gravity-ui/uikit';

import {TEXTAREA_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravityTextArea() {
    return (
        <ThemeProvider theme="light">
            {TEXTAREA_DATA.map((textarea) => (
                <TextArea key={textarea} />
            ))}
        </ThemeProvider>
    );
}
