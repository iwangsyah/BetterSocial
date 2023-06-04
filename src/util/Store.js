import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root2',
  storage: AsyncStorage,
  whitelist: ['feed']
};
const finalReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: finalReducer,
});

export const persistor = persistStore(store);

