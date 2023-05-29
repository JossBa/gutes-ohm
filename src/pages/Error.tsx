import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, diese Seite konnte nicht gefunden werden.</p>
        <i>
          {error.status} {error.statusText}
        </i>
      </div>
    )
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  )
}
