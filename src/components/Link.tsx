import { Link } from 'react-router-dom'

type CustomLinkProps = {
  title: string
  to: string
  style?: 'primary' | 'secondary'
  target?: string
  rel?: string
}

const linkStyles = {
  primary: 'min-w-[280px] bg-anthrazit text-slate-50',
  secondary: 'min-w-[278px] border-2 bg-transparent border-anthrazit text-anthrazit',
}
export const CustomLink = ({
  title,
  to,
  style = 'primary',
  target = '_blank',
  rel = 'noreferrer',
}: CustomLinkProps) => {
  return (
    <Link
      className={`p-2 pt-3 text-base font-bold font-transat uppercase tracking-widest ${linkStyles[style]}`}
      to={to}
      target={target}
      rel={rel}
    >
      {title}
    </Link>
  )
}
