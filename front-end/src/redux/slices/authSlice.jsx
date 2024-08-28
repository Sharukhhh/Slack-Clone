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
            localStorage.removeItem('slackUserToken');
            state.userCreds = null;
        },

        updateStateUserName: (state , action) => {
            if(state.userCreds && state.userCreds.name) {
                state.userCreds.name = action.payload;
            }
        }
    }
});

export const {setUserCred , removeCred , updateStateUserName} = authSlice.actions
export default authSlice.reducer;