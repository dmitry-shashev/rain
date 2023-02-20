import React from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '../interfaces/page'

const PostPage: Page = () => {
  const { id } = useParams()
  return <div>Some post page - {id}</div>
}

export default PostPage
