import React, { useState } from 'react';

const Hooks = (props) => {
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
  let [val, setVal] = useState(10);

  return (
    <React.Fragment>
      <h1>Hey this is written inside a fragment</h1>
      <p>Let us display some images here</p>
      <hr />
      {imageArray.map((data) => (
        <img src={data} alt="No image foud here" />
      ))}
    </React.Fragment>
    //    <>
    //    <h1>Hey this is written inside a fragment</h1>
    //  </>
  );
};

export default Hooks;

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
