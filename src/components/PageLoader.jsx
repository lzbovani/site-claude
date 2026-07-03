// Fallback exibido enquanto o chunk da rota é carregado (React.lazy/Suspense).
// min-height evita "pulo" de layout entre navbar e footer durante o carregamento.
export default function PageLoader() {
  return (
    <div
      className="container-page flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink/20 border-t-clay" />
      <span className="sr-only">Carregando…</span>
    </div>
  )
}
