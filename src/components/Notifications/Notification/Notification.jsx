import React from 'react';
import './Notification.scss';
import { motion } from 'framer-motion';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components

export default function Notification({ messageType, messageTitle, message, firstChild }) {
  return (
    <div className={`Notification ${firstChild ? 'first-child' : ''}`}>
      <div className="messageContent">
        <div className="title">
          {messageType === 'check' && <FontAwesomeIcon className="iconCheck" icon={solid('check-circle')} />}
          {messageType === 'warning' && <FontAwesomeIcon className="iconWarning" icon={solid('circle-exclamation')} />}
          {messageType === 'error' && <FontAwesomeIcon className="iconError" icon={solid('times-circle')} />}
          <h4 className="messageTitle">{messageTitle}</h4>
        </div>
        <p className="message">{message}</p>
      </div>
      <motion.div
        className="iconClose"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25 }}
        whileTap={{ scale: 0.75 }}
      >
        <FontAwesomeIcon
          onClick={() => {
            // console.log('geklikt');
          }}
          aria-hidden="true"
          icon={solid('times')}
        />
      </motion.div>
    </div>
  );
}
