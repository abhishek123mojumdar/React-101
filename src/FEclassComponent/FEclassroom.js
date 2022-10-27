import React, { useState } from 'react';
import './FEstyle.css';
import PropTypes from 'prop-types';

const FEclassroom = (props) => {
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
};

FEclassroom.propTypes = {
  name: PropTypes.string,
  div: PropTypes.number,
  animals: PropTypes.arrayOf(PropTypes.string),
};

export default FEclassroom;

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
