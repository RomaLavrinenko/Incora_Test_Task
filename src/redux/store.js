import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import postsReducer from './slices/postsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});
