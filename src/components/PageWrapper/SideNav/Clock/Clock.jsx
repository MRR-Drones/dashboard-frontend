import React, { useEffect, useState } from 'react';
import './Clock.scss';

import Moment from 'react-moment';
import 'moment-timezone';

export default function Clock() {
  Moment.globalLocale = 'nl';
  const today = Date();
  const date = 'DD MMM YYYY';
  const time = 'HH:mm';
  const currentTime = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => currentTime[1](Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <h3>
        <Moment interval={1000} date={today} format={date} />
        <br />
        <Moment interval={1000} date={today} format={time} />
      </h3>
    </div>
  );
}
