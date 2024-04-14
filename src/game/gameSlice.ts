import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { GameStep, Player, getStep, stepsInGameConfiguration } from './steps'

export interface GameState {
  playerA: string
  playerB: string
  step: GameStep
  currentStepId: number
  solutionsPlayerA: string[]
  solutionsPlayerB: string[]
  selectedSolutions: string[]
}

const initialState: GameState = {
  playerA: 'Nimet',
  playerB: 'Josephine',
  step: getStep(22),
  currentStepId: 22,
  solutionsPlayerA: [],
  solutionsPlayerB: [],
  selectedSolutions: [],
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
      state.currentStepId = (state.currentStepId + 1) % stepsInGameConfiguration.length
      state.step = stepsInGameConfiguration[state.currentStepId]
    },
    toStep: (state, action: PayloadAction<{ stepId: number }>) => {
      state.currentStepId = action.payload.stepId
      state.step = stepsInGameConfiguration[state.currentStepId]
    },
    previousStep: (state) => {
      if (state.currentStepId > 0) {
        state.currentStepId = state.currentStepId - 1
      }
      state.step = stepsInGameConfiguration[state.currentStepId]
    },
    solutions: (state, action: PayloadAction<{ player?: Player; solutions: string[] }>) => {
      state.solutionsPlayerA =
        action.payload.player === 'player1' ? action.payload.solutions : state.solutionsPlayerA
      state.solutionsPlayerB =
        action.payload.player === 'player2' ? action.payload.solutions : state.solutionsPlayerB
    },
    selectSolutions: (state, action: PayloadAction<string[]>) => {
      state.selectedSolutions = action.payload
    },
    clearGameState: () => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { names, nextStep, previousStep, toStep, clearGameState, solutions, selectSolutions } =
  gameSlice.actions

export default gameSlice.reducer
