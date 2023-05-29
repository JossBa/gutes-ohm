import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './pages/Error'
import { ErrorBoundary } from './pages/ErrorBoundary'

import { Home } from './pages/Home'
import { Streiten } from './pages/Streiten'
import { Streiten2 } from './pages/Streiten-2'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/streiten',
    element: <Streiten />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/streiten2',
    element: <Streiten2 />,
  },
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
