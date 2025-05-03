import {Link, Provider, defaultTheme} from '@adobe/react-spectrum';

import {LINKS_DATA} from '../constants';

export function ReactSpectrumLink() {
    return (
        <Provider theme={defaultTheme}>
            {LINKS_DATA.map((link) => (
                <Link key={link} href="#">
                    {link}
                </Link>
            ))}
        </Provider>
    );
}
