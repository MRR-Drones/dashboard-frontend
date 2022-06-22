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

export default function Map({ waypoints, realTimeData, realTimeRoutes, onWaypointAdded, onWaypointUpdated }) {
  // center: [5.4697225, 51.441642],
  const [shortestPathsTurf, setShortestPathsTurf] = useState(null);
  const [livePositionTurf, setLivePositionTurf] = useState(null);
  const [bearingTurf, setBearingTurf] = useState(0);
  const [popupInfo, setPopupInfo] = useState(null);
  const mapRef = useRef(null);
  const counter = useRef(0);

  const clickHandler = (data) => {
    // We won't create new waypoint if drone is flying
    if (realTimeData && realTimeData.if) return;

    const coord = data.lngLat;
    console.log(coord);

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
      setShortestPathsTurf(lineString);
    } else {
      setShortestPathsTurf(null);
    }
  }, [waypoints]);

  useEffect(() => {
    if (!realTimeData) return;

    const { lo: longitude, la: latitude, if: isFlying } = realTimeData;
    // mapRef.current.panTo([longitude, latitude]);

    if (counter.current === 0 && isFlying) {
      if (!longitude || !latitude) return;
      mapRef.current.flyTo({
        center: [longitude, latitude],
        speed: 0.9,
        zoom: 19,
      });

      toast.dismiss();
      toast.success('Flight has started!');

      counter.current += 1;
    }

    if (!isFlying && counter.current !== 0) {
      toast.dismiss();
      toast.info('Flight has finished!');
      setLivePositionTurf(null);
      setBearingTurf(null);
      counter.current = 0;
    }

    if (!isFlying) {
      return;
    }

    const point = turf.point([longitude, latitude]);
    setLivePositionTurf(point);
  }, [realTimeData]);

  useEffect(() => {
    const numOfRoutes = realTimeRoutes.length;
    if (numOfRoutes > 1) {
      const start = turf.point(realTimeRoutes[numOfRoutes - 2]);
      const end = turf.point(realTimeRoutes[numOfRoutes - 1]);
      const bearing = turf.bearing(start, end);
      setBearingTurf(bearing);
    }
  }, [realTimeRoutes]);

  return (
    <>
      {/* <div className="map-container" ref={mapContainerRef} /> */}
      <MapGL
        ref={mapRef}
        initialViewState={{
          longitude: 5.4697225,
          latitude: 51.441642,
          zoom: 3.5,
          pitch: 40,
          maxPitch: 70,
          minZoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
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

        {/* Lines showing shortest paths between waypoints */}
        <Source id="shortest-paths" type="geojson" data={shortestPathsTurf}>
          {/* Simply setting lineStrings to null won't make the layer disapear! */}
          {waypoints.length >= 2 && (
            <Layer
              id="shortest-paths"
              type="line"
              paint={{
                'line-color': '#0080ff',
                'line-width': 3,
              }}
            />
          )}
        </Source>

        {/* Live real-time position of the drone when it is flying */}
        <Source id="drone" type="geojson" data={livePositionTurf}>
          <Layer
            id="drone-position"
            type="symbol"
            layout={{
              // This icon is a part of the Mapbox Streets style.
              // To view all images available in a Mapbox style, open
              // the style in Mapbox Studio and click the "Images" tab.
              // To add a new image to the style at runtime see
              // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
              'icon-image': 'airport-15',
              'icon-rotate': bearingTurf,
              'icon-rotation-alignment': 'map',
              'icon-allow-overlap': true,
              'icon-ignore-placement': true,
              'icon-size': 1.2,
            }}
          />
        </Source>
      </MapGL>
      <div className="overlay"></div>
    </>
  );
}
