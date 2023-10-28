import { useEffect, useState } from 'react'
import { RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from '../game/gameSlice'
import { useComponentByType } from '../game/getGameComponent'

type Colors = 'bg-yellowdark' | 'bg-pink-400' | 'bg-slate-300'

const playerColors: Record<string, Colors> = {
  defaultColor: 'bg-slate-300',
  a: 'bg-yellowdark',
  b: 'bg-pink-400',
} as const

export const Streiten = () => {
  const { step } = useSelector((state: RootState) => state.game)
  const [colorChange, setColorChange] = useState(playerColors[step.mainPlayer])
  const dispatch = useDispatch()

  useEffect(() => {
    setColorChange(playerColors[step.mainPlayer])
  }, [colorChange, step.mainPlayer])

  const GameComponent = useComponentByType(step.component)

  const handleSomething = () => {
    dispatch(nextStep())
  }

  return (
    <div className={colorChange}>
      <p>Hello I am Streiten layout</p>
      <GameComponent handleNext={handleSomething} />
    </div>
  )
}
