import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  expenses: [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2024-07-04'),
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2024-01-05'),
    },
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2021-12-01'),
    },
    {
      id: 'e4',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19'),
    },
    {
      id: 'e5',
      description: 'Another book',
      amount: 18.59,
      date: new Date('2024-07-04'),
    },
    {
      id: 'e6',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2024-07-02'),
    },
    {
      id: 'e7',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2024-07-03'),
    },
    {
      id: 'e8',
      description: 'A book',
      amount: 14.99,
      date: new Date('2024-07-02'),
    },
    {
      id: 'e9',
      description: 'Another book',
      amount: 18.59,
      date: new Date('2022-02-18'),
    },
  ]
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense(state, action) {
      state.expenses.unshift(action.payload);
    },
    updateExpense(state, action) {
      const { id, data } = action.payload;
      const expenseIndex = state.expenses.findIndex(expense => expense.id === id);
      if (expenseIndex !== -1) {
        state.expenses[expenseIndex] = { ...state.expenses[expenseIndex], ...data };
      }
    },
    deleteExpense(state, action) {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;