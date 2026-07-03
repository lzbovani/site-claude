// Wrapper de campo de formulário com label, erro e acessibilidade (aria).
export default function Field({ label, name, error, touched, children }) {
  const showError = touched && error
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {showError && (
        <p id={`${name}-error`} className="mt-1 text-xs text-clay" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
