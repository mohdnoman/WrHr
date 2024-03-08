import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeLink: 'Time',
};

const activeLinkSlice = createSlice({
  name: 'activeLink',
  initialState,
  reducers: {
    setActiveLink(state, action) {
      state.activeLink = action.payload;
    },
  },
});

export const { setActiveLink } = activeLinkSlice.actions;
export default activeLinkSlice.reducer;
