import React from 'react';
import './Notifications.scss';

// Import components
import Notification from './Notification/Notification';

export default function Notifications() {
  const data = [
    {
      id: 1,
      messageTitle: 'titeltje 1',
      message: 'message',
      messageType: 'warning',
    },
    {
      id: 2,
      messageTitle: 'titeltje 2',
      message: 'message 2',
      messageType: 'error',
    },
    {
      id: 3,
      messageTitle: 'titeltje 3',
      message: 'message 3',
      messageType: 'check',
    },
    {
      id: 1,
      messageTitle: 'titeltje 1',
      message: 'message',
      messageType: 'warning',
    },
    {
      id: 2,
      messageTitle: 'titeltje 2',
      message: 'message 2',
      messageType: 'error',
    },
    {
      id: 3,
      messageTitle: 'titeltje 3',
      message: 'message 3',
      messageType: 'check',
    },
    {
      id: 1,
      messageTitle: 'titeltje 1',
      message: 'message',
      messageType: 'warning',
    },
    {
      id: 2,
      messageTitle: 'titeltje 2',
      message: 'message 2',
      messageType: 'error',
    },
    {
      id: 3,
      messageTitle: 'titeltje 3',
      message: 'message 3',
      messageType: 'check',
    },
  ];

  return (
    <div className="Notifications">
      {data.map((item, index) => (
        <Notification
          key={item.id}
          messageTitle={item.messageTitle}
          message={item.message}
          messageType={item.messageType}
          firstChild={index === 1}
        />
      ))}
    </div>
  );
}
