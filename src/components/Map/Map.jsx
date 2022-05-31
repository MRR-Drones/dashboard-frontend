/* eslint-disable */

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.scss';
import * as turf from '@turf/turf';
import axios from 'axios';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {
  const mapContainerRef = useRef(null);

  const [isLoading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState('');
  const [map, setMap] = useState();
  const url = 'http://localhost:3000/';

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${url}markers.geojson`)
        .then((response) => {
          const allPoints = response.data;
          // Data to state
          setCoordinates(allPoints.features[0].geometry.coordinates[0]);
          // console.log(allPoints.features[0].geometry.coordinates[0]);
          setLoading(false);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };

    fetchData();

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5.4697225, 51.441642],
      zoom: 12,
      pitch: 40,
      maxPitch: 70,
      minZoom: 12,
    });

    setMap(map);

    return () => map.remove();

    // -- Eindhoven --
    // style: 'mapbox://styles/mapbox/streets-v11',
    // center: [5.4697225, 51.441642],
    // zoom: 12,
  }, []);

  if (!isLoading) {
    map.on('load', () => {
      // Add a data source containing GeoJSON data.
      map.addSource('eindhoven', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            // These coordinates outline Maine.
            coordinates: [coordinates],
          },
        },
      });

      // Add a blue outline around the polygon.
      map.addLayer({
        id: 'outline',
        type: 'line',
        source: 'eindhoven',
        layout: {},
        paint: {
          'line-color': '#0080ff',
          'line-width': 3,
        },
      });
    });
  }

  return (
    <>
      <div className="map-container" ref={mapContainerRef} />
      <div className="overlay">
        <button type="button" id="replay">
          Replay
        </button>
      </div>
    </>
  );
}
