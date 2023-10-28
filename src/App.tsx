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

const withStreitenNavigationHandling =
  <P extends Record<string, unknown>>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    const navigate = useNavigate()
    useEffect(() => {
      const handleNavigation = (event: PopStateEvent) => {
        event.preventDefault()
        const stopGame = window.confirm('Are you sure you want to leave?')
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

const StreitenWithNavigationHandling = withStreitenNavigationHandling(Streiten)

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="streiten" element={<StreitenWithNavigationHandling />} />,
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
