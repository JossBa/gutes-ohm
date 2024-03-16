import React from 'react'

interface IHeader {
  title: string
  section: string
}
export const Header = ({ title, section }: IHeader) => {
  return (
    <div className="w-full mt-14 mb-4">
      <h2 className="font-josefin text-sm text-center font-semibold uppercase">{section}</h2>
      <h1 className="font-josefin text-2xl text-center font-bold uppercase leading-normal">
        {title}
      </h1>
      <hr className="my-1 mx-auto border-anthrazit" />
    </div>
  )
}
