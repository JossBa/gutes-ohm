import { useState } from 'react'

type Timer = {
  handleStart: () => void
  time: string
  counting: boolean
  started: boolean
}

export const useTimer = (duration: number): Timer => {
  const [time, setTime] = useState(duration)
  const [counting, setCounting] = useState(false)
  const [started, setStarted] = useState(false)

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secondsRemaining = seconds % 60
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = secondsRemaining.toString().padStart(2, '0')
    return `${formattedMinutes}:${formattedSeconds}`
  }

  const handleStart = () => {
    setCounting(true)
    setStarted(!started)
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1
        if (newTime === 0) {
          clearInterval(interval)
          setCounting(false)
        }
        return newTime
      })
    }, 1000)
  }

  return {
    handleStart,
    time: formatTime(time),
    counting,
    started,
  }
}
