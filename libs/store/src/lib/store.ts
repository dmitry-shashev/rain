import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './api/users/users.api'

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppStore = typeof store
