import React, { useEffect, useState } from 'react';
import './FEstyle.css';
import PropTypes from 'prop-types';

const UseEffComp = (props) => {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);

  function increaseCountFn() {
    setNum1(num1 + 1);
    //alert(num1);
  }
  function increaseCountFnBtn2() {
    setNum2(num2 + 1);
    //alert(num1);
  }
  // If I want to do something after i have updated the value of the variable that I have defined , it will not be possible with the above written code as
  // useSate works as an async function
  // To implement such a functionality I need to useEffect
  // However it is importatnt to understand that useEffect  will bw calld after render call .
  // Hence we need to define governing factors on which the useEffect should trigger
  // UseEffect will be called during initial render , so We can place any piece of code that needs to be run at the start of the page
  // We can stop the initial call by putting some condition

  useEffect(() => {
    if (num1 !== 0) alert('Use effect has been called');
  }, [num1]);

  return (
    <React.Fragment>
      <button onClick={increaseCountFn}>Click to increase count {num1} </button>
      <button onClick={increaseCountFnBtn2}>
        Click to increase count {num2}{' '}
      </button>
    </React.Fragment>
  );
};

export default UseEffComp;
