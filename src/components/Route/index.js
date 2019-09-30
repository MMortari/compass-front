import React from 'react';
import { Route as ReactRouter, Redirect } from 'react-router-dom';

export default function Route({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = true;

  if(!signed && isPrivate) {
    return <Redirect to="/login" />
  } 
  
  if(signed && !isPrivate) {
    return <Redirect to="/" />
  } 

  return (
    <ReactRouter {...rest} component={Component} />
  )
}