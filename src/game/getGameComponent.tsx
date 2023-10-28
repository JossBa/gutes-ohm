import React from 'react'
import { Consent } from '../pages/Consent'
import { PhasenIntro } from '../pages/PhasenIntro'
import { GameStepProps } from '../pages/types'

// Define a mapping of component types to functions that return the corresponding components
const componentMapping = {
  Consent,
  PhasenIntro,
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
