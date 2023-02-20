import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Page } from '../interfaces/page'

const SearchPage: Page = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <div>
      <button
        onClick={() => {
          setSearchParams({
            id: '12',
          })
        }}
      >
        Set up id = 12
      </button>
      <div>Current id - {searchParams.get('id')}</div>
    </div>
  )
}

export default SearchPage
