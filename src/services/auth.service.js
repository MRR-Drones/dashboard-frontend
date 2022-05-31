import { toast } from 'react-toastify';
import api from './api';
import TokenService from './token.service';

const login = (username, password) => {
  return api
    .post('/Auth/Login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data) {
        TokenService.setUser(response.data);
      }

      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

const AuthService = {
  login,
};

export default AuthService;
