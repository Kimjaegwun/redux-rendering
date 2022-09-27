import { createSlice } from '@reduxjs/toolkit';

/** Actions **/
export const SET_BACKGROUND = 'SET_BACKGROUND';

export const setBackground = background => ({ type: SET_BACKGROUND, background });

/** Reducer **/
const { reducer: backgroundReducer } = createSlice({
  name: 'background',
  initialState: {
    background: 'black', // 'random', 'animals', 'food', 'fashion', 'travel'
  },
  reducers: {},
  extraReducers: {
    SET_BACKGROUND: (state, action) => {
      state.background = action.background;
    },
  },
});

export default backgroundReducer;
