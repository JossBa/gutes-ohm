type InputLabelProps = {
  playerIcon: string
  playerName: string
  setPlayer: (player: string) => void
  error: boolean
  setError: (error: boolean) => void
  placeholder: string
  inputName: string
}

export const InputLabel = ({
  placeholder,
  inputName,
  playerIcon,
  playerName,
  setPlayer,
  error,
  setError,
}: InputLabelProps) => {
  return (
    <label>
      <input
        className={`w-64 h-14 p-4 m-2 bg-yellowlight border-none placeholder-opacity-75 placeholder-greymedium font-transat font-semibold text-l uppercase focus:outline-none focus:ring focus:ring-yellowdark bg-no-repeat bg-right bg-origin-content ${playerIcon}`}
        type="text"
        name={inputName}
        required
        placeholder={placeholder}
        value={playerName}
        onChange={(e) => {
          setPlayer(e.target.value)
        }}
        onFocus={() => {
          setError(false)
        }}
        autoComplete="off"
      />
      {error && (
        <p className="animate-shake animate-once text-red-600 font-medium text-base mb-2 pl-2">
          Bitte gib hier einen Namen ein.
        </p>
      )}
    </label>
  )
}
