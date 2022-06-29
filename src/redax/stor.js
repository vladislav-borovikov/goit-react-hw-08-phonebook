import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import logger from 'redux-logger';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { default as authReducers } from './auth/auth-slice';
import contactsReducers from './contacts/contacts-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
// };

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducers),
    // contacts: persistReducer(contactsPersistConfig, contactsReducers),
    contacts: contactsReducers,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, contactsReducers),
//     auth: authSlice,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     phonebookApi.middleware,
//   ],
// });
