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
  backgroundColor,
  activePlayer,
})

export const stepsInGameConfiguration: GameStep[] = [
  createGameStep('Onboarding'),
  createGameStep('Names'),
  createGameStep('Consent', 'player1', 'YELLOW'),
  createGameStep('Consent', 'player2', 'BLUE'),
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
]

export const getStep = (id: number): GameStep => {
  return (
    stepsInGameConfiguration[id] || {
      component: 'GenericError',
      activePlayer: undefined,
    }
  )
}
