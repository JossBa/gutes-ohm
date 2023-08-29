import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { GameStep, getStep, getNextRoute } from './steps'

const getCurrentStep = (indexOfRoute: number): GameStep => {
  const step = getStep(indexOfRoute)
  if (!step) {
    indexOfRoute = 0
    return { route: '', mainPlayer: '', partnerPlayer: 'b' }
  }
  return step
}

interface Player {
  name: string
  consent: boolean
}

export interface CounterState {
  index: number
  playerA: Player
  playerB: Player
  step: GameStep
  current: string
  partner: string
  nextRoute: string
}

const initialState: CounterState = {
  index: 0,
  playerA: {
    name: '',
    consent: false,
  },
  playerB: {
    name: '',
    consent: false,
  },
  current: '',
  partner: '',
  step: getCurrentStep(0),
  nextRoute: getNextRoute(0) ?? '',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    names: (state, action: PayloadAction<{ playerA: string; playerB: string }>) => {
      state.playerA.name = action.payload.playerA
      state.playerB.name = action.payload.playerB
    },
    nextStep: (state) => {
      state.index += 1
      state.step = getCurrentStep(state.index)
      state.nextRoute = getNextRoute(state.index) ?? '/'
      state.current = state.step.mainPlayer === 'a' ? state.playerA.name : state.playerB.name
      state.partner = state.step.partnerPlayer === 'a' ? state.playerA.name : state.playerB.name

      console.log('Next Step: ', {
        index: state.index,
        currentRoute: state.step.route,
        nextRoute: state.nextRoute,
      })
    },
    clearGameState: (state) => {
      console.log('Clear: ', {
        index: state.index,
        currentRoute: state.step.route,
        nextRoute: state.nextRoute,
      })
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { names, nextStep, clearGameState } = counterSlice.actions

export default counterSlice.reducer
