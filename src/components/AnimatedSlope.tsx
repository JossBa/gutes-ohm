import React from 'react'

export const AnimatedSlope = React.memo(
  ({ animate, animationDuration }: { animate: boolean; animationDuration: number }) => {
    const durationStyle = animate ? { transitionDuration: `${animationDuration}s` } : {}
    console.log(window.innerHeight)
    return (
      <div
        style={durationStyle}
        className={`bg-background w-full slope-element-negative absolute -z-10 -m-4 transition-transform transform ${
          animate ? ` translate-y-0` : '-translate-y-full'
        } ease-linear md:h-screen h-[100dvh]`}
      ></div>
    )
  }
)
