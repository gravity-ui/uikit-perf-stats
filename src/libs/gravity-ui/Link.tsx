import {Link, ThemeProvider} from '@gravity-ui/uikit';

import {LINKS_DATA} from '../constants';

import '@gravity-ui/uikit/styles/styles.css';

export function GravityLink() {
    return (
        <ThemeProvider theme="light">
            {LINKS_DATA.map((link) => (
                <Link key={link} href="#">
                    {link}
                </Link>
            ))}
        </ThemeProvider>
    );
}
