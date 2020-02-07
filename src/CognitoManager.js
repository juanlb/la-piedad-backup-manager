
import React from 'react';
import { Redirect } from 'react-router';

import queryString from 'query-string';

export default () => 
{
  var hash = window.location.hash.replace('/','');
  const parsedHash = queryString.parse(hash);
  if (parsedHash.access_token === undefined) {
    console.log('No token present');
  } else {
    console.log(parsedHash.access_token);
    localStorage.setItem('token', parsedHash.access_token);
  }
  return (<Redirect to="/" />);
}