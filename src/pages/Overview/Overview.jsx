import React from 'react';
import '../shared.scss';
import './Overview.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Map from '../../components/Map/Map';
import DroneService from '../../services/drone.service';
import { toast } from 'react-toastify';

export default function Home() {
  const getAllDrones = () => {
    DroneService.getDronesByUserId()
      .then((response) => console.log(response))
      .catch((err) => {
        toast.error(err.Message);
      });
  };

  return (
    <PageWrapper fullscreen>
      <Map />
      <button onClick={getAllDrones}>Get All Drones</button>
    </PageWrapper>
  );
}
