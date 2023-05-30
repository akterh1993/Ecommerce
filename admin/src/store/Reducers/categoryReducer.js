import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../api/api';

export const categoryAdd = createAsyncThunk(
    'category/categoryAdd',
    async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const formData = new FormData()
            formData.append('nama', name)
            formData.append('image', image)
            const { data } = await api.post('/category-add', formData, {withCredentials: true});
            console.log(data)
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)


export const get_category = createAsyncThunk(
    'category/get_category',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get('/get-category', {withCredentials: true});
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const categoryReducer = createSlice({
    name : 'category',
    initialState: {
      successMessage: '',
      errorMessage: '',
      loader: false,
      categories : []
      
      },
    reducers: {
      messageClear: (state, _) => {
        state.errorMessage = ""
        state.successMessage = ""
        
      }
    },
    extraReducers: {
       [categoryAdd.pending]: (state, _) =>{
        state.loader = true
       },  
       [categoryAdd.rejected]: (state, { payload }) => {
        state.loader = false
        state.errorMessage = payload.error
       },
       [categoryAdd.fulfilled]: (state, { payload }) => {
        state.loader = false
        state.successMessage = payload.message
        state.categories = [...state.categories, payload.category]
       },
       [get_category.fulfilled]: (state, { payload }) => {
        state.loader = false
        state.categories = payload.categories
       },
          
      },  
})
export const {messageClear} = categoryReducer.actions
export default categoryReducer.reducer