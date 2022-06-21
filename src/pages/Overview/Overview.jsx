import React, { useState } from 'react';
import '../shared.scss';
import './Overview.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Map from '../../components/Map/Map';
import MapOverlay from './MapOverlay/MapOverlay';

export default function Home() {
  const [waypoints, setWaypoints] = useState([]);
  const [counter, setCounter] = useState(1);

  const waypointAddedHandler = (coord) => {
    setWaypoints((oldWps) => {
      const newWps = [
        ...oldWps,
        {
          id: counter,
          name: `Waypoint ${counter}`,
          active: false,
          longitude: coord.longitude,
          latitude: coord.latitude,
        },
      ];
      return newWps;
    });

    setCounter((oldCounter) => oldCounter + 1);
  };

  const waypointRemovedHandler = (id) => {
    if (waypoints.length === 1) {
      // Reset counter if there is no waypoint left
      setCounter(1);
    }
    setWaypoints((oldWps) => {
      const updatedWps = [...oldWps.filter((wp) => wp.id !== id)];

      return updatedWps;
    });
  };

  const waypointUpdatedHandler = (id, coord) => {
    setWaypoints((oldWps) => {
      const updatedWps = oldWps.map((wp) => {
        if (wp.id === id) {
          return { ...wp, longitude: coord.longitude, latitude: coord.latitude };
        }

        return wp;
      });

      return updatedWps;
    });
  };

  return (
    <PageWrapper fullscreen>
      <Map waypoints={waypoints} onWaypointAdded={waypointAddedHandler} onWaypointUpdated={waypointUpdatedHandler} />

      <MapOverlay waypoints={waypoints} onWaypointRemoved={waypointRemovedHandler} />
    </PageWrapper>
  );
}
