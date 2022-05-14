import { configureStore } from '@reduxjs/toolkit'
import filterSlice, {phonebookApi} from './redusers'
import { setupListeners } from '@reduxjs/toolkit/query'


// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth-slice';


// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    auth: authSlice,
    // todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     [phonebookApi.reducerPath]: phonebookApi.reducer,
//     filter: filterSlice

//   },
//   middleware: (getDefaultMiddleware) =>[
//     ...getDefaultMiddleware(),
//     phonebookApi.middleware,
//   ]
// })

// setupListeners(store.dispatch)


