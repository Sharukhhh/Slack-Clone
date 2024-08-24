import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    userCreds: null
};

const authSlice = createSlice({
    name: 'slack_auth',
    initialState,
    reducers: {
        setUserCred: (state , action) => {
            state.userCreds = action.payload
        },

        removeCred: (state) => {
            state.userCreds = null;
        }
    }
});

export const {setUserCred , removeCred} = authSlice.actions
export default authSlice.reducer;