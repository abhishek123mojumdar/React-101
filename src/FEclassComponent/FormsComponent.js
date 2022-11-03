import React, { useEffect, useState, useRef } from 'react';
import './FEstyle.css';
import PropTypes from 'prop-types';

const FormsComp = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phNumber: '',
    email: '',
  });

  const [userDetailArr, setUserDetailArr] = useState([]);

  function handleInputs(e) {
    console.log(e.target.name + ' --- ' + e.target.value);
    //console.log(e.target.value);
    const name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    let formObject = { ...formData, id: new Date().getMilliseconds() };
    setUserDetailArr([...userDetailArr, formObject]);
    setFormData({
      name: '',
      age: '',
      phNumber: '',
      email: '',
    });
  }

  return (
    <React.Fragment>
      <p>Welcome to forms component</p>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputs}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputs}
            />
          </label>
          <label>
            Phone number:
            <input
              type="text"
              name="phNumber"
              value={formData.phNumber}
              onChange={handleInputs}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputs}
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
      <br />
      <div>
        {userDetailArr.map((detail) => {
          return (
            <li key={detail.id}>
              {detail.name} || {detail.age} || {detail.phNumber} ||{' '}
              {detail.email}
            </li>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default FormsComp;
