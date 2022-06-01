import React from 'react';
import './CoordinatesBox.scss';

// Import images
import { ReactComponent as Xyz } from './images/xyz.svg';

export default function CoordinatesBox({ alt, long, lat }) {
  return (
    <div className="coordinates-box">
      <p className="fullwidth">
        <span>Alt</span> {alt}
      </p>

      <Xyz className="fullwidth" />
      <p>
        <span>Long</span> {long}
      </p>

      <p>
        <span>Lat</span> {lat}
      </p>
    </div>
  );
}
