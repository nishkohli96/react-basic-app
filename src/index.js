import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import UIComponents from './pages/UIComponents';
import PageNotFound from './components/PageNotFound';
import Dashboard from './pages/Dashboard';

const routing = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/ui" component={UIComponents} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
