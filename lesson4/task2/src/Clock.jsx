import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      localTime: getTimeWithOffset(this.props.offset),
    };

    setInterval(() => {
      this.setState({
        localTime: getTimeWithOffset(this.props.offset),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{moment(this.state.localTime).format('hh:mm:ss A')}</div>
      </div>
    );
  }
}

export default Clock;
