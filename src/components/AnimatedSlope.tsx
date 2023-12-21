import React from 'react'

export const AnimatedSlope = React.memo(
  ({ animate, animationDuration }: { animate: boolean; animationDuration: number }) => {
    const durationStyle = animate ? { transitionDuration: `${animationDuration}s` } : {}

    return (
      <div
        style={durationStyle}
        className={`bg-background h-screen w-full slope-element-negative absolute -z-10 transition-transform transform ${
          animate ? ` translate-y-0` : '-translate-y-full'
        } ease-linear`}
      ></div>
    )
  }
)
