import React from 'react';
import './MapOverlay.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import DataBar from './DataBar/DataBar';
import WaypointsBar from './WaypointsBar/WaypointsBar';

export default function MapOverlay({ realTimeData, waypoints, onWaypointRemoved, onStartFlight, onStopFlight }) {
  return (
    <>
      <div className="map-overlay-left">
        <span className="heading">
          <FontAwesomeIcon icon={regular('chevron-left')} />
          <h2>Map</h2>
        </span>
        <DataBar realTimeData={realTimeData} />
      </div>
      <div className="map-overlay-right">
        <WaypointsBar
          waypoints={waypoints}
          onWaypointRemoved={onWaypointRemoved}
          isFlying={realTimeData?.if}
          onStartFlight={onStartFlight}
          onStopFlight={onStopFlight}
        />
      </div>
    </>
  );
}
