import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import CaslEg from './pages/CaslEg';
import FormPage from './pages/FormPage';
import CalEvents from './pages/CalEvents';
import Dashboard from './pages/Dashboard';
import Homescreen from './pages/Homescreen';
import UIComponents from './pages/UIComponents';
import ReactHookForm from './pages/ReactHookForm';
import PeopleProfile from './pages/PeopleProfile';
import ThemeCompsPage from './pages/ThemeCompsPage';
import StyledCompsPage from './pages/StyledCompsPage';

import Carousel from './components/misc/Carousel';
import PageNotFound from './components/misc/PageNotFound';
import ReduxCounter from './components/lib-utilize/ReduxCounter';
import { AppThemeContext } from './context/AppThemeContext';
import './App.css';

const App = () => {
    return (
        <AppThemeContext>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homescreen} />
                    <Route path="/calendar" component={CalEvents} />
                    <Route path="/carousel" component={Carousel} />
                    <Route path="/casl" component={CaslEg} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/form" component={FormPage} />
                    <Route path="/people" component={PeopleProfile} />
                    <Route path="/redux" component={ReduxCounter} />
                    <Route path="/rhform" component={ReactHookForm} />
                    <Route path="/styled" component={StyledCompsPage} />
                    <Route path="/theme" component={ThemeCompsPage} />
                    <Route path="/ui" component={UIComponents} />
                    <Route path="/404" component={PageNotFound} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        </AppThemeContext>
    );
};

export default App;
