import React from 'react';
import './style.css';
import FEclassroom from './FEclassComponent/FEclassroom';
import Greet from './IntroClassComponent/GreetClassComponent';

export default function App() {
  return (
    <div>
      <Greet />
      {/* <FEclassroom name="Andrew" div="4.5" /> */}
    </div>
  );
}
