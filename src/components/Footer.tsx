import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className={`p-2 mt-auto bottom-0`}>
      <Link
        target="_blank"
        rel="noreferrer"
        to="https://www.gutes-ohm.com/impressum"
        className="underline text-black text-sm font-transat uppercase"
      >
        Impressum & Datenschutz
      </Link>
    </footer>
  )
}
