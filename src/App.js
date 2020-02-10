// in src/App.js
import React from 'react';
// import { Admin, Resource, ListGuesser, ShowGuesser } from 'react-admin';
import { fetchUtils, Admin, Resource} from 'react-admin';
import { BackupList, BackupShow } from './backups';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import customRoutes from './customRoutes';

const API_URL = process.env.REACT_APP_API_URL


const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(API_URL, httpClient);
// const dataProvider = jsonServerProvider('http://192.168.0.185:3001');
// const dataProvider = jsonServerProvider('https://58bnpw06gh.execute-api.us-east-1.amazonaws.com/Prod');
const App = () => (
  <Admin  customRoutes={customRoutes} dataProvider={dataProvider} authProvider={authProvider}>

    <Resource name="backups" list={BackupList} show={BackupShow}/>
  </Admin>
);
export default App;
