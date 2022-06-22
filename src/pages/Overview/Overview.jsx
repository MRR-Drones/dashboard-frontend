import React, { useState } from 'react';
import '../shared.scss';
import './Overview.scss';

import { toast } from 'react-toastify';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Map from '../../components/Map/Map';
import MapOverlay from './MapOverlay/MapOverlay';
import Chat from '../../components/SignalR/Chat';
import CommandService from '../../services/command.service';

export default function Home() {
  // center: [5.4697225, 51.441642],
  const [waypoints, setWaypoints] = useState([]);
  const [counter, setCounter] = useState(1);
  const [realTimeData, setRealTimeData] = useState(null);
  const [realTimeRoutes, setRealTimeRoutes] = useState([]);

  // useEffect(() => {
  //   if (isFlying) {
  //     setLivePosition({
  //       longitude: 5.442753738779601,
  //       latitude: 51.44857998207158,
  //     });
  //   }
  // }, [isFlying]);
  // const updateRealTimeData = () => {};

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (testCounter.current === testWaypoints.length) {
  //       clearInterval(interval);

  //       return;
  //     }

  //     const longtitude = testWaypoints[testCounter.current].lng;
  //     const latitude = testWaypoints[testCounter.current].lat;

  //     setRealTimeData({
  //       la: latitude,
  //       lo: longtitude,
  //     });

  //     setRealTimeRoutes((currRoutes) => [...currRoutes, [longtitude, latitude]]);

  //     testCounter.current += 1;
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, []);

  const updateRealTimeData = (liveData) => {
    const { lo: longitude, la: latitude, if: isFlying } = liveData;

    setRealTimeData(liveData);

    if (isFlying) setRealTimeRoutes((currRoutes) => [...currRoutes, [longitude, latitude]]);
  };

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

  const startFlightCommand = () => {
    if (waypoints.length < 2) {
      toast.warn('You should have at least 2 waypoints before flying the drone!');
      return;
    }

    if (!realTimeData) {
      toast.warn('Drone is not connected!');
      return;
    }

    toast.info('Sending flight request!');
    CommandService.startFlight();
  };

  const stopFlightCommand = () => {
    toast.info('Sending stop request!');
    CommandService.stopFlight();
  };

  return (
    <PageWrapper fullscreen>
      <Chat onReceivingRealTimeData={updateRealTimeData} onConnected={() => {}} onReceivingLiveRawData={() => {}} />
      <Map
        realTimeData={realTimeData}
        realTimeRoutes={realTimeRoutes}
        waypoints={waypoints}
        onWaypointAdded={waypointAddedHandler}
        onWaypointUpdated={waypointUpdatedHandler}
      />

      <MapOverlay
        realTimeData={realTimeData}
        waypoints={waypoints}
        onWaypointRemoved={waypointRemovedHandler}
        onStartFlight={startFlightCommand}
        onStopFlight={stopFlightCommand}
      />
    </PageWrapper>
  );
}
