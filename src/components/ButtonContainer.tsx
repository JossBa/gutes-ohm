import { PropsWithChildren } from 'react'

export const ButtonContainer = (props: PropsWithChildren) => {
  return <div className="w-full flex flex-col space-y-4 items-center p-2">{props.children}</div>
}
