import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { GameStep, Player, getStep, stepsInGameConfiguration } from './steps'

export type Solution = {
  id: string
  player: Player
  solution: string
}
export interface GameState {
  playerA: string
  playerB: string
  step: GameStep
  currentStepId: number
  allSolutions: Solution[]
  selectSolutions: Solution[]
}

const initialState: GameState = {
  playerA: '',
  playerB: '',
  step: getStep(0),
  currentStepId: 0,
  allSolutions: [],
  selectSolutions: [],
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
    solutions: (state, action: PayloadAction<{ solutions: Solution[] }>) => {
      state.allSolutions = action.payload.solutions
      console.log('allSolutions', state.allSolutions)
    },
    selectSolutions: (state, action: PayloadAction<Solution[]>) => {
      state.selectSolutions = action.payload
      console.log('selectSolutions', state.selectSolutions)
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
