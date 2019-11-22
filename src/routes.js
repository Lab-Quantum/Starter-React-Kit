import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Body } from './components/style.js'

import Navbar   from './components/Navbar';
import Home     from './components/Home';
import Route1   from './components/Route1';
import Route2   from './components/Route2';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Body>
                <Switch>
                    <Route path="/"         exact={true} component={Home} />
                    <Route path="/route1"   exact={true} component={Route1} />
                    <Route path="/route2"   exact={true} component={Route2} />
                </Switch>
            </Body>
        </BrowserRouter>
    )
}

export default Routes;
