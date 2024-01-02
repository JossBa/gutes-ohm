import { PropsWithChildren } from 'react'

export const ContentWrapper = (props: PropsWithChildren) => {
  return (
    <div className="w-full flex-1 overflow-y-auto space-y-8 justify-center items bg-green-300">
      {props.children}
    </div>
  )
}
