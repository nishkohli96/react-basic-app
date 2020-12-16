import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import CaslEg from 'Pages/CaslEg';
import FormPage from 'Pages/FormPage';
import CalEvents from 'Pages/CalEvents';
import Dashboard from 'Pages/Dashboard';
import Homescreen from 'Pages/Homescreen';
import UIComponents from 'Pages/UIComponents';
import ReactHookForm from 'Pages/ReactHookForm';
import PeopleProfile from 'Pages/PeopleProfile';
import ThemeCompsPage from 'Pages/ThemeCompsPage';
import StyledCompsPage from 'Pages/StyledCompsPage';

import Carousel from '@Misc/Carousel';
import PageNotFound from '@Misc/PageNotFound';
import NestedRoutes from '@Misc/NestedRoutes';
import ReduxCounter from '@LibUtilize/ReduxCounter';
import { AppThemeContext } from 'Context/AppThemeContext';

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
                    <Route path="/nested" component={NestedRoutes} />
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
