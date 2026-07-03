import { useState } from 'react'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  notes: '',
}

// Regras de validação isoladas — fáceis de testar e reutilizar.
// Exportada para permitir testes unitários diretos (ver useReservationForm.test.js).
export function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = 'Informe seu nome.'
  }

  if (!form.email.trim()) {
    errors.email = 'Informe seu e-mail.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'E-mail em formato inválido.'
  }

  // Aceita formatos comuns de telefone BR: (11) 91234-5678, 11912345678, etc.
  const digits = form.phone.replace(/\D/g, '')
  if (!form.phone.trim()) {
    errors.phone = 'Informe um telefone.'
  } else if (digits.length < 10 || digits.length > 11) {
    errors.phone = 'Telefone deve ter DDD + número (10 ou 11 dígitos).'
  }

  if (!form.date) {
    errors.date = 'Escolha uma data.'
  } else if (form.date < new Date().toISOString().slice(0, 10)) {
    errors.date = 'A data não pode estar no passado.'
  }

  if (!form.time) {
    errors.time = 'Escolha um horário.'
  }

  return errors
}

export function useReservationForm() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    const next = { ...form, [name]: value }
    setForm(next)
    // Revalida o campo já tocado para dar feedback imediato.
    if (touched[name]) {
      setErrors(validate(next))
    }
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(form))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    setTouched(
      Object.keys(emptyForm).reduce((acc, k) => ({ ...acc, [k]: true }), {}),
    )
    if (Object.keys(found).length === 0) {
      setSubmitted(true)
    }
  }

  function reset() {
    setForm(emptyForm)
    setErrors({})
    setTouched({})
    setSubmitted(false)
  }

  return { form, errors, touched, submitted, handleChange, handleBlur, handleSubmit, reset }
}
