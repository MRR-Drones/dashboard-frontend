/* eslint-disable */
import axios from 'axios';
import CustomHistory from '../custom/CustomHistory';
import TokenService from './token.service';

const instance = axios.create({
  baseURL: 'https://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = TokenService.getLocalAccessToken();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    console.log(originalConfig);

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401) {
        // Use _retry flag to avoid infinite loop
        // originalConfig._retry = true;

        if (err.response.data.Message === 'UNAUTHORIZED') {
          const rs = await instance.post('/Auth/RefreshTokens', {});
          const { jwtToken } = rs.data;
          TokenService.updateLocalAccessToken(jwtToken);
          return instance(originalConfig);
          // console.log('JWT token expired');
        } else if (err.response.data.Message === 'INVALID_RF_TOKEN') {
          // Refresh token is expired and browser automatically removed it
          CustomHistory.replace('/login');
          console.log('Refresh token expired');
          return Promise.reject(err);
        } else {
          console.log(err.response.data.Message);
          return Promise.reject(err);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
