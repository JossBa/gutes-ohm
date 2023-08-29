import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export const PlayerB = () => {
  const playerName = localStorage.getItem('player2') ?? ''
  const partnerName = localStorage.getItem('player1') ?? ''
  const [colorChange, setColorChange] = useState(false)

  const handleSomething = () => {
    setColorChange(!colorChange)
  }

  return (
    <div className={colorChange ? 'bg-pink-400' : 'bg-yellowdark'}>
      <p>Hello I am player B layout</p>
      <Outlet
        context={{
          player: 'b',
          name: playerName,
          partner: partnerName,
          trigger: handleSomething,
        }}
      />
    </div>
  )
}
