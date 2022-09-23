import React from 'react';
import './FEstyle.css';

export default function FEclassroom(props) {
  return (
    <div>
      <p>
        The name is {props.name} whose divison is {props.div}
        {props.children}
      </p>
    </div>
  );
}
