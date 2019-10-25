import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './Home/Home';
import AucklandPage from './Auckland/Auckland';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auckland" exact={true} component={AucklandPage} />
                <Route path="/" exact={true} component={HomePage} />
                <Redirect path="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
