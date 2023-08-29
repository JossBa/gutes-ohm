import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from '../game/gameSlice'

export const Streiten = () => {
  const [colorChange, setColorChange] = useState(false)
  const { nextRoute } = useSelector((state: RootState) => state.game)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSomething = () => {
    dispatch(nextStep())
    navigate(nextRoute)
  }

  return (
    <div className={colorChange ? 'bg-pink-400' : 'bg-yellowdark'}>
      <p>Hello I am Streiten layout</p>
      <Outlet
        context={{
          trigger: handleSomething,
        }}
      />
    </div>
  )
}
