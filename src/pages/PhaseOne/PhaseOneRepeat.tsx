import { GameStepProps } from './../types'
import { useTimer } from '../../hooks/useTimer'
import { PhaseContent } from '../../components/PhaseContent'
import { AnimatedSlope } from '../../components/AnimatedSlope'
import { usePlayers } from '../../hooks/usePlayers'

export const PhaseOneRepeat = ({ handleNext }: GameStepProps) => {
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()
  const { handleStart, time, started, counting } = useTimer(60)

  return (
    <>
      <AnimatedSlope animate={started} animationDuration={60} />
      <PhaseContent
        section="Phase 1/3"
        activePlayer={activePlayer}
        currentPlayer={currentPlayer}
        partnerPlayer={partnerPlayer}
        time={time}
        started={started}
        counting={counting}
        handleStart={handleStart}
        handleNext={handleNext}
        buttonTitle="Weiter"
        activePlayerInstructions={`${currentPlayer}, in 60 Sekunden: Wie beschreibt ${partnerPlayer} den Konflikt?`}
        partnerPlayerInstructions={`${partnerPlayer}, Michael, deine Aufgabe ist es, aktiv zuzuhören und nicht zu reden.`}
      />
    </>
  )
}
