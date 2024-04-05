import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducer/expenseReducer';

const store = configureStore({
    reducer: {
      expenses: expenseReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
  
  export default store;