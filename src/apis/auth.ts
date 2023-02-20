// import client
import { getClient } from '../utils/axios';

import { API_ENDPOINTS } from 'config/apis';

const instance = getClient();

export const loginApi = async (data: any) => {
  try {
    const res = await instance.post(API_ENDPOINTS.LOGIN, data);

    return {
      success: true,
      data: res.data,
    };
  } catch (err: any) {
    return { success: false, data: err.response.data };
  }
};

export const getCurrentUserApi = async () => {
  try {
    const res = await instance.get(API_ENDPOINTS.CURRENT);

    return {
      success: true,
      data: res.data,
    };
  } catch (err: any) {
    return { success: false, data: err.response.data };
  }
};
