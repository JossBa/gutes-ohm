type NavigationBarProps = {
  handlePreviousStep: () => void
  handleBreak: () => void
  handleExit: () => void
}

export const NavigationBar = ({
  handlePreviousStep,
  handleBreak,
  handleExit,
}: NavigationBarProps) => {
  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="px-4 py-3 flex flex-row justify-between items-center">
        <button onClick={handlePreviousStep}>
          <img className="p-1" src="/img/back.svg" alt="back-icon" />
        </button>
        <div className="flex items-end">
          <button onClick={handleBreak}>
            <img className="p-1" src="/img/pause.svg" alt="pause-icon" />
          </button>
          <button onClick={handleExit}>
            <img className="p-1" src="/img/exit.svg" alt="exit-icon" />
          </button>
        </div>
      </div>
    </div>
  )
}
