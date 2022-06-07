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
      style: 'mapbox://styles/mapbox/light-v10',
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
    var dronePath = turf.lineString(coordinates);

    var dronePathLength = turf.lineDistance(dronePath, 'kilometers');
    var dronePoint = turf.along(dronePath, 0, 'kilometers');

    map.on('load', () => {
      // Add a data source containing GeoJSON data.
      map.addSource('dronepath', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [coordinates],
          },
        },
      });

      // Add a blue outline around the polygon.
      map.addLayer({
        id: 'droneline',
        type: 'line',
        source: 'dronepath',
        layout: {},
        paint: {
          'line-color': '#0080ff',
          'line-width': 3,
        },
      });

      // Add markers
      // https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png

      for (const coordinate of coordinates) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
          .setLngLat(coordinate)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(`<h3>${coordinate[0]}</h3><p>${coordinate[1]}</p>`)
          )
          .addTo(map);
      }

      // Add a plane on the path
      map.addSource('drone', {
        type: 'geojson',
        data: dronePoint,
        maxzoom: 20,
      });

      map.addLayer({
        id: 'drone',
        type: 'circle',
        source: 'drone',
        layout: {},
        paint: {
          'circle-radius': 10,
        },
      });

      var step = 0;
      var numSteps = 500; //Change this to set animation resolution
      var timePerStep = 20; //Change this to alter animation speed
      var pSource = map.getSource('drone');
      var interval = setInterval(function () {
        step += 1;
        if (step > numSteps) {
          clearInterval(interval);
        } else {
          var curDistance = (step / numSteps) * dronePathLength;
          var dronePoint = turf.along(dronePath, curDistance, 'kilometers');
          pSource.setData(dronePoint);
          // console.log(curDistance);
        }
      }, timePerStep);
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
