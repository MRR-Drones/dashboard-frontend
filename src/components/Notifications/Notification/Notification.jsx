import React from 'react';
import './Notification.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components

export default function Notification({ messageType }) {
  return (
    <div className="Notification">
      <div className="heading">
        {messageType === 'check' && <FontAwesomeIcon className="iconCheck" icon={solid('check-circle')} />}
        {messageType === 'warning' && <FontAwesomeIcon className="iconWarning" icon={solid('circle-exclamation')} />}
        {messageType === 'error' && <FontAwesomeIcon className="iconError" icon={solid('times-circle')} />}
        <p className="title">Notification message</p>
      </div>
    </div>
  );
}
