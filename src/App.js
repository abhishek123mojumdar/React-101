import React from 'react';
import './style.css';
import FEclassroom from './FEclassComponent/FEclassroom';
import Greet from './IntroClassComponent/GreetClassComponent';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FEclassroom name="Abhishek" div="1">
        <p>This is about how do we deal with child components</p>
      </FEclassroom>
      <FEclassroom name="Raj" div="2" />
      <FEclassroom name="Raina" div="3" />
      <Greet />
    </div>
  );
}
