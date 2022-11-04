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
  const [error, setError] = useState({ message: '' });
  const [errorHasOccured, setErrorHasOccured] = useState(false);

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
    checkError();
    setFormData({
      name: '',
      age: '',
      phNumber: '',
      email: '',
    });
  }

  function checkError() {
    let messageVal = 'Error has occured . Please check ';
    let usernameerr = '';
    let phNumber = '';
    let email = '';
    let age = '';
    let isError = false;
    if (!formData.name) {
      usernameerr = 'user name';
      isError = true;
    }
    if (!formData.phNumber) {
      phNumber = 'phone number';
      isError = true;
    }
    if (!formData.email) {
      email = 'email';
      isError = true;
    }
    if (!formData.age) {
      age = 'age';
      isError = true;
    }

    messageVal =
      messageVal + ' ' + usernameerr + ' ' + age + ' ' + phNumber + ' ' + email;

    isError ? setErrorHasOccured(true) : setErrorHasOccured(false);
    setError({ message: messageVal });
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

      {errorHasOccured ? (
        <>
          <p style={{ color: 'red' }}>{error.message}</p>
        </>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default FormsComp;
