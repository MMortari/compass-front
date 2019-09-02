import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header/index';
// Pages
import Login from './pages/Login';
import Questions from './pages/Questions';
import Profile from './pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Login */}
        <Route path="/login" component={Login} />


        <Route path="/">
          <Header />

          {/* Questions */}
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/questions/:question" component={Questions} />

          {/* Profile */}
          <Route exact path="/profile" component={Profile} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
