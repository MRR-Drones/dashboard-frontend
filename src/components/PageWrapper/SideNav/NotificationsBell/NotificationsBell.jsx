import React from 'react';
import './NotificationsBell.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/pro-regular-svg-icons';

export default function NotificationsBell() {
  return (
    <div className="NotificationsBell">
      <FontAwesomeIcon icon={faBell} />
    </div>
  );
}
