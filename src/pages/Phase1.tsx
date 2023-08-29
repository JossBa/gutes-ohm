import { useOutletContext } from 'react-router-dom'
import { RootState } from '../app/store'
import { useSelector } from 'react-redux'

export const Phase1 = () => {
  const { trigger } = useOutletContext() as { trigger: () => void | undefined }
  const { current: currentPlayer, partner: partnerPlayer } = useSelector(
    (state: RootState) => state.game
  )

  return (
    <div>
      <div>
        Hello I am Phase 1 {currentPlayer} {partnerPlayer}
      </div>

      <button className="my-4 bg-green-300" type="submit" onClick={(event) => trigger()}>
        Weiter
      </button>
    </div>
  )
}
