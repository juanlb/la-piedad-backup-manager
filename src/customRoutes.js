import React from 'react';
import { Route } from 'react-router-dom';
import CognitoManager from './CognitoManager';


export default [
    <Route path="/(access_token.*)" component={CognitoManager} />,
];