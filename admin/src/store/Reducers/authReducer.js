import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../api/api';
import jwt from 'jwt-decode'

export const admin_register = createAsyncThunk(
    'auth/admin_register',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
          console.log(info)
            const { data } = await api.post('/admin-register', info, {withCredentials: true});
            localStorage.setItem('accessToken', data.token)
            console.log(data)
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

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
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)
export const get_user_info = createAsyncThunk(
    'auth/get_user_info',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get('/user-info', {withCredentials: true});
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)
export const get_user_info = createAsyncThunk(
    'auth/get_user_info',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get('/get-user', {withCredentials: true});
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const returnRole =(token) =>{
    if (token) {
        const decodeToken = jwt(token)
        const expireTime = new Date(decodeToken.exp * 1000)
        if (new Date()>expireTime) {
            localStorage.removeItem('accessToken')
        } else {
            return decodeToken.role
        }
        console.log(decodeToken)
    } else {
        return ''
    }
}

const returnRole = (token) =>{
    if (token) {
        console.log(token)
    } else {
        return ''
    }
}

export const authReducer = createSlice({
    name : 'auth',
    initialState: {
      successMessage: '',
      errorMessage: '',
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
       [admin_register.pending]: (state, _) =>{
        state.loader = true
       },  
       [admin_register.rejected]: (state, { payload }) => {
        state.loader = false
        state.errorMessage = payload.error
       },
       [admin_register.fulfilled]: (state, { payload }) => {
        state.loader = false
        state.successMessage = payload.message
        state.token = payload.token
        state.role = returnRole(payload.token)
       },
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
        state.token = payload.token
        state.role = returnRole(payload.token)
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
        state.token = payload.token
        state.role = returnRole(payload.token)
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