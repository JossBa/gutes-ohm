import React from 'react'
import icon from '../assets/OHM_Logo.png'

export const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-lg mx-12 space-y-4 mt-28">
        <img src={icon} alt="ohm-logo" />
        <p className="mx-10 text-center font-sfPro text-2xl">Die App für gutes Streiten.</p>
      </div>
    </div>
  )
}
