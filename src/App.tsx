import React, { useEffect } from 'react'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from 'react-router-dom'

import { Home } from './pages/Home'
import { Streiten } from './layouts/Streiten'
import { Onboarding } from './pages/Onboarding'
import { Names } from './pages/Names'
import { NavigationBar } from './layouts/NavigationBar'

const withStreitenNavigationHandling =
  <P extends Record<string, unknown>>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    const navigate = useNavigate()
    useEffect(() => {
      const handleNavigation = (event: PopStateEvent) => {
        event.preventDefault()
        const stopGame = window.confirm('Möchtest du den Prozess wirklich beenden?')
        if (stopGame) {
          navigate('/')
        } else {
          window.history.forward()
        }
      }
      window.addEventListener('popstate', handleNavigation)

      return () => {
        window.removeEventListener('popstate', handleNavigation)
      }
    }, [navigate])

    return <WrappedComponent {...props} />
  }

const WithNavigationHandling = withStreitenNavigationHandling(NavigationBar)

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/streiten" element={<WithNavigationHandling />}>
      <Route path="onboarding" element={<Onboarding />} />,
      <Route path="names" element={<Names />} />,
      <Route path="" element={<Streiten />} />,
    </Route>,
  ])
)

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
