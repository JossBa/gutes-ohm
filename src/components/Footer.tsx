import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className={`p-2 mt-auto bottom-0`}>
      <Link to="/about" className="underline text-black text-sm font-josefin uppercase">
        Impressum & Datenschutz
      </Link>
    </footer>
  )
}
