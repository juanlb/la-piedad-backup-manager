// in src/App.js
import React from 'react';
// import { fetchUtils, Admin, Resource, ListGuesser, ShowGuesser } from 'react-admin';
import { fetchUtils, Admin, Resource } from 'react-admin';
import { BackupList, BackupShow } from './backups';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import customRoutes from './customRoutes';
import NullLoginPage from './NullLoginPage';



const API_URL = process.env.REACT_APP_API_URL

const httpClient = (url, options = {}) => {
  options.user = {
    authenticated: true,
    token: localStorage.getItem('token')
  };
  return fetchUtils.fetchJson(url, options);
};


const dataProvider = jsonServerProvider(API_URL, httpClient);
const App = () => (
  <Admin loginPage={NullLoginPage} customRoutes={customRoutes} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="backups" list={BackupList} show={BackupShow} />
  </Admin>
);
export default App;
