import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.scss';
import * as turf from '@turf/turf';
// import './mapbox-gl.css';

// Import FontAwesome
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5.4697225, 51.441642],
      zoom: 12,
    });

    // -- Eindhoven --
    // style: 'mapbox://styles/mapbox/streets-v11',
    // center: [5.4697225, 51.441642],
    // zoom: 12,

    const one = [5.444334, 51.44042];
    const two = [5.472818, 51.444058];
    const three = [5.509539, 51.442132];
    const four = [5.479339, 51.422012];
    const five = [5.444334, 51.44042];

    // A simple line from origin to destination.
    const route = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [one, two, three, four, five],
          },
        },
      ],
    };

    map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png', (error, image) => {
      if (error) throw error;
      map.addImage('custom-marker', image);
      // Add a GeoJSON source with 2 points
      map.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              // 1
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [5.444334, 51.44042],
              },
              properties: {},
            },
            {
              // 2
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [5.472818, 51.444058],
              },
              properties: {},
            },
            {
              // 3
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [5.509539, 51.442132],
              },
              properties: {},
            },
            {
              // 4
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [5.479339, 51.422012],
              },
              properties: {},
            },
            {
              // 5
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [5.444334, 51.44042],
              },
              properties: {},
            },
          ],
        },
      });
    });

    // A single point that animates along the route.
    // Coordinates are initially set to origin.
    const point = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: origin,
          },
        },
      ],
    };

    // Calculate the distance in kilometers between route start/end point.
    const lineDistance = turf.length(route.features[0]);

    const arc = [];

    // Number of steps to use in the arc and animation, more steps means
    // a smoother arc and animation, but too many steps will result in a
    // low frame rate
    const steps = 500;

    // Draw an arc between the `origin` & `destination` of the two points
    for (let i = 0; i < lineDistance; i += lineDistance / steps) {
      const segment = turf.along(route.features[0], i);
      arc.push(segment.geometry.coordinates);
    }

    // Update the route with calculated arc coordinates
    route.features[0].geometry.coordinates = arc;

    // Used to increment the value of the point measurement against the route.
    let counter = 0;

    map.on('load', () => {
      // Add a source and layer displaying a point which will be animated in a circle.
      map.addSource('route', {
        type: 'geojson',
        data: route,
      });

      map.addSource('point', {
        type: 'geojson',
        data: point,
      });

      map.addLayer({
        id: 'route',
        source: 'route',
        type: 'line',
        paint: {
          'line-width': 2,
          'line-color': '#007cbf',
        },
      });

      map.addLayer({
        id: 'point',
        source: 'point',
        type: 'symbol',
        layout: {
          // This icon is a part of the Mapbox Streets style.
          // To view all images available in a Mapbox style, open
          // the style in Mapbox Studio and click the "Images" tab.
          // To add a new image to the style at runtime see
          // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
          'icon-image': 'airport-15',
          'icon-rotate': ['get', 'bearing'],
          'icon-rotation-alignment': 'map',
          'icon-allow-overlap': true,
          'icon-ignore-placement': true,
        },
      });

      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'points',
        layout: {
          'icon-image': 'custom-marker',
        },
      });

      function animate() {
        const start = route.features[0].geometry.coordinates[counter >= steps ? counter - 1 : counter];
        const end = route.features[0].geometry.coordinates[counter >= steps ? counter : counter + 1];
        if (!start || !end) return;

        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        point.features[0].geometry.coordinates = route.features[0].geometry.coordinates[counter];

        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
        point.features[0].properties.bearing = turf.bearing(turf.point(start), turf.point(end));

        // Update the source with this new data
        map.getSource('point').setData(point);

        // Request the next frame of animation as long as the end has not been reached
        if (counter < steps) {
          requestAnimationFrame(animate);
        }

        counter += 1;
      }

      document.getElementById('replay').addEventListener('click', () => {
        // Set the coordinates of the original point back to origin
        point.features[0].geometry.coordinates = origin;

        // Update the source layer
        map.getSource('point').setData(point);

        // Reset the counter
        counter = 0;

        // Restart the animation
        animate(counter);
      });

      // Start the animation
      animate(counter);
    });

    return () => map.remove();
  }, []);

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
