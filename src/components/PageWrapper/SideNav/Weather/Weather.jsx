import React from 'react';
import './Weather.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/pro-regular-svg-icons';

export default function Weather() {
  return (
    <div className="Weather">
      <FontAwesomeIcon icon={faCloudSun} />
    </div>
  );
}
