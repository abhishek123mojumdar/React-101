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
  },
  reducers: {
    commitData: (state, action) => {
      state.value = action.payload;
    },
    resetState: (state, action) => {
      state.value = {
        name: 'Abhishek',
        age: '',
        phNumber: '',
        email: '',
      };
    },
  },
});

console.log(empl);
export const { commitData, resetState } = empl.actions;
export default empl.reducer;
