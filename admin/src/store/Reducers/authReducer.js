import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../api/api';

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/admin-login', info, {withCredentials: true});
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data);

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)
export const user_login = createAsyncThunk(
    'auth/user_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/user-login', info, {withCredentials: true});
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data);

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)
export const user_register = createAsyncThunk(
    'auth/user_register',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
          console.log(info)
            const { data } = await api.post('/user-register', info, {withCredentials: true});
            localStorage.setItem('accessToken', data.token)
            console.log(data)
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const authReducer = createSlice({
    name : 'auth',
    initialState: {
      successMessage: "",
      errorMessage: "",
      loader: false,
      userinfo: "",
      },
    reducers: {
      messageClear: (state, _) => {
        state.errorMessage = ""
        state.successMessage = ""
      }
    },
    extraReducers: {
       [admin_login.pending]: (state, _) =>{
        state.loader = true
       },  
       [admin_login.rejected]: (state, { payload }) => {
        state.loader = false
        state.errorMessage = payload.error
       },
       [admin_login.fulfilled]: (state, { payload }) => {
        state.loader = false
        state.successMessage = payload.message
       },
       [user_login.pending]: (state, _) =>{
        state.loader = true
       },  
       [user_login.rejected]: (state, { payload }) => {
        state.loader = false
        state.errorMessage = payload.error
       },
       [user_login.fulfilled]: (state, { payload }) => {
        state.loader = false
        state.successMessage = payload.message
       },
       [user_register.pending]: (state, _) =>{
        state.loader = true
       },  
       [user_register.rejected]: (state, { payload }) => {
        state.loader = false
        state.errorMessage = payload.error
       },
       [user_register.fulfilled]: (state, { payload }) => {
        state.loader = false
        state.successMessage = payload.message
       },
          
          
      },  
})
export const {messageClear} = authReducer.actions
export default authReducer.reducer