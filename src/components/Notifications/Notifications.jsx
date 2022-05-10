import React from 'react';
import './Notifications.scss';

// Import components
import Notification from './Notification/Notification';

export default function Notifications() {
  return (
    <div className="Notifications">
      <Notification messageType="check" firstChild />
      <Notification messageType="error" />
      <Notification messageType="warning" />
    </div>
  );
}
