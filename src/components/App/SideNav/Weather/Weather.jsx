import React from 'react';
import './Weather.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import Tooltip from '../../../Tooltip/Tooltip';

export default function Weather() {
  return (
    <div className="Weather">
      <FontAwesomeIcon icon={regular('cloud-sun')} />
      <Tooltip position="bottom">test inhoud tootlip</Tooltip>
    </div>
  );
}
