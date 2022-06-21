import React from 'react';
import './Waypoints.scss';

// Import components
import Waypoint from './Waypoint/Waypoint';

export default function Waypoints({ waypoints, onWaypointRemoved }) {
  let waypointsContent = <div className="info">There is no waypoint found!</div>;

  if (waypoints.length > 0) {
    waypointsContent = (
      <>
        {waypoints.map((wp) => (
          <Waypoint key={wp.id} id={wp.id} name={wp.name} active={wp.active} onWaypointRemoved={onWaypointRemoved} />
        ))}
      </>
    );
  }

  return (
    <div className="waypoints">
      {/* <div className="gradient-bar">
        <div className="indicator" />
      </div> */}
      {waypointsContent}
    </div>
  );
}
