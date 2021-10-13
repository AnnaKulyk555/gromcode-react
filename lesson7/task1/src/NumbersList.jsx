import React from 'react';

const NumbersList = ({ numbers }) => (
  <ul>
    {numbers.map((num, index) => (
      <li key={index}>{num}</li>
    ))}
  </ul>
);

export default NumbersList;
