import { PropsWithChildren } from 'react'

export const ContentWrapper = (props: PropsWithChildren) => {
  return (
    <div className="w-full flex-1 overflow-y-auto space-y-4 sm:space-y-9 justify-center items-center mb-10">
      {props.children}
    </div>
  )
}
