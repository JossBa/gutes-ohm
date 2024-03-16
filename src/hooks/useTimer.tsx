import { useEffect, useRef, useState } from 'react'

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
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

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
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 1
        if (newTime === 0) {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current)
          }
          setCounting(false)
        }
        return newTime
      })
    }, 1000)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  return {
    handleStart,
    time: formatTime(time),
    counting,
    started,
  }
}
