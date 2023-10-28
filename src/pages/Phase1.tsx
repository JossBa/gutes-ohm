import { RootState } from '../app/store'
import { useSelector } from 'react-redux'
import { GameStepProps } from './types'

export const Phase1 = ({ handleNext }: GameStepProps) => {
  //  const { trigger } = useOutletContext() as { trigger: () => void | undefined }
  const { current: currentPlayer, partner: partnerPlayer } = useSelector(
    (state: RootState) => state.game
  )

  return (
    <div>
      <div>
        Hello I am Phase 1 {currentPlayer} {partnerPlayer}
      </div>
      <button onClick={handleNext}>WEITER</button>
    </div>
  )
}
