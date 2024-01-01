import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { GameStep, getStep, stepsInGameConfiguration } from './steps'
import { useNavigate } from 'react-router-dom'

export interface GameState {
  playerA: string
  playerB: string
  step: GameStep
  currentStepId: number
}

const initialState: GameState = {
  playerA: '',
  playerB: '',
  step: getStep(0),
  currentStepId: 0,
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
    clearGameState: () => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { names, nextStep, previousStep, toStep, clearGameState } = gameSlice.actions

export default gameSlice.reducer
