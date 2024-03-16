import { Player } from '../game/steps'

type IconStyle = 'full' | 'outline'

export const PlayerIcon = ({
  player,
  display = 'full',
}: {
  player?: Player
  display?: IconStyle
}) => {
  return (
    <>
      {player === 'player1' ? (
        <img src={`img/quadrat-${display}.svg`} alt="player1 symbol" className="inline" />
      ) : player === 'player2' ? (
        <img src={`img/dreieck-${display}.svg`} alt="player2 symbol" className="inline" />
      ) : null}
    </>
  )
}
