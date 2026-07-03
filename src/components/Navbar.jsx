import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { cafe } from '../data/cafe.js'
import { useTheme } from '../hooks/useTheme.js'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/cardapio', label: 'Cardápio' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors duration-200 ${
      isActive ? 'text-clay' : 'text-ink/70 hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bg/85 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-semibold">{cafe.name}</span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-clay sm:inline">
            {cafe.tagline}
          </span>
        </Link>

        {/* Navegação desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <ThemeToggle theme={theme} onToggle={toggle} />
          </li>
          <li>
            <Link to="/contato" className="btn-primary !px-5 !py-2">
              Reservar mesa
            </Link>
          </li>
        </ul>

        {/* Ações mobile: toggle de tema + hambúrguer */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggle} />
          <button
            type="button"
            className="inline-flex h-9 w-9 flex-col items-center justify-center gap-1.5"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Menu mobile expandido */}
      {open && (
        <div className="border-t border-ink/10 bg-bg md:hidden">
          <ul className="container-page flex flex-col py-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  <span className="block py-2">{l.label}</span>
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contato"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Reservar mesa
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
