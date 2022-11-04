import React, { useEffect, useState, useRef } from 'react';
import './FEstyle.css';
import PropTypes from 'prop-types';

const DynamicFormsComp = (props) => {
  const [formData, setFormData] = useState([
    {
      name: '',
      lastName: '',
    },
  ]);

  const [userDetailArr, setUserDetailArr] = useState([]);

  function handleInputs(index, e) {
    console.log(index + ' --> ' + e.target.name + ' ---> ' + e.target.value);
    //console.log(e.target.value);
    const values = [...formData];
    values[index][e.target.name] = e.target.value;
    setFormData(values);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    //setUserDetailArr(formData);
  }

  function addElement() {
    setFormData([...formData, { name: '', lastName: '' }]);
  }
  function removeElement(index) {
    console.log(index);
    let dataArr = [...formData];
    dataArr.splice(index, 1);
    setFormData(dataArr);
  }

  return (
    <React.Fragment>
      <p>Welcome to Dynamic component</p>
      <form action="" onSubmit={handleSubmit}>
        <div>
          {formData.map((form, index) => {
            return (
              <div key={index}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(event) => handleInputs(index, event)}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={(event) => handleInputs(index, event)}
                  />
                </label>
                {index === formData.length - 1 ? (
                  <button onClick={addElement}>Add</button>
                ) : (
                  ''
                )}
                {index > 0 ? (
                  <button onClick={() => removeElement(index)}>Remove</button>
                ) : (
                  ''
                )}
              </div>
            );
          })}
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
      <br />
      <div>
        {userDetailArr.map((detail) => {
          return (
            <li key={detail.id}>
              {detail.name} || {detail.lastName}
            </li>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default DynamicFormsComp;
