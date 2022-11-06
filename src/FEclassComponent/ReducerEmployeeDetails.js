import React, { useState } from 'react';
import './FEstyle.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { commitData } from '../employeeStore';

const EmployeeDetails = (props) => {
  const dispatch = useDispatch();
  let [employeeInfo, setEmployeeInfo] = useState({
    name: '',
    org: '',
    salary: '',
    office: '',
  });

  function handleInputs(e) {
    let name = e.target.name;
    let value = e.target.value;
    setEmployeeInfo({ ...employeeInfo, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(commitData);
    dispatch(commitData({ name: '', org: '2', salary: '34', office: '3' }));
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={employeeInfo.name}
              onChange={handleInputs}
            />
          </label>
          <label>
            Oranization:
            <input
              type="text"
              name="org"
              value={employeeInfo.org}
              onChange={handleInputs}
            />
          </label>
          <label>
            Salary:
            <input
              type="text"
              name="salary"
              value={employeeInfo.salary}
              onChange={handleInputs}
            />
          </label>
          <label>
            Office:
            <input
              type="text"
              name="office"
              value={employeeInfo.office}
              onChange={handleInputs}
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default EmployeeDetails;

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
