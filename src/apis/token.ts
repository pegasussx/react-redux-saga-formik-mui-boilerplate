// import client
import axios from 'axios';

import { API_ENDPOINTS } from 'config/apis';

export const regenerateAccessTokenApi = async (data: any) => {
  try {
    const res = await axios.post(API_ENDPOINTS.ACCESS_TOKEN, data);

    return {
      success: true,
      data: res.data,
    };
  } catch (err: any) {
    return { success: false, data: err.response.data };
  }
};
