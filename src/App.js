import React from 'react';
import './style.css';
import FEclassroom from './FEclassComponent/FEclassroom';
import Greet from './IntroClassComponent/GreetClassComponent';
import UseEffComp from './FEclassComponent/useEffectHook';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <div> 
      <Greet />
      <FEclassroom name="Andrew" div={3} animals={['Dog', 'Cat']} />
      <UseEffComp />
    </div>
  );
};

export default App;
