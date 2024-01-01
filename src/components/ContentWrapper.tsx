import { PropsWithChildren } from 'react'

export const ContentWrapper = (props: PropsWithChildren) => {
  return (
    <div className=" px-12 space-y-8 flex flex-col items-center flex-1 overflow-y-auto overflow-x-hidden">
      {props.children}
    </div>
  )
}
