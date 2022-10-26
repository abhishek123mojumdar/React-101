import React from 'react';
import './FEstyle.css';

export default function FEclassroom(props) {
  return (
    <React.Fragment>
      <p>
        The name is {props.name} whose divison is {props.div}
        {props.children}
      </p>
    </React.Fragment>
  );
}
