import React from 'react';
import './Waypoints.scss';

// Import components
import Waypoint from './Waypoint/Waypoint';

export default function Waypoints() {
  return (
    <div className="waypoints">
      <div className="gradient-bar">
        <div className="indicator" />
      </div>
      <Waypoint name="Waypoint 1" />
      <Waypoint name="Waypoint 2" />
      <Waypoint active name="Waypoint 3" />
      <Waypoint name="Waypoint 4" />
      <Waypoint name="Waypoint 5" />
    </div>
  );
}
