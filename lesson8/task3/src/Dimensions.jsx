import React from 'react';

class Dimensions extends React.Component {
  state = {
    width: null,
    height: null,
  };

  setDimentions = (width, height) => {
    this.setState({
      width,
      height,
    });

    document.title = `${width} * ${height}`;
  };

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimentions(innerWidth, innerHeight);
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    const { innerWidth, innerHeight } = window;
    this.setDimentions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    return (
      <div className="dimensions">
        {this.state.width}px - {this.state.height}px
      </div>
    );
  }
}

export default Dimensions;
