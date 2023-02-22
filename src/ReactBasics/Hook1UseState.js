import React, { useState } from 'react';

const BasicHook1UseState = (props) => {
  let [val, setVal] = useState(10);

  return (
    <React.Fragment>
      <h1>Hey this is written inside a fragment</h1>
    </React.Fragment>
    //    <>
    //    <h1>Hey this is written inside a fragment</h1>
    //  </>
  );
};

export default BasicHook1UseState;

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
