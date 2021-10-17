import React from 'react';

class ConnectionStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      networkStatus: 'online',
    };

    window.addEventListener('offline', this.onOffline);
    window.addEventListener('online', this.onOnline);
  }

  onOffline = () => {
    this.setState({
      networkStatus: 'offline',
    });
  };

  onOnline = () => {
    this.setState({
      networkStatus: 'online',
    });
  };

  componentWillUnmount() {
    window.removeEventListener('offline', this.onOffline);
    window.removeEventListener('online', this.onOnline);
  }

  render() {
    return this.state.networkStatus === 'offline' ? (
      <div className="status status_offline ">{this.state.networkStatus}</div>
    ) : (
      <div className="status">{this.state.networkStatus}</div>
    );
  }
}

export default ConnectionStatus;
