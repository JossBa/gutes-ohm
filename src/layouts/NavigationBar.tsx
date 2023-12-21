import { Outlet } from 'react-router-dom'

export const NavigationBar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0">
        <div className="p-6 flex flex-row justify-between items-center">
          <img className="p-1" src="/img/back.svg" alt="back-icon" />
          <div className="flex items-end">
            <img className="p-1" src="/img/pause.svg" alt="pause-icon" />
            <img className="p-1" src="/img/exit.svg" alt="exit-icon" />
          </div>
        </div>
      </div>
      {/* Below Outlet element will render either 
        <Onboarding> when the URL is "/streiten/onboarding", 
        <Names> at "streiten/names" or 
        <Streiten> at 'streiten'
        check nested routes here  src/App.tsx in createRoutesFromElements.
      */}
      <Outlet />
    </>
  )
}
