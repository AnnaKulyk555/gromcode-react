import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideContent = () => {
    this.setState({
      isOpen: false,
    });
  };

  showContent = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand
          title="Some title"
          isOpen={this.state.isOpen}
          onOpen={this.showContent}
          onClose={this.hideContent}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a className.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
