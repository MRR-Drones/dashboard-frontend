import React from 'react';
import './Notifications.scss';

// Import components
import Notification from './Notification/Notification';

export default function Notifications() {
  return (
    <div className="Notifications">
      <h2>Latest activity</h2>
      <Notification messageType="check" />
      <Notification messageType="error" />
      <Notification messageType="warning" />
    </div>
  );
}
