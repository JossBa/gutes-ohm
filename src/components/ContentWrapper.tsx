import { PropsWithChildren } from 'react'

export const ContentWrapper = (props: PropsWithChildren) => {
  return <div className="px-12 space-y-6 flex flex-col items-center">{props.children}</div>
}
