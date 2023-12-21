import { GameStepProps } from './../types'
import { useTimer } from '../../hooks/useTimer'
import { PhaseContent } from '../../components/PhaseContent'
import { AnimatedSlope } from '../../components/AnimatedSlope'
import { usePlayers } from '../../hooks/usePlayers'

export const PhaseOneExplain = ({ handleNext }: GameStepProps) => {
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()
  const { handleStart, time, started, counting } = useTimer(180)

  return (
    <>
      <AnimatedSlope animate={started} animationDuration={180} />
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
        activePlayerInstructions={`Hey, ${currentPlayer}! Teile ${partnerPlayer} in drei Minuten deine Sicht auf den Konflikt mit.`}
        partnerPlayerInstructions={`${partnerPlayer}, deine Aufgabe ist es, aktiv zuzuhören und nicht zu reden.`}
      />
    </>
  )
}
