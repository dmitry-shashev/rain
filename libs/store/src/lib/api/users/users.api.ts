import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { UsersListDto } from '@rain/dto'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/api/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersListDto, void>({
      query: () => 'users',
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
