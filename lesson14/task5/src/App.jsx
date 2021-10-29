import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [state, setState] = useState({ visible: false });

  const toggle = () => {
    setState({
      visible: !state.visible,
    });
  };

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <div>{state.visible && <Clock location="London" offset={0} />}</div>
      <div>{state.visible && <Clock location="Kyiv" offset={2} />}</div>
      <div>{state.visible && <Clock location="New York" offset={-5} />}</div>
    </div>
  );
};

export default App;
