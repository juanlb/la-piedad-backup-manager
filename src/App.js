// in src/App.js
import React from 'react';
// import { Admin, Resource, ListGuesser, ShowGuesser } from 'react-admin';
import { Admin, Resource} from 'react-admin';
import { BackupList, BackupShow } from './backups';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import customRoutes from './customRoutes';



const dataProvider = jsonServerProvider('http://192.168.0.185:3001');
// const dataProvider = jsonServerProvider('https://58bnpw06gh.execute-api.us-east-1.amazonaws.com/Prod');
const App = () => (
  <Admin  customRoutes={customRoutes} dataProvider={dataProvider} authProvider={authProvider}>

    <Resource name="backups" list={BackupList} show={BackupShow}/>
  </Admin>
);
export default App;