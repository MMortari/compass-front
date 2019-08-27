import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Login */}
        <Route path="/login" component={Login} />

        {/* Questions */}
        <Route exact path="/" component={Main} />
        <Route exact path="/:question" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
