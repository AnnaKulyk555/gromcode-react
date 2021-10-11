import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: '',
    };
  }

  showColorName = color => {
    this.setState({
      colorName: color,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={this.showColorName.bind(this, 'Coral')}
            onMouseLeave={this.showColorName.bind(this, '')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={this.showColorName.bind(this, 'Aqua')}
            onMouseLeave={this.showColorName.bind(this, '')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={this.showColorName.bind(this, 'Bisque')}
            onMouseLeave={this.showColorName.bind(this, '')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
