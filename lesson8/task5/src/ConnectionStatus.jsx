import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    networkStatus: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onNetworkStatus);
    window.addEventListener('offline', this.onNetworkStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onNetworkStatus);
    window.removeEventListener('offline', this.onNetworkStatus);
  }

  onNetworkStatus = e => {
    console.log(e);
    this.setState({ networkStatus: e.type });
  };

  render() {
    return this.state.networkStatus === 'offline' ? (
      <div className="status status_offline ">{this.state.networkStatus}</div>
    ) : (
      <div className="status">{this.state.networkStatus}</div>
    );
  }
}

export default ConnectionStatus;
