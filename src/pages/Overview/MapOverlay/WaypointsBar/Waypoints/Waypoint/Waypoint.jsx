import React from 'react';
import './Waypoint.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Waypoint({ name, active }) {
  return (
    <div className={`waypoint ${active ? 'active' : ''}`}>
      <p>{name}</p>
      <FontAwesomeIcon icon={solid('grip-lines')} />
    </div>
  );
}
