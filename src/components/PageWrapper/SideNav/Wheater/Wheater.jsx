import React from 'react';
import './Wheater.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/pro-regular-svg-icons';

export default function Wheater() {
  return (
    <div className="Wheater">
      <FontAwesomeIcon icon={faCloudSun} />
    </div>
  );
}
