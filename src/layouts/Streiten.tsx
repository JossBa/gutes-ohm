import { useEffect, useState } from 'react'
import { RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from '../game/gameSlice'
import { useComponentByType } from '../game/getGameComponent'
import { Colors } from '../game/steps'

const playerColors: Record<Colors, string> = {
  LIGHT_GREY: 'bg-background',
  YELLOW: 'bg-yellowlight',
  BLUE: 'bg-bluelight',
  GRADIENT: 'bg-gradient-to-b from-yellowlight to-bluelight',
} as const

export const Streiten = () => {
  const { step } = useSelector((state: RootState) => state.game)
  const [colorChange, setColorChange] = useState(playerColors[step.backgroundColor ?? 'LIGHT_GREY'])
  const dispatch = useDispatch()

  useEffect(() => {
    setColorChange(playerColors[step.backgroundColor ?? 'LIGHT_GREY'])
  }, [step.backgroundColor])

  const GameComponent = useComponentByType(step.component)

  const handleNext = () => {
    dispatch(nextStep())
  }

  return (
    <>
      <div className={`${colorChange} h-screen w-full absolute -z-10`}>
        <GameComponent nextStep={handleNext} />
      </div>
    </>
  )
}
