import React from 'react';
import './style.css';
import FEclassroom from './FEclassComponent/FEclassroom';
import Greet from './IntroClassComponent/GreetClassComponent';
import UseEffComp from './FEclassComponent/useEffectHook';
import FormsComp from './FEclassComponent/FormsComponent';
import DynamicFormsComp from './FEclassComponent/DynamicForm';
import PropTypes from 'prop-types';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  function goToFormsComponet() {
    navigate('Forms');
  }

  // Navigate(-1) gets us to the previous page we navigated from

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
        <li>
          <button
            onClick={goToFormsComponet}
            style={{
              borderColor: 'transparent',
              cursor: 'pointer',
              textDecoration: 'underline',
              backgroundColor: 'transparent',
            }}
          >
            Go to forms component
          </button>
        </li>
        <li>
          <Link to="/dynamicForms">Dynamic Form (Dynamic Form component)</Link>
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
        <Route path="/Forms" element={<FormsComp />}></Route>
        <Route path="/dynamicForms" element={<DynamicFormsComp />}></Route>
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
