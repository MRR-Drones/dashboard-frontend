import React from 'react';
import MapGL from 'react-map-gl';
import './Map.scss';
import * as turf from '@turf/turf';

MapGL.accessToken = 'pk.eyJ1Ijoic3Rpam52ZXJoYWdlbiIsImEiOiJjbDI3aWZydGEwMHh6M2pucnNuYndtdzVsIn0.gQ6aF_q4iBDNQ9xSl-kP-g';

export default function Map() {
  MapGL.on('load', () => {
    const line = turf.lineString([
      [-83, 30],
      [-84, 36],
      [-78, 41],
    ]);
    const options = { units: 'kilometer' };
    turf.along(line, 200, options);
  });

  return (
    <MapGL
      initialViewState={{
        longitude: 5.4697225,
        latitude: 51.441642,
        zoom: 12,
      }}
      mapboxAccessToken="pk.eyJ1Ijoic3Rpam52ZXJoYWdlbiIsImEiOiJjbDI3aWZydGEwMHh6M2pucnNuYndtdzVsIn0.gQ6aF_q4iBDNQ9xSl-kP-g"
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
