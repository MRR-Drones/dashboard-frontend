import React, { useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.scss';
// import * as turf from '@turf/turf';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3Rpam52ZXJoYWdlbiIsImEiOiJjbDI3aWZydGEwMHh6M2pucnNuYndtdzVsIn0.gQ6aF_q4iBDNQ9xSl-kP-g';

export default function Map() {
  const mapContainer = useRef(null);

  const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [5.4697225, 51.441642],
    zoom: 12,
  });

  map.on('load', () => {
    // const line = turf.lineString([
    //   [-83, 30],
    //   [-84, 36],
    //   [-78, 41],
    // ]);
    // const options = { units: 'kilometer' };
    // turf.along(line, 200, options);
  });

  return <div ref={mapContainer} className="map" />;
}
