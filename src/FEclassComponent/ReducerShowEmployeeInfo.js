import React, { useState } from 'react';
import './FEstyle.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { resetState } from '../employeeStore';
const ShowEmployeeInfo = (props) => {
  const employeeInfo = useSelector((state) => {
    return state.employeeinfo.value;
  });
  const dispatch = useDispatch();
  function resetStateValues() {
    dispatch(resetState());
  }
  return (
    <>
      <p>Name : {employeeInfo.name}</p>
      <p>Organization : {employeeInfo.org}</p>
      <p>Salary : {employeeInfo.salary}</p>
      <p>Office : {employeeInfo.office}</p>
      <button onClick={resetStateValues}>Reset state</button>
    </>
  );
};

export default ShowEmployeeInfo;

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
