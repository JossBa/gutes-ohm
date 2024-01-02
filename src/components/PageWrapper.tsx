import { PropsWithChildren } from 'react'

export const PageWrapper = (props: PropsWithChildren & { colorChagnge?: string }) => {
  return (
    <div
      className={`${props.colorChagnge} w-full h-screen flex flex-col justify-between overflow-hidden items-center text-center p-4`}
    >
      {props.children}
    </div>
  )
}
