
import React from 'react';
import { Redirect } from 'react-router';
import JwtManager from './JwtManager'

export default () => {
  const id_token = JwtManager.id_token();
  if (id_token) {
    localStorage.setItem('token', id_token);

    const role = JwtManager.role();
    if (role) {
      localStorage.setItem('permissions', role);
    }
  } else {
    console.log('No id_token present');
  }

  return (<Redirect to="/" />);
}