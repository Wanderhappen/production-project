import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { classNames } from './helpers/classNames/classNames'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'

export const App = () => {
  const { toggleTheme, theme } = useTheme()
  const bool = true
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={'/about'}
            element={<AboutPageAsync />}
          />
          <Route
            path={'/'}
            element={<MainPageAsync />}
          />
        </Routes>
      </Suspense>
    </div>
  )
}
