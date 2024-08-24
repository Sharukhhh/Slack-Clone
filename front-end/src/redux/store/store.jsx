import {configureStore} from '@reduxjs/toolkit';
import { userAuthApi } from '../services/userAuthService';
import authReducer from '../slices/authSlice'


export const store = configureStore({
    reducer: {
        slack_auth: authReducer,
        [userAuthApi.reducerPath]: userAuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware),
    devTools: true
    
});
