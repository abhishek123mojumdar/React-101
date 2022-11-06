import { createSlice } from '@reduxjs/toolkit';

const employeeInfo = createSlice({
  name: 'employeeinfo', // this will be the name of the reducer
  initialState: {
    // initial value of our state
    value: {
      name: 'Abhishek',
      age: '',
      phNumber: '',
      email: '',
    },
    reducers: {
      // the state here holds the prev and current value of the state
      maintainData: (state, action) => {
        console.log(2);
        state.value = action.payload;
      },
    },
  },
});

console.log(employeeInfo.actions);
export const { maintainData } = employeeInfo.actions;
export default employeeInfo.reducer;
