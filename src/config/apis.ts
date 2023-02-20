/** BASE API URL */
// export const BASE_API_URL = 'https://app-backend-production-e10f.up.railway.app/api';
export const BASE_API_URL = 'http://localhost:8000/api';
export const AUTH_URL = '/auth';
export const USER_URL = '/users';
export const TOKEN_URL = '/token';
export const AUTH_ENDPOINT = BASE_API_URL + AUTH_URL;
export const USER_ENDPOINT = BASE_API_URL + USER_URL;
export const TOKEN_ENDPOINT = BASE_API_URL + TOKEN_URL;

/** API ENDPOINTS */
export const API_ENDPOINTS = {
  /** AUTH ENDPOINTS */
  REGISTER: AUTH_ENDPOINT + '/register',
  LOGIN: AUTH_ENDPOINT + '/login',

  /** USER ENDPOOINTS */
  CURRENT: USER_ENDPOINT + '/current',

  /** REGENERATE ACCESS-TOKEN */
  ACCESS_TOKEN: TOKEN_ENDPOINT + '/access-token',
};
