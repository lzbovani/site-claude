// Cabeçalho de seção reutilizável (eyebrow + título + subtítulo opcional).
export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-medium leading-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink/70">{subtitle}</p>
      )}
    </div>
  )
}
