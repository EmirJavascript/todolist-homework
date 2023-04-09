import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  form: {
    text: '',
    deadline: ''
  }
}

export const todoFormSlice = createSlice({
  name: 'todoForm',
  initialState,
  reducers: {
    changeField: (state, actions) => {
      state.form = {
        ...state.form,
        [actions.payload.name]: actions.payload.value,
      }
    },
    resetForm: (state) => {
      state.form = initialState.form
    }
  }
})

export const todoFormActions = todoFormSlice.actions

export default todoFormSlice.reducer