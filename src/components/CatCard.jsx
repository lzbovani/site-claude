import CatAvatar from './CatAvatar.jsx'

// Cartão de um gato residente. Usado na Home (resumido) e no Sobre (completo).
export default function CatCard({ cat, compact = false }) {
  return (
    <article className="group rounded-2xl border border-ink/10 bg-surface p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
      <div className="overflow-hidden rounded-xl">
        <CatAvatar
          coat={cat.coat}
          className="aspect-square w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-medium">{cat.name}</h3>
          <span className="text-xs text-ink/50">{cat.age}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-clay">{cat.personality}</p>
        {!compact && (
          <p className="mt-2 text-sm leading-relaxed text-ink/70">{cat.bio}</p>
        )}
      </div>
    </article>
  )
}
