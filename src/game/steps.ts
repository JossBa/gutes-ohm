import { GameComponentType } from './getGameComponent'

export type GameStep = {
  component: GameComponentType
  activePlayer?: 'a' | 'b'
  next: number
}

const stepsInGameConfiguration = new Map<number, GameStep>([
  [0, { component: 'Consent', activePlayer: 'a', next: 1 }],
  [1, { component: 'Consent', activePlayer: 'b', next: 2 }],
  [2, { component: 'PhaseOneIntro', next: 3 }],
  [3, { component: 'PhaseOneExplain', activePlayer: 'a', next: 4 }],
  [4, { component: 'PhaseOneRepeat', activePlayer: 'b', next: 5 }],
  [5, { component: 'PhaseOneExplain', activePlayer: 'b', next: 6 }],
  [6, { component: 'PhaseOneRepeat', activePlayer: 'a', next: 1 }],
])

export const getStep = (id: number): GameStep => {
  return (
    stepsInGameConfiguration.get(id) ?? {
      component: 'GenericError',
      activePlayer: undefined,
      next: -1,
    }
  )
}
