import { PropsWithChildren } from 'react'

export const PageWrapper = (props: PropsWithChildren & { colorChagnge?: string }) => {
  return (
    <div
      className={`w-full max-w-4xl h-screen flex flex-col justify-between overflow-hidden items-center text-center p-4 mx-auto pb-28 box-border`}
    >
      {props.children}
    </div>
  )
}
