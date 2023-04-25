import { UserDto } from '../api/auto-generated/auto-generated.api'
import {
  createSelector,
  createSlice,
  PayloadAction,
  Slice,
} from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface UserState {
  user: UserDto
}

const initialState: UserState = {
  user: {
    id: 0,
    name: '',
    email: '',
  },
}

export const userSlice: Slice<
  UserState,
  {
    setCurrentUser: (state: UserState, action: PayloadAction<UserDto>) => void
  }
> = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload
    },
  },
})

const getUserState = (rootState: RootState): UserState => rootState.userReducer

export const getUser: (rootState: RootState) => UserDto = createSelector(
  getUserState,
  (userState: UserState) => userState.user
)

export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer
