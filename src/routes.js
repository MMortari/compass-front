import React from 'react';
import { 
  BrowserRouter, 
  Switch, 
  // Route 
} from 'react-router-dom';

// Components
import Header from './components/Header/index';
import Route from './components/Route';
// Pages
import Principal from './pages/Principal';
import Login from './pages/Login';
import Questions from './pages/Questions';
import Profile from './pages/Profile';
import Thank from './pages/Thank';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Login */}
        <Route path="/login" component={Login} />


        <Route path="/" isPrivate>
          <Header />
          {/* Principal */}
          <Route exact path="/" component={Principal} isPrivate />

          {/* Questions */}
          <Route exact path="/questions" component={Questions} isPrivate />
          <Route exact path="/questions/:question" component={Questions} isPrivate />

          {/* Profile */}
          <Route exact path="/profile" component={Profile} isPrivate />

          {/* Thank */}
          <Route exact path="/thank" component={Thank} isPrivate />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
