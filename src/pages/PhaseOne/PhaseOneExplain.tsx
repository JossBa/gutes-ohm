import { GameStepProps } from './../types'
import { useTimer } from '../../hooks/useTimer'
import { PhaseContent } from '../../components/PhaseContent'
import { AnimatedSlope } from '../../components/AnimatedSlope'
import { usePlayers } from '../../hooks/usePlayers'

export const PhaseOneExplain = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()
  const { handleStart, time, counting, started } = useTimer(180)

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
        nextStep={nextStep}
        buttonTitle={started ? (counting ? 'Bin schon fertig' : 'Weiter') : 'Start'}
        activePlayerInstructions={`Hey, ${currentPlayer}! Teile ${partnerPlayer} in 3 Minuten deine Sicht auf den Konflikt mit.`}
        partnerPlayerInstructions={`${partnerPlayer}, deine Aufgabe ist es, aktiv zuzuhören und nicht zu reden.`}
      />
    </>
  )
}
