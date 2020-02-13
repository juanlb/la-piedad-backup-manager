import React from 'react';
import { Route } from 'react-router-dom';
import CognitoCallback from './CognitoCallback';


export default [
    <Route path="/(id_token.*)" component={CognitoCallback} />,
];