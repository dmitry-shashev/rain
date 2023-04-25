import React from 'react'
import { Page } from '../interfaces/page'
import { useUsersControllerFindAllQuery } from '@rain/store'

const HomePage: Page = () => {
  const { data, isLoading } = useUsersControllerFindAllQuery()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <ul>
      {data?.users.map((v) => (
        <div key={v.email}>
          {v.name} - {v.email}
        </div>
      ))}
    </ul>
  )
}

export default HomePage
