import React from 'react'

interface IHeader {
  title: string
  section: string
}
export const Header = ({ title, section }: IHeader) => {
  return (
    <>
      <h2 className="text-xl text-center">{section}</h2>
      <h1 className="text-4xl text-center font-semibold mt-15">{title}</h1>
      <hr className="my-5 mx-auto border-slate-900" />
    </>
  )
}
