import { PropsWithChildren, useEffect } from 'react'
import { Colors } from '../game/steps'

const colorMapping: Record<Colors, string> = {
  LIGHT_GREY: '#EFEEE7',
  YELLOW: '#FFE062',
  BLUE: '#A0D4DE',
  GRADIENT: 'linear-gradient(to bottom, #FFE062, #A0D4DE)',
} as const

export const PageWrapper = ({
  colorChange,
  ...props
}: PropsWithChildren & { colorChange?: Colors }) => {
  useEffect(() => {
    if (colorChange) {
      if (colorChange === 'GRADIENT') {
        document.body.style.background = colorMapping[colorChange]
      } else {
        document.body.style.backgroundColor = colorMapping[colorChange]
      }
    }
    const myNav = document.getElementById('navigation-bar')
    window.onscroll = () => {
      console.log(myNav)
      if (!myNav) return
      if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        myNav.style.backgroundColor = colorMapping['LIGHT_GREY']
      } else {
        myNav.style.backgroundColor = 'transparent'
      }
    }

    return () => {
      document.body.style.background = ''
      document.body.style.backgroundColor = ''
      window.onscroll = null
    }
  }, [colorChange])

  return (
    <div
      className={`w-full min-h-screen flex flex-col max-w-4xl justify-between items-center text-center p-5 mx-auto box-border`}
    >
      {props.children}
    </div>
  )
}
