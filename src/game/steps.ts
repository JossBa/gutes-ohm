import { GameComponentType } from './getGameComponent'

export type GameStep = {
  route: string
  component: GameComponentType
  mainPlayer: string
  partnerPlayer: string
}

const stepsInGameConfiguration: GameStep[] = [
  {
    route: '/',
    component: 'Home',
    mainPlayer: 'defaultColor',
    partnerPlayer: 'b',
  },
  {
    route: 'streiten',
    component: 'Onboarding',
    mainPlayer: 'defaultColor',
    partnerPlayer: 'b',
  },
  {
    route: 'onboarding-names',
    component: 'Names',
    mainPlayer: 'defaultColor',
    partnerPlayer: 'b',
  },
  {
    route: 'consent',
    component: 'Consent',
    mainPlayer: 'a',
    partnerPlayer: 'b',
  },
  {
    route: 'consent',
    component: 'Consent',
    mainPlayer: 'b',
    partnerPlayer: 'a',
  },
  {
    route: 'phase-1',
    component: 'Phase1',
    mainPlayer: 'a',
    partnerPlayer: 'b',
  },
  {
    route: 'phase-1',
    component: 'Phase1',
    mainPlayer: 'b',
    partnerPlayer: 'a',
  },
  {
    route: 'ende',
    component: 'Home',
    mainPlayer: 'a',
    partnerPlayer: 'b',
  },
]

export const getStep = (currentIndex: number): GameStep | undefined => {
  if (currentIndex < stepsInGameConfiguration.length - 1) {
    return stepsInGameConfiguration[currentIndex]
  } else {
    return undefined
  }
}

export const getNextRoute = (currentIndex: number): string | undefined => {
  const nextIndex = currentIndex + 1
  if (nextIndex < stepsInGameConfiguration.length - 1) {
    return stepsInGameConfiguration[nextIndex].route
  } else {
    return undefined
  }
}

export const getPreviousRoute = (currentIndex: number): string | undefined => {
  const previousIndex = currentIndex - 1
  if (previousIndex < stepsInGameConfiguration.length - 1) {
    return stepsInGameConfiguration[previousIndex].route
  } else {
    return undefined
  }
}
