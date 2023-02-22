import React, { useState } from 'react';
import './style.css';
import FEclassroom from './FEclassComponent/FEclassroom';
import Greet from './IntroClassComponent/GreetClassComponent';
import UseEffComp from './FEclassComponent/useEffectHook';
import ApiImplementation from './FEclassComponent/ReactApiImplimentation';
import FormsComp from './FEclassComponent/FormsComponent';
import ReducerComponent from './FEclassComponent/ReducerComponent';
import PropTypes from 'prop-types';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import DynamicFormsComp from './FEclassComponent/DynamicForm';
import { userinfo } from './loginDetails';
import BasicHook1UseState from './ReactBasics/Hook1UseState';

const App = () => {
  let [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  });
  let [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  function goToFormsComponet() {
    navigate('Forms');
  }

  function getRoutes() {
    return (
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
        <li>
          <Link to="/apiImplementation">
            Let us check how we implement Api in React{' '}
          </Link>
        </li>
        <li>
          <Link to="/reducer">Redux concepts</Link>
        </li>
        <li>
          <Link to="/Hook1UseState">Hook1 Use state</Link>
        </li>
      </ul>
    );
  }

  function getRoutedComponents() {
    return (
      <>
        {getRoutes()}
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
          <Route
            path="/apiImplementation"
            element={<ApiImplementation />}
          ></Route>
          <Route path="/reducer" element={<ReducerComponent />}></Route>
          <Route path="/Hook1UseState" element={<BasicHook1UseState />}></Route>
        </Routes>
      </>
    );
  }

  function getDetails(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  }

  function submitLoginDetails(e) {
    e.preventDefault();
    let info = userinfo.find((info) => {
      return info.username === userDetails.username;
    });
    if (info && info.password === userDetails.password) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }

  function getLoginForm() {
    return (
      <>
        <form onSubmit={submitLoginDetails} action="">
          <input
            type="text"
            placeholder="Enter User Name"
            value={userDetails.name}
            onChange={getDetails}
            name="username"
          />
          <input
            type="text"
            placeholder="Enter password"
            value={userDetails.password}
            onChange={getDetails}
            name="password"
          />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }

  // Navigate(-1) gets us to the previous page we navigated from

  return (
    <> {isLogin ? getRoutedComponents() : getLoginForm()}</>
    // <div>
    //   <Greet />
    //   <FEclassroom name="Andrew" div={3} animals={['Dog', 'Cat']} />
    //   <UseEffComp />
    // </div>
  );
};

export default App;
