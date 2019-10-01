import React from 'react';
import { Route as RouteRouter, Redirect } from 'react-router-dom';

export default function Route({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  let logged;

  const local = localStorage.getItem('compassUser');
  const user = JSON.parse(local);

  // console.log("User -> ", user, local);

  if(user && user.auth) {
    logged = true;
  } else {
    logged = false;
  }

  console.log("Authentication -> ", !!user)

  if(!logged && isPrivate) {
    // Será redirecionado para o login
    return <Redirect to="/login" />;
  }
  
  if(logged && !isPrivate) {
    // Será redirecionado para o main
    return <Redirect to="/" />;
  }

  return <RouteRouter {...rest} component={Component} />

}