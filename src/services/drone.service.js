/* eslint-disable */
import api from './api';

const getDronesByUserId = () => {
  return api
    .get('/Users/2/Drones')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.response.data);
      return Promise.reject(err.response.data);
    });
};

const DroneService = {
  getDronesByUserId,
};

export default DroneService;
