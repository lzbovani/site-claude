import { useEffect, useRef, useCallback } from 'react'
import Placeholder from './Placeholder.jsx'

const SWIPE_THRESHOLD = 50 // px mínimos para contar como swipe

// Lightbox acessível para a galeria:
// - fecha no Esc / clique no fundo;
// - navega com setas do teclado e por swipe no toque;
// - prende o foco dentro do diálogo (focus-trap) e o devolve ao thumbnail ao fechar.
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index]
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const touchStartX = useRef(null)
  // Guarda o elemento que estava focado antes de abrir, para restaurar depois.
  const previouslyFocused = useRef(null)

  const goPrev = useCallback(
    () => onNavigate((index - 1 + items.length) % items.length),
    [index, items.length, onNavigate],
  )
  const goNext = useCallback(
    () => onNavigate((index + 1) % items.length),
    [index, items.length, onNavigate],
  )

  // Teclado: Esc, setas e Tab (focus-trap).
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key === 'ArrowRight') return goNext()
      if (e.key === 'ArrowLeft') return goPrev()
      if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll('button')
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [goNext, goPrev, onClose],
  )

  // Setup: trava scroll, foca o botão fechar, escuta teclado. Cleanup restaura tudo.
  useEffect(() => {
    previouslyFocused.current = document.activeElement
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      // Devolve o foco ao thumbnail que abriu o lightbox.
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus()
      }
    }
  }, [handleKey])

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      delta < 0 ? goNext() : goPrev()
    }
    touchStartX.current = null
  }

  if (!item) return null

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/80 p-4 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        ref={closeBtnRef}
        type="button"
        className="absolute right-5 top-5 text-2xl leading-none text-cream/80 hover:text-cream"
        aria-label="Fechar"
        onClick={onClose}
      >
        ✕
      </button>

      <button
        type="button"
        className="absolute left-4 text-3xl text-cream/70 hover:text-cream"
        aria-label="Imagem anterior"
        onClick={(e) => {
          e.stopPropagation()
          goPrev()
        }}
      >
        ‹
      </button>

      <figure
        className="max-w-2xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Placeholder tone={item.tone} caption={item.caption} className="w-full" />
        <figcaption className="bg-bg px-5 py-3 text-sm text-ink/70">
          {item.caption}
          <span className="ml-2 text-ink/40">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        className="absolute right-4 text-3xl text-cream/70 hover:text-cream"
        aria-label="Próxima imagem"
        onClick={(e) => {
          e.stopPropagation()
          goNext()
        }}
      >
        ›
      </button>
    </div>
  )
}
