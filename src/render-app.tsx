import React from 'react';
import ReactDOM from 'react-dom/client';

export function renderApp(props: {content: React.ReactNode}) {
    const rootNode = document.getElementById('root');

    if (!rootNode) {
        throw new Error('root node not found');
    }

    const root = ReactDOM.createRoot(rootNode);

    root.render(<React.StrictMode>{props.content}</React.StrictMode>);
}
