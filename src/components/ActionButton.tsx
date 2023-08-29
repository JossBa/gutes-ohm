import React from 'react'
import { Link } from 'react-router-dom'
interface ILink {
  title: string
  path: string
}

export const ActionButton = ({ title, path }: ILink) => {
  return (
    <div className="fixed bottom-12 w-full flex justify-center">
      <div className="flex flex-col space-y-4 w-72">
        <div className="h-14 font-golos text-lg center font-semibold text-slate-200 bg-slate-900">
          <Link to={path}>{title}</Link>
        </div>
      </div>
    </div>
  )
}
