import SectionTitle from '../components/SectionTitle.jsx'
import Field from '../components/Field.jsx'
import { useReservationForm } from '../hooks/useReservationForm.js'
import { cafe } from '../data/cafe.js'

// Estilo base de input, com estado de erro.
const inputBase =
  'w-full rounded-lg border bg-bg/60 px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-ink/35 focus:border-clay'

function inputClass(hasError) {
  return `${inputBase} ${hasError ? 'border-clay' : 'border-ink/15'}`
}

export default function Contact() {
  const { form, errors, touched, submitted, handleChange, handleBlur, handleSubmit, reset } =
    useReservationForm()

  const fieldProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': touched[name] && errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Coluna de informações */}
        <div>
          <SectionTitle
            eyebrow="Reserva"
            title="Garanta seu lugar"
            subtitle="Reservamos por horário para manter o ambiente calmo. Responderemos por e-mail para confirmar."
          />
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-medium">Endereço</dt>
              <dd className="mt-1 text-ink/70">{cafe.address}</dd>
            </div>
            <div>
              <dt className="font-medium">Horários</dt>
              <dd className="mt-1 space-y-0.5 text-ink/70">
                {cafe.hours.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-medium">Contato</dt>
              <dd className="mt-1 text-ink/70">
                {cafe.phone} · {cafe.email}
              </dd>
            </div>
          </dl>
        </div>

        {/* Formulário */}
        <div className="rounded-2xl border border-ink/10 bg-surface/50 p-6 sm:p-8">
          {submitted ? (
            <div className="animate-fade-in text-center" role="status">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/20 text-2xl">
                ✓
              </div>
              <h3 className="mt-4 font-display text-xl">Reserva enviada!</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-ink/70">
                Obrigado, {form.name.split(' ')[0]}. Enviamos os detalhes para{' '}
                <span className="text-ink">{form.email}</span> e confirmaremos em breve.
              </p>
              <button type="button" onClick={reset} className="btn-outline mt-6">
                Fazer outra reserva
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <Field label="Nome completo" name="name" error={errors.name} touched={touched.name}>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Seu nome"
                  className={inputClass(touched.name && errors.name)}
                  {...fieldProps('name')}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="E-mail" name="email" error={errors.email} touched={touched.email}>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="voce@email.com"
                    className={inputClass(touched.email && errors.email)}
                    {...fieldProps('email')}
                  />
                </Field>
                <Field label="Telefone" name="phone" error={errors.phone} touched={touched.phone}>
                  <input
                    type="tel"
                    autoComplete="tel"
                    placeholder="(11) 91234-5678"
                    className={inputClass(touched.phone && errors.phone)}
                    {...fieldProps('phone')}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Data" name="date" error={errors.date} touched={touched.date}>
                  <input
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    className={inputClass(touched.date && errors.date)}
                    {...fieldProps('date')}
                  />
                </Field>
                <Field label="Horário" name="time" error={errors.time} touched={touched.time}>
                  <input
                    type="time"
                    className={inputClass(touched.time && errors.time)}
                    {...fieldProps('time')}
                  />
                </Field>
                <Field label="Pessoas" name="guests">
                  <select className={inputClass(false)} {...fieldProps('guests')}>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Observações (opcional)" name="notes">
                <textarea
                  rows={3}
                  placeholder="Alguma preferência ou restrição alimentar?"
                  className={`${inputClass(false)} resize-none`}
                  {...fieldProps('notes')}
                />
              </Field>

              <button type="submit" className="btn-primary w-full">
                Enviar reserva
              </button>
              <p className="text-center text-xs text-ink/50">
                Projeto fictício — nenhum dado é enviado a um servidor.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
