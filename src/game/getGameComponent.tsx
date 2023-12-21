import React from 'react'
import { Consent } from '../pages/Consent'
import { PhaseOneIntro } from '../pages/PhaseOne/PhaseOneIntro'
import { GameStepProps } from '../pages/types'
import { PhaseOneExplain } from '../pages/PhaseOne/PhaseOneExplain'
import { GenericError } from '../pages/GenericError'
import { PhaseOneRepeat } from '../pages/PhaseOne/PhaseOneRepeat'

// Define a mapping of component types to functions that return the corresponding components
const componentMapping = {
  Consent,
  PhaseOneIntro,
  PhaseOneExplain,
  PhaseOneRepeat,
  GenericError,
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
