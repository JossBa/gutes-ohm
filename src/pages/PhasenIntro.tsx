import { RootState } from '../app/store'
import { useSelector } from 'react-redux'
import { GameStepProps } from './types'

export const PhasenIntro = ({ handleNext }: GameStepProps) => {
  const {
    step: { activePlayer },
  } = useSelector((state: RootState) => state.game)

  return (
    <div>
      <div>Hello I am Phase 1 activePlayer: {activePlayer}</div>
      <button onClick={handleNext}>WEITER</button>
    </div>
  )
}
