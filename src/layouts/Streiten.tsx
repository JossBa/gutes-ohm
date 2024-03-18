import { useEffect, useState } from 'react'
import { RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from '../game/gameSlice'
import { useComponentByType } from '../game/getGameComponent'
import { Colors } from '../game/steps'
import { NavigationBar } from '../components/NavigationBar'
import { useNavigate } from 'react-router-dom'
import { previousStep } from '../game/gameSlice'
import { PageWrapper } from '../components/PageWrapper'

const playerColors: Record<Colors, string> = {
  LIGHT_GREY: 'bg-background',
  YELLOW: 'bg-yellowlight',
  BLUE: 'bg-bluelight',
  GRADIENT: 'bg-gradient-to-b from-yellowlight to-bluelight',
} as const

export const Streiten = () => {
  const { step, currentStepId } = useSelector((state: RootState) => state.game)

  const [colorChange, setColorChange] = useState(playerColors[step.backgroundColor ?? 'LIGHT_GREY'])
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

  const handleExit = () => {
    navigate('/')
  }

  const handleNext = () => {
    dispatch(nextStep())
  }

  useEffect(() => {
    console.log('step.backgroundColor', step.backgroundColor)
    setColorChange(playerColors[step.backgroundColor ?? 'LIGHT_GREY'])
  }, [step.backgroundColor])

  const GameComponent = useComponentByType(step.component)

  return (
    <PageWrapper>
      <div className={`${colorChange} absolute inset-0 -z-10`}></div>
      <NavigationBar
        handlePreviousStep={handlePreviousStep}
        handleBreak={handleBreak}
        handleExit={handleExit}
      />
      <GameComponent nextStep={handleNext} />
    </PageWrapper>
  )
}
