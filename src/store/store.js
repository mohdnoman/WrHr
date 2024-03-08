import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popupSlice';
import activeLinkReducer from './activeLinkSlice';

export default configureStore({
  reducer: {
    popup: popupReducer,
    activeLink: activeLinkReducer,
  },
});
