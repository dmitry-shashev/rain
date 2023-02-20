import React, { FC } from 'react'
import { Link, Outlet, useOutlet } from 'react-router-dom'
import { PageProps } from '../interfaces/page'

const MainLayout: FC = () => {
  const context = useOutlet()

  const pageProps: PageProps | undefined =
    context?.props.children.props.children.props
  document.title = pageProps?.title ?? ''

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
