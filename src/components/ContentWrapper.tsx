import { PropsWithChildren } from 'react'

export const ContentWrapper = (props: PropsWithChildren) => {
  return (
    <div className="w-full flex-1 overflow-y-auto space-y-6 sm:space-y-9 sm:space-x-20 justify-center items-center">
      {props.children}
    </div>
  )
}
