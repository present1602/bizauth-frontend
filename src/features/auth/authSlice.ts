import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

// 'user_id': '',
// 'password': '',
// 'phone': '',
// 'name': '',
// 'user_type': '',
// 'email': '',

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload
      state.token = accessToken
    },
    logout: (state, action) => {
      state.token = null
    }
  }
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state: RootState) => state.auth.token
