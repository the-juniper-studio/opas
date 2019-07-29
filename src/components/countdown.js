import React from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ days, hours, minutes, seconds }) => {
  return <div className='countdown'><div className='days'>{hours}</div><div className='hours'>{hours}</div><div className='minutes'>{minutes}</div><div className='seconds'>{seconds}</div></div>;
};

export default renderer