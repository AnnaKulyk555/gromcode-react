import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
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
    const { isOpen } = this.state;
    const { title, children } = this.props;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          {isOpen ? (
            <button className="expand__toggle-btn" onClick={this.hideContent}>
              <i className="fas fa-chevron-up"></i>
            </button>
          ) : (
            <button className="expand__toggle-btn" onClick={this.showContent}>
              <i className="fas fa-chevron-down"></i>
            </button>
          )}
        </div>
        {isOpen ? <div className="expand__content">{children}</div> : null}
      </div>
    );
  }
}

Expand.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;
