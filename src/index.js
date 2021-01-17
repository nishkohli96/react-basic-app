import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import geti18config from './i18-next/i18config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/redux-persist';
import { AbilityContext } from 'Casl/Can';
import ability from 'Casl/Ability';

import './Assets/Styles/index.css';

const ReactApp = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AbilityContext.Provider value={ability}>
                    <I18nextProvider i18n={geti18config()}>
                        <App />
                    </I18nextProvider>
                </AbilityContext.Provider>
            </PersistGate>
        </Provider>
    );
};

ReactDOM.render(<ReactApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
