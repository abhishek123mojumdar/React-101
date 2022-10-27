import React, { useState } from 'react';
import './FEstyle.css';

const FwdRefComp = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <p>Functional component</p>
      <input type="text" ref={ref} />
    </React.Fragment>
  );
});

export default FwdRefComp;

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
