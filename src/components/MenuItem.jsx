import { formatPrice } from '../utils/format.js'

// Linha do cardápio: nome + descrição à esquerda, preço à direita.
export default function MenuItem({ item }) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-ink/10 py-4">
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/60">
          {item.description}
        </p>
      </div>
      <span className="shrink-0 font-display text-lg text-clay">
        {formatPrice(item.price)}
      </span>
    </li>
  )
}
