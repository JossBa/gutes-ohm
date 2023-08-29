import React, { useEffect } from 'react'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from 'react-router-dom'

import { Home } from './pages/Home'
import { Onboarding } from './pages/Onboarding'
import { Names } from './pages/Names'
import { Consent } from './pages/Consent'
import { Phase1 } from './pages/Phase1'
import { Streiten } from './layouts/Streiten'

const withStreitenNavigationHandling =
  <P extends Record<string, unknown>>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    const navigate = useNavigate()
    useEffect(() => {
      const handleNavigation = (event: PopStateEvent) => {
        // event.preventDefault()
        console.log(event, window.location.pathname)
        if (window.location.pathname === '/') {
          console.log('I am here')
          navigate('/', { replace: true })
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
    <Route path="streiten" element={<StreitenWithNavigationHandling />}>
      <Route path="onboarding-intro" element={<Onboarding />} />,
      <Route path="onboarding-names" element={<Names />} />,
      <Route path="consent" element={<Consent />} />
      <Route path="phase-1" element={<Phase1 />} />
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
