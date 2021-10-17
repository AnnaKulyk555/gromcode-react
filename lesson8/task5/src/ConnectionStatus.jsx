import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    networkStatus: 'online',
  };

  componentDidMount() {
    window.addEventListener('offline', this.updateNetworkStatus());
    window.addEventListener('online', this.updateNetworkStatus());
  }

  updateNetworkStatus = () => {
    const statusElem = document.querySelector('.status');
    if (window.navigator.onLine) {
      statusElem.classList.remove('status_offline');
      this.setState({
        networkStatus: 'online',
      });
    } else {
      statusElem.classList.add('status_offline');
      this.setState({
        networkStatus: 'offline',
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('offline', this.updateNetworkStatus());
    window.removeEventListener('online', this.updateNetworkStatus());
  }

  render() {
    return <div className="status">{this.state.networkStatus}</div>;
  }
}

export default ConnectionStatus;
