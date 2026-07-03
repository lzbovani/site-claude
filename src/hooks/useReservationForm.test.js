import { describe, it, expect } from 'vitest'
import { validate } from './useReservationForm.js'

// Formulário base vazio + uma data futura para os casos válidos.
const empty = { name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' }
const futureDate = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10)

describe('validate() — regras da reserva', () => {
  it('acusa todos os campos obrigatórios quando o formulário está vazio', () => {
    const errors = validate(empty)
    expect(Object.keys(errors)).toEqual(
      expect.arrayContaining(['name', 'email', 'phone', 'date', 'time']),
    )
  })

  it('rejeita e-mail mal formatado e aceita um válido', () => {
    expect(validate({ ...empty, email: 'foo' }).email).toBeTruthy()
    expect(validate({ ...empty, email: 'foo@bar' }).email).toBeTruthy()
    expect(validate({ ...empty, email: 'lucas@exemplo.com' }).email).toBeUndefined()
  })

  it('valida o telefone pela quantidade de dígitos (10 ou 11)', () => {
    expect(validate({ ...empty, phone: '123' }).phone).toBeTruthy() // curto demais
    expect(validate({ ...empty, phone: '123456789012' }).phone).toBeTruthy() // longo demais
    expect(validate({ ...empty, phone: '(11) 91234-5678' }).phone).toBeUndefined() // 11 dígitos
    expect(validate({ ...empty, phone: '11 3333-4444' }).phone).toBeUndefined() // 10 dígitos
  })

  it('não aceita data no passado', () => {
    expect(validate({ ...empty, date: '2000-01-01' }).date).toBeTruthy()
    expect(validate({ ...empty, date: futureDate }).date).toBeUndefined()
  })

  it('retorna objeto vazio para um formulário totalmente válido', () => {
    const errors = validate({
      name: 'Lucas Bovani',
      email: 'lucas@exemplo.com',
      phone: '(11) 91234-5678',
      date: futureDate,
      time: '10:00',
      guests: '2',
      notes: '',
    })
    expect(errors).toEqual({})
  })
})
