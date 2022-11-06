import { createSlice } from '@reduxjs/toolkit';

const empl = createSlice({
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
      commitData(state, action) {
        return action.payload;
      },
    },
  },
});

console.log(empl.actions);
export const { commitData } = empl.actions;
export default empl.reducer;
