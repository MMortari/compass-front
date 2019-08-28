import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Questions from './pages/Questions';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Login */}
        <Route path="/login" component={Login} />

        {/* Questions */}
        <Route exact path="/" component={Questions} />
        <Route exact path="/:question" component={Questions} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
