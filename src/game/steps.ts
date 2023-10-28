import { GameComponentType } from './getGameComponent'

export type GameStep = {
  component: GameComponentType
  activePlayer?: 'a' | 'b'
  next: number
}

const stepsInGameConfiguration = new Map<number, GameStep>([
  [1, { component: 'Consent', activePlayer: 'a', next: 2 }],
  [2, { component: 'Consent', activePlayer: 'b', next: 3 }],
  [3, { component: 'Consent', activePlayer: 'a', next: 3 }],
  [4, { component: 'PhasenIntro', next: 1 }],
])

export const getStep = (id: number): GameStep => {
  return (
    stepsInGameConfiguration.get(id) ?? { component: 'Consent', activePlayer: undefined, next: 0 }
  )
}
