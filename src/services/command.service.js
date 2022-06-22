import axios from 'axios';

const startFlight = () => {
  axios.post(`https://localhost:7001/DroneCommand/StartMission`, {
    Id: 3,
  });
};

const stopFlight = () => {
  axios.post(`https://localhost:7001/DroneCommand/StartMission`, {
    Id: 3,
  });
};

const CommandService = {
  startFlight,
  stopFlight,
};

export default CommandService;
