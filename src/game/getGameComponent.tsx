import React from 'react'
import { Home } from '../pages/Home'
import { Onboarding } from '../pages/Onboarding'
import { Consent } from '../pages/Consent'
import { Names } from '../pages/Names'
import { Phase1 } from '../pages/Phase1'
import { GameStepProps } from '../pages/types'

// Define a mapping of component types to functions that return the corresponding components
const componentMapping = {
  Home,
  Onboarding,
  Names,
  Consent,
  Phase1,
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
