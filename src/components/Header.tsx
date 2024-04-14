import { RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { previousStep } from '../game/gameSlice'
interface IHeader {
  title: string
  section: string
  shouldOnlyShowBackButton?: boolean
  handlePrevious?: () => void
}
export const Header = ({ title, section, shouldOnlyShowBackButton, handlePrevious }: IHeader) => {
  const { currentStepId } = useSelector((state: RootState) => state.game)
  const navigate = useNavigate()
  const dispatch = useDispatch()

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

  const handleExit = () => {
    navigate('/')
  }
  return (
    <div
      id="navigation-bar"
      className={`sticky top-0 left-0 right-0 pt-2 z-50 flex flex-col justify-between w-full bg-transparent`}
    >
      <div className="flex justify-between w-full">
        <button onClick={handlePrevious ? handlePrevious : handlePreviousStep}>
          <img className="p-1" src="/img/back.svg" alt="back-icon" />
        </button>
        {!shouldOnlyShowBackButton && (
          <div className="flex items-end">
            <button onClick={handleBreak}>
              <img className="p-1" src="/img/pause.svg" alt="pause-icon" />
            </button>
            <button onClick={handleExit}>
              <img className="p-1" src="/img/exit.svg" alt="exit-icon" />
            </button>
          </div>
        )}
      </div>
      <div className="w-full sticky pb-2 mb-2 top-14 bg-inherit">
        <h2 className="font-josefin text-sm text-center font-semibold uppercase">{section}</h2>
        <h1 className="font-josefin text-2xl text-center font-bold uppercase leading-normal">
          {title}
        </h1>
        <hr className="my-1 mx-auto border-anthrazit" />
      </div>
    </div>
  )
}
