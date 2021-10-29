import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [state, setState] = useState({ localTime: getTimeWithOffset(offset) });

  useEffect(() => {
    const interval = setInterval(() => {
      setState({
        localTime: getTimeWithOffset(offset),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{moment(state.localTime).format('hh:mm:ss A')}</div>
    </div>
  );
};

export default Clock;
