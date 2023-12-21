import { useState } from 'react'

export const useTimer = (duration: number) => {
  const [time, setTime] = useState(duration)
  const [started, setStarted] = useState(false)
  const [counting, setCounting] = useState(false)

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secondsRemaining = seconds % 60
    const formattedMinutes = minutes.toString().padStart(2, '0')
    const formattedSeconds = secondsRemaining.toString().padStart(2, '0')
    return `${formattedMinutes}:${formattedSeconds}`
  }

  const handleStart = () => {
    const interval = setInterval(() => {
      setStarted(!started)
      setCounting(true)
      setTime((prevTime) => {
        const newTime = prevTime - 1
        if (newTime === 0) {
          clearInterval(interval) // Clear the interval when time reaches 0
          setCounting(false)
        }
        return newTime
      })
    }, 1000)
  }

  return {
    handleStart,
    time: formatTime(time),
    started,
    counting,
  }
}
