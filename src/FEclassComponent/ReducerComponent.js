import React, { useState } from 'react';
import './FEstyle.css';
import ShowEmployeeInfo from './ReducerShowEmployeeInfo';
import EmployeeDetails from './ReducerEmployeeDetails';
import PropTypes from 'prop-types';

const ReducerComponent = (props) => {
  return (
    <React.Fragment>
      <EmployeeDetails />
      <hr />
      <ShowEmployeeInfo />
    </React.Fragment>
  );
};

export default ReducerComponent;

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
