const COG_DOMAIN    = process.env.REACT_APP_COGNITO_CLIENT_DOMAIN 
const COG_REGION    = process.env.REACT_APP_COGNITO_REGION 
const COG_CLIENT_ID = process.env.REACT_APP_COGNITO_CLIENT_ID
const COG_CALLBACK  = process.env.REACT_APP_COGNITO_CALLBACK

const login_url = `https://${COG_DOMAIN}.auth.${COG_REGION}.amazoncognito.com/login?response_type=token&client_id=${COG_CLIENT_ID}&redirect_uri=${COG_CALLBACK}`

export default {
  login: params => Promise.resolve(),
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkAuth: () => localStorage.getItem('token')
    ? Promise.resolve()
    : Promise.reject(
      window.location.href = login_url
    ),
  checkError: error => {
    const status = error.status;
    if (status === 401 || status === 403) {
        localStorage.removeItem('token');
        return Promise.reject();
    }
    return Promise.resolve();
},
  getPermissions: params => Promise.resolve(),
};