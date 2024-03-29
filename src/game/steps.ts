import { create } from 'domain'
import { GameComponentType } from './getGameComponent'

export type Player = 'player1' | 'player2'
export type Colors = 'YELLOW' | 'BLUE' | 'LIGHT_GREY' | 'GRADIENT'

export type GameStep = {
  component: GameComponentType
  backgroundColor?: Colors
  activePlayer?: Player
}

const createGameStep = (
  component: GameComponentType,
  activePlayer?: Player,
  backgroundColor: Colors = 'LIGHT_GREY'
): GameStep => ({
  component,
  activePlayer,
  backgroundColor,
})

export const stepsInGameConfiguration: GameStep[] = [
  createGameStep('PhaseThreeSolutions', 'player1'),

  createGameStep('Onboarding'),
  createGameStep('Names'),
  createGameStep('Consent', 'player1', 'YELLOW'),
  createGameStep('Consent', 'player2', 'BLUE'),
  // Phase 1
  createGameStep('PhaseOneIntro'),
  createGameStep('PhaseOneExplain', 'player1', 'YELLOW'),
  createGameStep('PhaseOneRepeat', 'player2', 'BLUE'),
  createGameStep('PhaseOneConfirm', 'player1', 'YELLOW'),
  createGameStep('PhaseOneExplain', 'player2', 'BLUE'),
  createGameStep('PhaseOneRepeat', 'player1', 'YELLOW'),
  createGameStep('PhaseOneConfirm', 'player2', 'BLUE'),
  createGameStep('PhaseOneComplete', undefined, 'GRADIENT'),
  createGameStep('PhaseOneMoodcheck', 'player1', 'YELLOW'),
  createGameStep('PhaseOneMoodcheck', 'player2', 'BLUE'),
  createGameStep('PhaseOneFinale'),
  // Phase 2
  createGameStep('PhaseTwoIntro'),
  createGameStep('PhaseTwoSentences', 'player2', 'BLUE'),
  createGameStep('PhaseTwoCheck', 'player1'),
  createGameStep('PhaseTwoSentences', 'player1', 'YELLOW'),
  createGameStep('PhaseTwoComplete', undefined, 'GRADIENT'),
  createGameStep('PhaseTwoMoodcheck', 'player2', 'BLUE'),
  createGameStep('PhaseTwoMoodcheck', 'player1', 'YELLOW'),
  // Phase 3
  createGameStep('PhaseThreeIntro'),
  createGameStep('PhaseThreeOptions', 'player1', 'YELLOW'),
  createGameStep('PhaseThreeConfirm', 'player2', 'BLUE'),
  createGameStep('PhaseThreeAdd', 'player2', 'BLUE'),
  createGameStep('PhaseThreeSolutions', 'player2'),
  createGameStep('PhaseThreeOptions', 'player2', 'BLUE'),
  createGameStep('PhaseThreeConfirm', 'player1', 'YELLOW'),
  createGameStep('PhaseThreeAdd', 'player1', 'YELLOW'),
  createGameStep('PhaseThreeSolutions', 'player1'),
  // Final Solutions
  createGameStep('PhaseThreeSelectSolutions'),
  createGameStep('PhaseThreeComplete', undefined, 'GRADIENT'),

  createGameStep('FinaleMoodcheck', 'player2', 'BLUE'),
  createGameStep('FinaleMoodcheck', 'player1', 'YELLOW'),
  createGameStep('FinalePeace'),
]

export const getStep = (id: number): GameStep => {
  return (
    stepsInGameConfiguration[id] || {
      component: 'GenericError',
      activePlayer: undefined,
    }
  )
}
