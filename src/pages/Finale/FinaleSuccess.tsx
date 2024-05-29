import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'
import confetti from 'canvas-confetti'
import { useCallback, useEffect, useRef } from 'react'

export const FinaleSuccess = ({ nextStep }: GameStepProps) => {
  const animationStarted = useRef(false)
  const next = useCallback(() => nextStep, [nextStep])
  const triggerConfetti = useCallback(() => {
    animationStarted.current = true

    const triangle = confetti.shapeFromPath({ path: 'M0 18 L9 3 L18 18z' })
    const cube = confetti.shapeFromPath({ path: 'M 0 0 H 18 V 18 H 0 z' })
    const circle = confetti.shapeFromPath({ path: 'M 9, 18 a 9,9 0 1,1 18,0 a 9,9 0 1,1 -18,0' })

    return confetti({
      origin: { y: 0.5, x: 0.5 },
      colors: ['#0097C5', '#A0D4DE', '#F9BB00', '#FFE062'],
      shapes: [triangle, cube, circle],
      particleCount: 150,
      angle: 90,
      duration: 5000,
      scalar: 1.5,
      spread: 90,
    })
  }, [animationStarted])

  useEffect(() => {
    if (animationStarted.current) return
    triggerConfetti().then(() => {
      next()
    })
  }, [triggerConfetti, next, animationStarted])

  return (
    <>
      <Header hideTitle />
      <ContentWrapper>
        <div className="mt-48">
          <h1 className="font-josefin text-2xl text-center font-bold uppercase leading-normal">
            Glückwunsch, Ihr habt es geschafft!
          </h1>
        </div>
        <hr className="my-1 mx-auto border-anthrazit" />
      </ContentWrapper>
    </>
  )
}
