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
        <h4 className="messageTitle">Notification message</h4>
      </div>
      <p className="message">
        This is the notification message kjaskajhsdkjhasdkhasjkdaskdhjas sdjsjdhjs jahsajhs ajshakshkjahskskshjahskjahs
        kjahsjkahsajhsjkahskja kahsjkahs
      </p>
    </div>
  );
}
