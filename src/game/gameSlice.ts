import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { GameStep, getStep } from './steps'

export interface GameState {
  playerA: string
  playerB: string
  step: GameStep
}

const initialState: GameState = {
  playerA: '',
  playerB: '',
  step: { component: 'Consent', activePlayer: 'a', next: 2 },
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    names: (state, action: PayloadAction<{ playerA: string; playerB: string }>) => {
      state.playerA = action.payload.playerA
      state.playerB = action.payload.playerB
    },
    nextStep: (state) => {
      state.step = getStep(state.step.next)
    },
    clearGameState: () => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { names, nextStep, clearGameState } = gameSlice.actions

export default gameSlice.reducer
