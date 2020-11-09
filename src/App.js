import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import CaslEg from './pages/CaslEg';
import FormPage from './pages/FormPage';
import Dashboard from './pages/Dashboard';
import Homescreen from './pages/Homescreen';
import UIComponents from './pages/UIComponents';
import ReactHookForm from './pages/ReactHookForm';
import PeopleProfile from './pages/PeopleProfile';
import ThemeCompsPage from './pages/ThemeCompsPage';
import StyledCompsPage from './pages/StyledCompsPage';

import PageNotFound from './components/PageNotFound';
import ReduxCounter from './components/ReduxCounter';
import { AppThemeContext } from './context/AppThemeContext';
import './App.css';

const App = () => {
    return (
        <AppThemeContext>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homescreen} />
                    <Route path="/ui" component={UIComponents} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/form" component={FormPage} />
                    <Route path="/casl" component={CaslEg} />
                    <Route path="/rhform" component={ReactHookForm} />
                    <Route path="/styled" component={StyledCompsPage} />
                    <Route path="/theme" component={ThemeCompsPage} />
                    <Route path="/redux" component={ReduxCounter} />
                    <Route path="/people" component={PeopleProfile} />
                    <Route path="/404" component={PageNotFound} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        </AppThemeContext>
    );
};

export default App;
