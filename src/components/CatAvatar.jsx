// Avatar de gato desenhado em SVG — placeholder leve, sem imagens externas
// nem dependência de rede. A cor do pelo vem dos dados do gato.
export default function CatAvatar({ coat = '#9a7b63', className = '' }) {
  // Tom mais escuro para orelhas/detalhes, derivado do pelo.
  const dark = shade(coat, -0.28)
  const nose = '#c1876b'

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="120" height="120" fill="#f0e8dd" />
      {/* orelhas */}
      <path d="M34 46 L40 22 L58 40 Z" fill={coat} />
      <path d="M86 46 L80 22 L62 40 Z" fill={coat} />
      <path d="M38 42 L41 30 L50 40 Z" fill={dark} />
      <path d="M82 42 L79 30 L70 40 Z" fill={dark} />
      {/* cabeça */}
      <ellipse cx="60" cy="66" rx="30" ry="27" fill={coat} />
      {/* olhos */}
      <ellipse cx="49" cy="64" rx="4" ry="6" fill={dark} />
      <ellipse cx="71" cy="64" rx="4" ry="6" fill={dark} />
      {/* focinho */}
      <path d="M56 74 L64 74 L60 79 Z" fill={nose} />
      <path d="M60 79 L60 84 M60 84 C56 84 54 82 53 80 M60 84 C64 84 66 82 67 80"
        stroke={dark} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* bigodes */}
      <g stroke={dark} strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
        <line x1="40" y1="74" x2="26" y2="70" />
        <line x1="40" y1="78" x2="26" y2="80" />
        <line x1="80" y1="74" x2="94" y2="70" />
        <line x1="80" y1="78" x2="94" y2="80" />
      </g>
    </svg>
  )
}

// Clareia/escurece uma cor hex por um fator (-1 a 1).
function shade(hex, factor) {
  const n = hex.replace('#', '')
  const r = parseInt(n.slice(0, 2), 16)
  const g = parseInt(n.slice(2, 4), 16)
  const b = parseInt(n.slice(4, 6), 16)
  const adj = (c) =>
    Math.max(0, Math.min(255, Math.round(c + c * factor)))
      .toString(16)
      .padStart(2, '0')
  return `#${adj(r)}${adj(g)}${adj(b)}`
}
