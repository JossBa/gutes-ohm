import React from 'react'
import icon from '../assets/OHM_Logo.png'

export const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-lg mx-12 space-y-8 mt-44">
        <img src={icon} alt="ohm-logo" />
        <p className="mx-10 text-center font-sourceSerif italic text-2xl font-bold">
          Die App für gutes Streiten.
        </p>
      </div>
    </div>
  )
}
