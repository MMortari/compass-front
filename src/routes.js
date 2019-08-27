import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:question" component={Main} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
