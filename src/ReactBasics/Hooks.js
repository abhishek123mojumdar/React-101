import React, { useState } from 'react';
import './Hooks.css';
//import styles from './Hooks.modules.css';

const Hooks = (props) => {
  //console.log('Hooks component rendered');
  let imageArray = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/16/200/300',
    'https://picsum.photos/id/15/200/300',
    'https://picsum.photos/id/18/200/300',
    'https://picsum.photos/id/19/200/300',
    'https://picsum.photos/id/27/200/300',
    'https://picsum.photos/id/25/200/300',
    'https://picsum.photos/id/28/200/300',
  ];
  let [paraStyle, setParaStyle] = useState('');
  let [toggle, setToggle] = useState(false);
  let [counter, setCounter] = useState(0);
  let headingStyle = {
    color: 'orange',
    fontSize: '50px',
  };

  function changeStyle() {
    if (!toggle) {
      setParaStyle('paraClass');
    } else {
      setParaStyle('');
    }
    setToggle(!toggle);
  }

  function changeCounter(item) {
    //console.log(item);
    // setCounter(counter + 1);
    setCounter((prevState) => {
      prevState = prevState + 1;
      console.log('prevState', prevState);
      return prevState;
    });
    // console.log(counter);
  }

  return (
    <React.Fragment>
      <button onClick={changeStyle}>Change Style</button>
      <h1 style={headingStyle}>Hey this is written inside a fragment</h1>
      <p className={paraStyle}>Let us display some images here</p>
      {/* <p className={styles.success}>Succcess</p> */}
      <hr />
      {imageArray.map((data, index) => (
        <img src={data} alt="No image foud here" key={index} />
      ))}
      <p> Here we will check how a counter works</p>
      <p className="paraClass">{counter}</p>
      <button onClick={() => changeCounter('Hello from inside change counter')}>
        Click here to increase count
      </button>
    </React.Fragment>
    //    <>
    //    <h1>Hey this is written inside a fragment</h1>
    //  </>
  );
};

export default Hooks;

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
