import React from 'react'
import { Consent } from '../pages/Consent'
import { PhaseOneIntro } from '../pages/PhaseOne/PhaseOneIntro'
import { GameStepProps } from '../pages/types'
import { PhaseOneExplain } from '../pages/PhaseOne/PhaseOneExplain'
import { GenericError } from '../pages/GenericError'
import { PhaseOneRepeat } from '../pages/PhaseOne/PhaseOneRepeat'
import { Onboarding } from '../pages/Onboarding'
import { Names } from '../pages/Names'
import { PhaseOneConfirm } from '../pages/PhaseOne/PhaseOneConfirm'
import { PhaseOneComplete } from '../pages/PhaseOne/PhaseOneComplete'
import { PhaseOneMoodcheck } from '../pages/PhaseOne/PhaseOneMoodcheck'
import { PhaseOneFinale } from '../pages/PhaseOne/PhaseOneFinale'
import { PhaseTwoIntro } from '../pages/PhaseTwo/PhaseTwoIntro'
import { PhaseTwoSentences } from '../pages/PhaseTwo/PhaseTwoSentences'
import { PhaseTwoCheck } from '../pages/PhaseTwo/PhaseTwoCheck'
import { PhaseTwoComplete } from '../pages/PhaseTwo/PhaseTwoComplete'
import { PhaseTwoMoodcheck } from '../pages/PhaseTwo/PhaseTwoMoodcheck'
import { PhaseThreeIntro } from '../pages/PhaseThree/PhaseThreeIntro'
import { PhaseThreeOptions } from '../pages/PhaseThree/PhaseThreeOptions'
import { PhaseThreeConfirm } from '../pages/PhaseThree/PhaseThreeConfirm'
import { PhaseThreeAdd } from '../pages/PhaseThree/PhaseThreeAdd'
import { PhaseThreeSolutions } from '../pages/PhaseThree/PhaseThreeSolutions'
import { PhaseThreeSelectSolutions } from '../pages/PhaseThree/PhaseThreeSelectSolutions'
import { PhaseThreeYourSolutions } from '../pages/PhaseThree/PhaseThreeYourSolutions'
import { PhaseThreeComplete } from '../pages/PhaseThree/PhaseThreeComplete'
import { FinaleMoodcheck } from '../pages/Finale/FinaleMoodcheck'
import { FinalePeace } from '../pages/Finale/FinalePeace'
// Define a mapping of component types to functions that return the corresponding components
const componentMapping = {
  Onboarding,
  Names,
  Consent,
  PhaseOneIntro,
  PhaseOneExplain,
  PhaseOneRepeat,
  PhaseOneConfirm,
  PhaseOneComplete,
  GenericError,
  PhaseOneMoodcheck,
  PhaseOneFinale,
  PhaseTwoIntro,
  PhaseTwoSentences,
  PhaseTwoCheck,
  PhaseTwoComplete,
  PhaseTwoMoodcheck,
  PhaseThreeIntro,
  PhaseThreeOptions,
  PhaseThreeConfirm,
  PhaseThreeAdd,
  PhaseThreeSolutions,
  PhaseThreeSelectSolutions,
  PhaseThreeYourSolutions,
  PhaseThreeComplete,
  FinaleMoodcheck,
  FinalePeace,
} as const

// Get the union type of valid component types automatically
export type GameComponentType = keyof typeof componentMapping

// Function that returns the React component based on the provided type
export const useComponentByType = (type: GameComponentType): React.FC<GameStepProps> => {
  const Component = componentMapping[type]

  // Wrap the component to pass the common prop
  const ComponentWithProps: React.FC<GameStepProps> = (props) => <Component {...props} />

  return ComponentWithProps
}
