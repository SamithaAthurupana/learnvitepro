import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks:[]
  },
  reducers: {
    storeTask: () => {

    }
  }
})

export const { storeTask } = taskSlice.actions;
export default taskSlice.reducer;