import JwtManager from './JwtManager'


const COG_DOMAIN = process.env.REACT_APP_COGNITO_CLIENT_DOMAIN
const COG_REGION = process.env.REACT_APP_COGNITO_REGION
const COG_CLIENT_ID = process.env.REACT_APP_COGNITO_CLIENT_ID
const COG_CALLBACK = process.env.REACT_APP_COGNITO_CALLBACK

const login_url = `https://${COG_DOMAIN}.auth.${COG_REGION}.amazoncognito.com/login?response_type=token&client_id=${COG_CLIENT_ID}&redirect_uri=${COG_CALLBACK}`

export default {
  login: params => Promise.resolve(),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    return Promise.resolve();
  },
  checkAuth: () => {
    // Esto es un hack, porque al usar Permissions, intenta validar si hay token antes de guardarlo
    return (localStorage.getItem('token') || JwtManager.id_token())
      ? Promise.resolve()
      : Promise.reject(
        window.location.href = login_url
      )
  },
  checkError: error => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('permissions');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => {
    const role = (localStorage.getItem('permissions') || JwtManager.role())
    return (role)
    ? Promise.resolve(role)
    : Promise.reject()
  }
};