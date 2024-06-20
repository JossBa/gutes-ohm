import React from 'react'
import { PropsWithChildren } from 'react'

export const ButtonContainer = (props: PropsWithChildren) => {
  const marginBottom = React.Children.count(props.children) > 1 ? 'mb-0' : 'mb-4'
  return (
    <div className={`w-full flex flex-col space-y-4 items-center p-2 my-1 ${marginBottom}`}>
      {props.children}
    </div>
  )
}
