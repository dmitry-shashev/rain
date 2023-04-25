import React, { FC, useEffect } from 'react'
import { Link, Outlet, useOutlet } from 'react-router-dom'
import { PageProps } from '../../interfaces/page'
import {
  setCurrentUser,
  useAuthControllerGetCurrentUserQuery,
} from '@rain/store'
import { useDispatch } from 'react-redux'

const MainLayout: FC = () => {
  const context = useOutlet()
  const dispatch = useDispatch()

  const pageProps: PageProps | undefined =
    context?.props.children.props.children.props
  document.title = pageProps?.title ?? ''

  // - try to load user
  const {
    data: userData,
    isFetching,
    isSuccess,
  } = useAuthControllerGetCurrentUserQuery()
  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(userData))
    }
  }, [isFetching, isSuccess])
  // -

  if (isFetching) {
    return <div>Loading ...</div>
  }

  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <main>
        <Outlet />
      </main>

      <footer>Some Footer</footer>
    </div>
  )
}

export default MainLayout
