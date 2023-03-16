import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { UsersListDto } from '@rain/dto'
import { API_PARAMS } from '../api-params'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery(API_PARAMS),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersListDto, void>({
      query: () => 'users',
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
