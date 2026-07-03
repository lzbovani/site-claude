import { useMemo, useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import MenuItem from '../components/MenuItem.jsx'
import { menuCategories, menuItems } from '../data/menu.js'

export default function Menu() {
  const [active, setActive] = useState('all')

  // Filtra sem recarregar a página. useMemo evita recalcular sem necessidade.
  const filtered = useMemo(
    () =>
      active === 'all'
        ? menuItems
        : menuItems.filter((item) => item.category === active),
    [active],
  )

  return (
    <section className="container-page py-16 sm:py-20">
      <SectionTitle
        eyebrow="Cardápio"
        title="Para acompanhar a tarde"
        subtitle="Preços em reais. Temos opções vegetarianas e sem lactose — é só perguntar no balcão."
      />

      {/* Filtros por categoria */}
      <div
        className="mt-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filtrar cardápio por categoria"
      >
        {menuCategories.map((cat) => {
          const selected = active === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                selected
                  ? 'bg-ink text-bg'
                  : 'border border-ink/15 text-ink/70 hover:border-clay hover:text-clay'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Lista filtrada */}
      <ul className="mt-8 max-w-3xl" aria-live="polite">
        {filtered.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-ink/60">Nada nesta categoria por enquanto.</p>
      )}
    </section>
  )
}
