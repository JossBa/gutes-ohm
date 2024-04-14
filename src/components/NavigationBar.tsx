type NavigationBarProps = {
  handlePreviousStep: () => void
  handleBreak?: () => void
  handleExit?: () => void
  shouldOnlyShowBackButton?: boolean
  backgroundColor?: string
}

export const NavigationBar = ({
  handlePreviousStep,
  handleBreak,
  handleExit,
  shouldOnlyShowBackButton = false,
}: NavigationBarProps) => {
  return (
    <div
      className={`sticky top-0 left-0 right-0 pt-2 z-50 flex justify-between w-full bg-transparent`}
    >
      <button onClick={handlePreviousStep}>
        <img className="p-1" src="/img/back.svg" alt="back-icon" />
      </button>
      {!shouldOnlyShowBackButton && (
        <div className="flex items-end">
          <button onClick={handleBreak}>
            <img className="p-1" src="/img/pause.svg" alt="pause-icon" />
          </button>
          <button onClick={handleExit}>
            <img className="p-1" src="/img/exit.svg" alt="exit-icon" />
          </button>
        </div>
      )}
    </div>
  )
}
