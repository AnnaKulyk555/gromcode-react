import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleStatus: 'Off',
    };
  }

  toggleHandler = () => {
    this.setState({
      toggleStatus: this.state.toggleStatus === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggleHandler}>
        {this.state.toggleStatus}
      </button>
    );
  }
}

export default Toggler;
