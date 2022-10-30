import React, { useEffect, useState, useRef } from 'react';
import './FEstyle.css';
import PropTypes from 'prop-types';

const UseEffComp = (props) => {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let inputRef = useRef();
  let paraRef = useRef();

  function increaseCountFn() {
    setNum1(num1 + 1);
    //alert(num1);
  }

  // If I want to do something after i have updated the value of the variable that I have defined , it will not be possible with the above written code as
  // useSate works as an async function
  // To implement such a functionality I need to useEffect
  // However it is importatnt to understand that useEffect  will bw calld after render call .
  // Hence we need to define governing factors on which the useEffect should trigger
  // UseEffect will be called during initial render , so We can place any piece of code that needs to be run at the start of the page
  // We can stop the initial call by putting some condition
  // Do not call useState inside useEffect it will cause an infinite loop
  // If at all it needs to be done , pass an empty array

  useEffect(() => {
    if (num1 !== 0) {
      alert('Use effect has been called');
      document.title = `Count is ${num1}`;
    }
  }, [num1]);

  function setValueforInput(e) {
    setNum2(e.target.value);
  }

  function getValueFromInput() {
    console.log(inputRef);
    //document.getElementById('showInpVal') === paraRef.current
    paraRef.current.innerHTML = inputRef.current.value;
    paraRef.current.style.color = 'Green';
    paraRef.current.style.fontSize = '50px';
  }

  // UseRef is just like Ref in class component , It works the same way.
  // Here also we get an object which has a current attribute which whould give us access to the DOM element

  return (
    <React.Fragment>
      <input
        type="number"
        value={num2}
        onChange={setValueforInput}
        ref={inputRef}
      />
      <button onClick={increaseCountFn}>Click to increase count {num1} </button>
      <button onClick={getValueFromInput}>Get Value from Input box</button>
      <span>{num2}</span>
      <p id="showInpVal" ref={paraRef}></p>
    </React.Fragment>
  );
};

export default UseEffComp;
