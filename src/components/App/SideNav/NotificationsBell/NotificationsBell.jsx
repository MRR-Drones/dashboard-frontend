import React from 'react';
import './NotificationsBell.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function NotificationsBell() {
  return (
    <div className="NotificationsBell">
      <FontAwesomeIcon icon={regular('bell')} />
    </div>
  );
}
