import React, { useState } from 'react'
import { AppMenu } from '../components/AppMenu'

const data: Record<string, any> = {
  step1: {
    title: 'Das erwartet euch.',
    description: 'some description...',
  },
  step2: {
    title: 'Das erwartet euch 2',
    description: 'some description... 2',
  },
}

export const Streiten = () => {
  const [stepCount, setStepCount] = useState(1)
  const { title, description } = data[`step${stepCount}`]
  return (
    <div>
      <AppMenu />
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        onClick={() => {
          setStepCount(2)
        }}
      >
        weiter
      </button>
    </div>
  )
}
