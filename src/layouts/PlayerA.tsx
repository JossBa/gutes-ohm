import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export const PlayerA = () => {
  // inject the player context into the outlet
  const playerName = localStorage.getItem('player1') ?? ''
  const partnerName = localStorage.getItem('player2') ?? ''
  const [colorChange, setColorChange] = useState(false)

  const handleSomething = () => {
    setColorChange(!colorChange)
  }

  return (
    <div className={colorChange ? 'bg-pink-400' : 'bg-blue-600'}>
      <p>Hello I am player A layout</p>
      <Outlet
        context={{
          player: 'a',
          name: playerName,
          partner: partnerName,
          trigger: handleSomething,
        }}
      />
    </div>
  )
}
