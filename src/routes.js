import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Body } from './components/style.js'

import Navbar   from './components/Navbar';
import Home     from './components/Home';
import List     from './components/List';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Body>
                <Switch>
                    <Route path="/"       exact={true} component={Home} />
                    <Route path="/List"   exact={true} component={List} />
                </Switch>
            </Body>
        </BrowserRouter>
    )
}

export default Routes;
