import axios from 'axios';
import { BASE_API_URL } from '../config/apis';
import { regenerateAccessTokenApi } from 'apis/token';

export const getClient = (multipart?: boolean) => {
  const instance = axios.create({
    headers: {
      'Content-Type': `${multipart ? 'multipart/form-data' : 'application/json'}`,
    },
    baseURL: BASE_API_URL,
    timeout: 60000,
  });

  instance.interceptors.request.use(
    async function (config: any) {
      // config.headers!.Authorization = `Bearer ${cookies[COOKIEaS.JWT]}`
      if (localStorage.getItem('token')) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        config.headers!.authorization = `Bearer ${localStorage.getItem('token')}`;
      }
      return { ...config };
    },
    async function (error: any) {
      // Do something with request error
      return await Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function (response: any) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error: any) {
      if (error.response.status !== 401) return await Promise.reject(error);
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const result = await regenerateAccessTokenApi({
        refreshToken: localStorage.getItem('refresh-token'),
      });

      if (!result.success) {
        localStorage.clear();
        window.location.href = '/login';
      } else {
        localStorage.setItem('token', result.data.accessToken);
      }

      return await Promise.reject(error);
    },
  );

  return instance;
};
