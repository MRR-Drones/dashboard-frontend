import React, { useState, useEffect } from 'react';
import '../shared.scss';
import './Overview.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Map from '../../components/Map/Map';
import MapOverlay from './MapOverlay/MapOverlay';
import Chat from '../../components/SignalR/Chat';

export default function Home() {
  // center: [5.4697225, 51.441642],
  const [waypoints, setWaypoints] = useState([]);
  const [counter, setCounter] = useState(1);
  const [isFlying, setIsFlying] = useState(false);
  const [realTimeData, setRealTimeData] = useState(null);

  // useEffect(() => {
  //   if (isFlying) {
  //     setLivePosition({
  //       longitude: 5.442753738779601,
  //       latitude: 51.44857998207158,
  //     });
  //   }
  // }, [isFlying]);

  useEffect(() => {
    // console.log(realTimeData);
  }, [realTimeData]);

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
      <Chat onReceivingRealTimeData={setRealTimeData} />
      <Map
        realTimeData={realTimeData}
        waypoints={waypoints}
        onWaypointAdded={waypointAddedHandler}
        onWaypointUpdated={waypointUpdatedHandler}
      />

      <MapOverlay
        realTimeData={realTimeData}
        waypoints={waypoints}
        onWaypointRemoved={waypointRemovedHandler}
        isFlying={isFlying}
        onFlying={setIsFlying}
      />
    </PageWrapper>
  );
}
