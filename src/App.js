import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
import Homescreen from './pages/Homescreen';
import UIComponents from './pages/UIComponents';
import PageNotFound from './components/PageNotFound';
import Dashboard from './pages/Dashboard';
import StyledCompsPage from './pages/StyledCompsPage';
import ThemeCompsPage from './pages/ThemeCompsPage';

import { AppThemeContext } from './context/AppThemeContext';

const App = () => {
    return (
        <AppThemeContext>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homescreen} />
                    <Route path="/ui" component={UIComponents} />
                    <Route path="/react-basic-app" component={App} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/styled" component={StyledCompsPage} />
                    <Route path="/theme" component={ThemeCompsPage} />
                    <Route path="/404" component={PageNotFound} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        </AppThemeContext>
    );
}

export default App;
