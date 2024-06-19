import { useEffect, useState } from 'react'
import { RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from '../game/gameSlice'
import { useComponentByType } from '../game/getGameComponent'

import { PageWrapper } from '../components/PageWrapper'

export const Streiten = () => {
  const { step } = useSelector((state: RootState) => state.game)

  const [colorChange, setColorChange] = useState(step.backgroundColor ?? 'LIGHT_GREY')
  const dispatch = useDispatch()

  const handleNext = () => {
    dispatch(nextStep())
  }

  useEffect(() => {
    setColorChange(step.backgroundColor ?? 'LIGHT_GREY')
  }, [step.backgroundColor])

  const GameComponent = useComponentByType(step.component)

  return (
    <PageWrapper colorChange={colorChange}>
      {/** <div className={`bg-pink-400 absolute inset-0 -z-10`}></div>*/}
      <GameComponent nextStep={handleNext} />
    </PageWrapper>
  )
}
