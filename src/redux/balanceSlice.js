import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: { amount: 0 },
  reducers: {
    addReward: (state, action) => {
      state.amount += action.payload;
    },
    resetBalance: (state) => {
      state.amount = 0;
    },
  },
});

export const { addReward, resetBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
