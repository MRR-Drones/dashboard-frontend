import React from 'react';
import './Card.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryHalf, faTimer, faArrowsUpDown, faClockRotateLeft } from '@fortawesome/pro-solid-svg-icons';

// Import components
import StatusIndicator from './StatusIndicator/StatusIndicator';

export default function Card({ number, status, small, battery, speed, altitude, timeTravelled }) {
  return (
    <div className="Card">
      <div className="top">
        <div className={`border-left ${status}`} />
        <p className="name">Drone</p>
        <p className="icon">{number}</p>
        <StatusIndicator status={status} />
        <p className="route">Inspection round 1</p>
      </div>
      {!small && (
        <div className="bottom">
          <div className="icon-text">
            <FontAwesomeIcon icon={faArrowsUpDown} />
            <p>{altitude} m</p>
          </div>
          <div className="icon-text">
            <FontAwesomeIcon icon={faBatteryHalf} />
            <p>{battery} %</p>
          </div>
          <div className="icon-text">
            <FontAwesomeIcon icon={faClockRotateLeft} />
            <p>{timeTravelled} min</p>
          </div>
          <div className="icon-text">
            <FontAwesomeIcon icon={faTimer} />
            <p>{speed} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
}
