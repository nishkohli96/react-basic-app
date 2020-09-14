import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import geti18config from './i18-next/i18config';

const ReactApp = () => {
    return (
        <React.StrictMode>
            <I18nextProvider i18n={geti18config()}>
                <App />
            </I18nextProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(<ReactApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
