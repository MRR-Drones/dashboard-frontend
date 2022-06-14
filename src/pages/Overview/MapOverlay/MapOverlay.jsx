import React from 'react';
import './MapOverlay.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import DataBar from './DataBar/DataBar';
import WaypointsBar from './WaypointsBar/WaypointsBar';

export default function MapOverlay() {
  return (
    <>
      <div className="map-overlay-left">
        <span className="heading">
          <FontAwesomeIcon icon={regular('chevron-left')} />
          <h2>Map</h2>
        </span>
        <DataBar />
      </div>
      <div className="map-overlay-right">
        <WaypointsBar />
      </div>
    </>
  );
}
