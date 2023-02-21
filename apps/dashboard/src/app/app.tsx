import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import NotFoundPage from '../pages/NotFoundPage'
import PostPage from '../pages/PostPage'
import SearchPage from '../pages/SearchPage'
import { PagePath } from '../constants/page-path'
import LoginLayout from '../layouts/LoginLayout/LoginLayout'
import MainLayout from '../layouts/MainLayout/MainLayout'
import LoginPage from '../pages/LoginPage'

const App: FC = () => {
  return (
    <Routes>
      <Route path="auth" element={<LoginLayout />}>
        <Route path={PagePath.LOGIN} element={<LoginPage />} />
      </Route>

      <Route path={PagePath.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={PagePath.SEARCH} element={<SearchPage />} />
        <Route
          path={PagePath.ABOUT}
          element={<AboutPage title="Some About us page" />}
        />
        <Route path={PagePath.POST} element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
