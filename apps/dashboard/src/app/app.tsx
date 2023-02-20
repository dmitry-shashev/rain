import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import NotFoundPage from '../pages/NotFoundPage'
import MainLayout from '../layouts/MainLayout'
import PostPage from '../pages/PostPage'
import SearchPage from '../pages/SearchPage'
import { PagePath } from '../constants/page-path'

const App: FC = () => {
  return (
    <Routes>
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
