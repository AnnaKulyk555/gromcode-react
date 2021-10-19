/* eslint-disable class-methods-use-this */
import React from 'react';

const Square = props => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);

export default Square;
