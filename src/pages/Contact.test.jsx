import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Contact from './Contact.jsx'

const futureDate = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10)

describe('<Contact /> — formulário de reserva', () => {
  it('mostra mensagens de erro ao enviar o formulário vazio', () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: /enviar reserva/i }))

    expect(screen.getByText('Informe seu nome.')).toBeInTheDocument()
    expect(screen.getByText('Informe seu e-mail.')).toBeInTheDocument()
    expect(screen.getByText('Informe um telefone.')).toBeInTheDocument()
    // Ainda não deve haver tela de sucesso.
    expect(screen.queryByText('Reserva enviada!')).not.toBeInTheDocument()
  })

  it('envia com sucesso quando todos os campos são válidos', () => {
    render(<Contact />)

    fireEvent.change(screen.getByLabelText('Nome completo'), {
      target: { value: 'Lucas Bovani' },
    })
    fireEvent.change(screen.getByLabelText('E-mail'), {
      target: { value: 'lucas@exemplo.com' },
    })
    fireEvent.change(screen.getByLabelText('Telefone'), {
      target: { value: '(11) 91234-5678' },
    })
    fireEvent.change(screen.getByLabelText('Data'), { target: { value: futureDate } })
    fireEvent.change(screen.getByLabelText('Horário'), { target: { value: '10:00' } })

    fireEvent.click(screen.getByRole('button', { name: /enviar reserva/i }))

    expect(screen.getByText('Reserva enviada!')).toBeInTheDocument()
    // O formulário some depois do sucesso.
    expect(screen.queryByLabelText('Nome completo')).not.toBeInTheDocument()
  })
})
