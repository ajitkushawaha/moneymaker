import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import balanceReducer from './balanceSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
   reducer: {
    balance: balanceReducer,
  },
});
