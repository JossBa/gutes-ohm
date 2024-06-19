type InputLabelProps = {
  player: 'player1' | 'player2'
  playerName: string
  setPlayer: (player: string) => void
  isError: boolean
  setError: (error: boolean) => void
  scrollToTop: () => void
}

const playerSettings = {
  player1: {
    iconPrimary: 'bg-quadrat-full',
    placeholder: 'Erste Partei',
    color: 'bg-yellowlight',
    focus: 'focus:ring-yellowdark',
  },
  player2: {
    iconPrimary: 'bg-dreieck-full',
    placeholder: 'Zweite Partei',
    color: 'bg-bluelight',
    focus: 'focus:ring-bluedark',
  },
}

export const InputLabel = ({
  player,
  playerName,
  setPlayer,
  isError,
  setError,
  scrollToTop,
}: InputLabelProps) => {
  const { color, iconPrimary, placeholder, focus } = playerSettings[player]
  return (
    <label>
      <input
        className={`${color} w-64 h-14 p-4 m-2 border-none placeholder-opacity-75 placeholder-greymedium font-transat font-semibold text-l uppercase focus:outline-none focus:ring ${focus} bg-no-repeat bg-right bg-origin-content ${iconPrimary}`}
        type="text"
        name={player}
        required
        placeholder={placeholder}
        value={playerName}
        onChange={(e) => {
          setPlayer(e.target.value)
        }}
        onFocus={() => {
          setError(false)
        }}
        onBlur={scrollToTop}
        autoComplete="off"
      />
      {isError && (
        <p className="animate-shake animate-once text-red-600 text-base mb-2 pl-2">
          Bitte gib hier einen Namen ein.
        </p>
      )}
    </label>
  )
}
