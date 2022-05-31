import React from 'react';
import '../shared.scss';
import './Overview.scss';

import { toast } from 'react-toastify';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Map from '../../components/Map/Map';
import DroneService from '../../services/drone.service';
import MapOverlay from './MapOverlay/MapOverlay';

export default function Home() {
  const getAllDrones = () => {
    DroneService.getDronesByUserId()
      .then(() => {})
      .catch((err) => {
        toast.error(err.Message);
      });
  };

  return (
    <PageWrapper fullscreen>
      <Map />
      {/* <button onClick={getAllDrones} type="button">
        Get All Drones
      </button> */}
      <MapOverlay />
    </PageWrapper>
  );
}
