import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ children, title, isOpen, onOpen, onClose }) => (
  <div className="expand border">
    <div className="expand__header">
      <span className="expand__title">{title}</span>
      {isOpen ? (
        <button className="expand__toggle-btn" onClick={onClose}>
          <i className="fas fa-chevron-up"></i>
        </button>
      ) : (
        <button className="expand__toggle-btn" onClick={onOpen}>
          <i className="fas fa-chevron-down"></i>
        </button>
      )}
    </div>
    {isOpen ? <div className="expand__content">{children}</div> : null}
  </div>
);

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  isOpen: false,
  title: '',
};

export default Expand;
