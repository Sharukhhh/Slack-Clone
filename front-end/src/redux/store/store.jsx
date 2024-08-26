import {configureStore} from '@reduxjs/toolkit';
import { userAuthApi } from '../services/userAuthService';
import authReducer from '../slices/authSlice';
import {persistReducer , persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const slackAuthPersistConfig = {
    key: 'slack_auth',
    storage
}

const persistedSlackAuthReducer = persistReducer(slackAuthPersistConfig , authReducer);

export const store = configureStore({
    reducer: {
        slack_auth: persistedSlackAuthReducer,
        [userAuthApi.reducerPath]: userAuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware),
    devTools: true
    
});

export const persistor = persistStore(store);
