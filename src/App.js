import React from 'react';
import './style.css';
import FEclassroom from './FEclassComponent/FEclassroom';
import Greet from './IntroClassComponent/GreetClassComponent';
import UseEffComp from './FEclassComponent/useEffectHook';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Greet (Lifecycle hooks)</Link>
        </li>
        <li>
          <Link to="/classRoom">Class (Fragments and porpTypes)</Link>
        </li>
        <li>
          <Link to="/hook">Hooks (Fragments and porpTypes)</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Greet />}></Route>
        <Route
          path="/classRoom"
          element={
            <FEclassroom name="Andrew" div={3} animals={['Dog', 'Cat']} />
          }
        ></Route>
        <Route path="/hook" element={<UseEffComp />}></Route>
      </Routes>
    </>
    // <div>
    //   <Greet />
    //   <FEclassroom name="Andrew" div={3} animals={['Dog', 'Cat']} />
    //   <UseEffComp />
    // </div>
  );
};

export default App;
