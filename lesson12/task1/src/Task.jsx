import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const Task = ({ id, done, text, onChange, onDelete }) => (
  <li className={classNames('list-item', { 'list-item_done': done })}>
    <input
      type="checkbox"
      className="list-item__checkbox"
      defaultChecked={done}
      onChange={() => onChange(id)}
    />
    <span className="list-item__text ">{text}</span>
    <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
  </li>
);

Task.propTypes = {
  task: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default Task;
