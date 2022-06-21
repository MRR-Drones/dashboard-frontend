/* eslint-disable */

import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
import './Map.scss';
import * as turf from '@turf/turf';
import axios from 'axios';
import MapGL, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  Source,
  Layer,
  Popup,
} from 'react-map-gl';
import Pin from './pin';
import { toast } from 'react-toastify';

export default function Map({ waypoints, onWaypointAdded, onWaypointUpdated }) {
  // center: [5.4697225, 51.441642],
  const [lineStrings, setLineStrings] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);

  const clickHandler = (data) => {
    const coord = data.lngLat;

    // Check if these coordinates have already been added
    const isCoordAlreadyExisted = waypoints.some((wp) => wp.longitude === coord.lng && wp.latitude === coord.lat);

    if (isCoordAlreadyExisted) {
      toast.error('Waypoint with the same coordinates has already exists!');
    } else if (popupInfo) {
      setPopupInfo(null);
    } else {
      onWaypointAdded({
        longitude: coord.lng,
        latitude: coord.lat,
      });
    }
  };

  // Show popup when marker clicked
  const markerClickedHandler = (waypoint, e) => {
    e.originalEvent.stopPropagation();

    setPopupInfo(waypoint);
  };

  const markerDraggedHandler = (id, e) => {
    setPopupInfo(null);
    const newCoord = e.lngLat;
    onWaypointUpdated(id, {
      longitude: newCoord.lng,
      latitude: newCoord.lat,
    });
  };

  useEffect(() => {
    if (waypoints.length >= 2) {
      const coordinates = waypoints.map((wp) => {
        return [wp.longitude, wp.latitude];
      });

      const lineString = turf.lineString(coordinates);
      setLineStrings(lineString);
    } else {
      setLineStrings(null);
    }
  }, [waypoints]);

  return (
    <>
      {/* <div className="map-container" ref={mapContainerRef} /> */}
      <MapGL
        initialViewState={{
          longitude: 5.4697225,
          latitude: 51.441642,
          zoom: 3.5,
          zoom: 12,
          pitch: 40,
          maxPitch: 70,
          minZoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onClick={clickHandler}
      >
        <GeolocateControl position="bottom-right" />
        <FullscreenControl position="bottom-right" />
        <NavigationControl position="bottom-right" />
        <ScaleControl />

        {waypoints.map((wp) => (
          <Marker
            id={wp.id}
            key={`marker-${wp.id}`}
            draggable
            longitude={wp.longitude}
            latitude={wp.latitude}
            anchor="bottom"
            onClick={(e) => markerClickedHandler(wp, e)}
            onDrag={(e) => markerDraggedHandler(wp.id, e)}
          >
            <Pin />
          </Marker>
        ))}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <b>Name: </b>
              {popupInfo.name}
            </div>
            <div>
              <b>Longitude: </b>
              {popupInfo.longitude}
            </div>
            <div>
              <b>Latitude: </b>
              {popupInfo.latitude}
            </div>
          </Popup>
        )}

        <Source id="my-data" type="geojson" data={lineStrings}>
          {/* Simply setting lineStrings to null won't make the layer disapear! */}
          {waypoints.length >= 2 && (
            <Layer
              id="drone"
              type="line"
              paint={{
                'line-color': '#0080ff',
                'line-width': 3,
              }}
            />
          )}
        </Source>
      </MapGL>
      <div className="overlay"></div>
    </>
  );
}
