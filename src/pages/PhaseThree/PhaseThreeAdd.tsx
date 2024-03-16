import { GameStepProps } from './../types'
import { useTimer } from '../../hooks/useTimer'
import { PhaseContent } from '../../components/PhaseContent'
import { AnimatedSlope } from '../../components/AnimatedSlope'
import { usePlayers } from '../../hooks/usePlayers'

export const PhaseThreeAdd = ({ nextStep }: GameStepProps) => {
  const PHASE_DURATION = 120
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()
  const { handleStart, time, counting, started } = useTimer(PHASE_DURATION)

  return (
    <>
      <AnimatedSlope animate={started} animationDuration={PHASE_DURATION} />
      <PhaseContent
        section="Phase 3/3"
        activePlayer={activePlayer}
        currentPlayer={currentPlayer}
        partnerPlayer={partnerPlayer}
        time={time}
        started={started}
        counting={counting}
        handleStart={handleStart}
        nextStep={nextStep}
        buttonTitle={started ? 'Weiter' : 'Start'}
        activePlayerInstructions={`${currentPlayer}, jetzt kannst Du Deine eigenen Ideen oder Wünsche ergänzen. Du hast 1 Minute Zeit.`}
      />
    </>
  )
}
