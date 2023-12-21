export const PlayerIcon = ({
  player,
  display = 'full',
}: {
  player: 'a' | 'b' | undefined
  display?: 'full' | 'outline'
}) => {
  return (
    <img
      src={`${player === 'a' ? `img/quadrat-${display}.svg` : `img/dreieck-${display}.svg`} `}
      alt="player symbol"
    />
  )
}
