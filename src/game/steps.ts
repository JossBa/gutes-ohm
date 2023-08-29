export type GameStep = {
  route: string
  mainPlayer: string
  partnerPlayer: string
}

const stepsInGameConfiguration: GameStep[] = [
  {
    route: '/',
    mainPlayer: 'a',
    partnerPlayer: 'b',
  },
  {
    route: 'streiten/onboarding-intro',
    mainPlayer: 'a',
    partnerPlayer: 'b',
  },
  {
    route: 'onboarding-names',
    mainPlayer: 'a',
    partnerPlayer: 'b',
  },
  {
    route: 'consent',
    mainPlayer: 'a',
    partnerPlayer: 'b',
  },
  {
    route: 'consent',
    mainPlayer: 'b',
    partnerPlayer: 'a',
  },
  {
    route: 'phase-1',
    mainPlayer: 'a',
    partnerPlayer: 'b',
  },
  {
    route: 'phase-1',
    mainPlayer: 'b',
    partnerPlayer: 'a',
  },
  {
    route: 'ende',
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
