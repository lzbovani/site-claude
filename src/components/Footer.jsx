import { Link } from 'react-router-dom'
import { cafe } from '../data/cafe.js'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-surface">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl font-semibold">{cafe.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60">
            Café de especialidade e a companhia tranquila dos nossos gatos residentes.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Visite</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">{cafe.address}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Horários</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-ink/60">
            {cafe.hours.map((h) => (
              <li key={h.days}>
                <span className="text-ink/80">{h.days}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contato</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-ink/60">
            <li>{cafe.phone}</li>
            <li>{cafe.email}</li>
            <li className="flex gap-4 pt-2">
              {cafe.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-ink/70 transition-colors hover:text-clay"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {cafe.name}. Projeto fictício para fins de estudo.</p>
          <Link to="/contato" className="hover:text-clay">
            Reservar uma mesa
          </Link>
        </div>
      </div>
    </footer>
  )
}
