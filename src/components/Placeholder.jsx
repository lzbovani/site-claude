// Placeholder de "foto" para a galeria — composição geométrica em SVG.
// Determinístico a partir do id, então cada célula fica visualmente distinta.
const palettes = {
  cream: ['#f0e8dd', '#e2d3c1', '#c1876b'],
  clay: ['#c1876b', '#a86a4f', '#f0e8dd'],
  sage: ['#7f8f78', '#5f6f59', '#f0e8dd'],
  espresso: ['#3f3733', '#2e2622', '#c1876b'],
}

export default function Placeholder({ tone = 'cream', caption = '', className = '' }) {
  const [bg, mid, accent] = palettes[tone] || palettes.cream
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={caption ? `Ilustração: ${caption}` : 'Ilustração do café'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="300" fill={bg} />
      <circle cx="300" cy="90" r="70" fill={mid} opacity="0.55" />
      <rect x="40" y="150" width="150" height="150" rx="12" fill={mid} opacity="0.4" />
      {/* xícara estilizada */}
      <g transform="translate(150 110)">
        <path d="M20 40 h70 v22 a24 24 0 0 1 -24 24 h-22 a24 24 0 0 1 -24 -24 Z" fill={accent} />
        <path d="M90 46 h10 a14 14 0 0 1 0 28 h-6" fill="none" stroke={accent} strokeWidth="7" />
        <path d="M38 24 q6 -12 0 -22 M58 24 q6 -12 0 -22" stroke={accent} strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />
      </g>
    </svg>
  )
}
