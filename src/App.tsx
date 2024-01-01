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
import { NavigationBar } from './layouts/NavigationBar'
import { BreakRoom } from './components/BreakRoom'
import { Test } from './pages/Test'

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
    <Route path="/test" element={<Test />} />,
    <Route path="/streiten" element={<WithNavigationHandling />}>
      <Route path="" element={<Streiten />} />,
    </Route>,
    <Route path="pause" element={<BreakRoom />} />,
  ])
)

function App() {
  return (
    <React.StrictMode>
      <div className="w-full h-screen flex flex-col justify-between overflow-hidden items-center text-center p-4">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  )
}

export default App
