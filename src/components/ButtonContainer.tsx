import { PropsWithChildren } from 'react'

export const ButtonContainer = (props: PropsWithChildren) => {
  return (
    <div className="w-full flex flex-col space-y-4 absolute bottom-12 items-center">
      {props.children}
    </div>
  )
}
