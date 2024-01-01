import React from 'react'
import icon from '../assets/OHM_Logo.png'

export const Hero = () => {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto justify-center items-center">
      <div className="max-w-lg">
        <img src={icon} alt="ohm-logo" />
        <p className="text-center font-sourceSerif italic text-2xl font-bold">
          Die App für gutes Streiten.
        </p>
      </div>
    </div>
  )
}
