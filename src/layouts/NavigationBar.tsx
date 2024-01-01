import { Outlet, useNavigate } from 'react-router-dom'
import { previousStep } from '../game/gameSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'

export const NavigationBar = () => {
  const { currentStepId } = useSelector((state: RootState) => state.game)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlePreviousStep = () => {
    if (currentStepId === 0) {
      navigate('/')
    } else {
      dispatch(previousStep())
    }
  }

  const handleBreak = () => {
    navigate('/pause')
  }

  return (
    <>
      <div className="absolute top-0 left-0 right-0">
        <div className="px-4 py-3 flex flex-row justify-between items-center">
          <button onClick={handlePreviousStep}>
            <img className="p-1" src="/img/back.svg" alt="back-icon" />
          </button>
          <div className="flex items-end">
            <button onClick={handleBreak}>
              <img className="p-1" src="/img/pause.svg" alt="pause-icon" />
            </button>
            <button onClick={() => navigate('/')}>
              <img className="p-1" src="/img/exit.svg" alt="exit-icon" />
            </button>
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
