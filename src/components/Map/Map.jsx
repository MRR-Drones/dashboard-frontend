/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.scss';
// import * as turf from '@turf/turf';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5.4697225, 51.441642],
      zoom: 12,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;
