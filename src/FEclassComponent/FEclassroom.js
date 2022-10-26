import React, { useState } from 'react';
import './FEstyle.css';

export default function FEclassroom(props) {
  let [val, setVal] = useState(10);

  function setValue(e) {
    setVal(e.target.value); // this is how we implement two way binding
  }

  return (
    <React.Fragment>
      <p>
        The name is {props.name} whose divison is {props.div}
        {props.children}
      </p>
      <input type="text" value={val} onChange={setValue} />
      <p>{val}</p>
    </React.Fragment>
  );
}

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
