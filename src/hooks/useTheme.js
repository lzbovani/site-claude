import { useEffect, useState } from 'react'

// Lê o tema inicial: preferência salva > preferência do sistema.
// O <html class="dark"> já é aplicado por um script inline no index.html
// (evita flash), então aqui só sincronizamos o estado do React com ele.
function getInitialTheme() {
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
    return 'dark'
  }
  return 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* localStorage indisponível (ex.: modo privado) — ignora. */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
