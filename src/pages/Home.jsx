import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import CatCard from '../components/CatCard.jsx'
import Reveal from '../components/Reveal.jsx'
import CatAvatar from '../components/CatAvatar.jsx'
import { cats } from '../data/cats.js'
import { testimonials } from '../data/testimonials.js'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <p className="eyebrow mb-4">Vila Madalena · São Paulo</p>
            <h1 className="text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">
              Um café tranquilo,
              <br />
              em boa companhia.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              No Ronronar, café de especialidade encontra quatro gatos residentes.
              Sente-se, respire fundo e deixe a tarde passar devagar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contato" className="btn-primary">
                Reservar uma mesa
              </Link>
              <Link to="/cardapio" className="btn-outline">
                Ver o cardápio
              </Link>
            </div>
          </div>

          {/* Composição de avatares */}
          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              {cats.map((cat, i) => (
                <div
                  key={cat.id}
                  className={`overflow-hidden rounded-3xl border border-ink/10 ${
                    i % 2 === 0 ? 'translate-y-4' : ''
                  }`}
                >
                  <CatAvatar coat={cat.coat} className="aspect-square w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="border-y border-ink/10 bg-surface">
        <div className="container-page grid gap-8 py-12 sm:grid-cols-3">
          {[
            { title: 'Café de especialidade', text: 'Grãos torrados por parceiros locais, extraídos com cuidado.' },
            { title: '4 gatos residentes', text: 'Resgatados, vacinados e livres para escolher seu colo.' },
            { title: 'Ambiente silencioso', text: 'Sem música alta. Feito para ler, trabalhar ou só existir.' },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <h3 className="font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GATOS */}
      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Quem mora aqui"
            title="Os gatos residentes"
            subtitle="Cada um com seu horário, seu canto favorito e seu jeito de dizer olá."
          />
          <Link to="/sobre" className="btn-outline">
            Conhecer todos
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <CatCard cat={cat} compact />
            </Reveal>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-espresso text-cream">
        <div className="container-page py-20">
          <SectionTitle
            eyebrow="Quem já veio"
            title="Palavras de quem sentou com a gente"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 90}>
                <figure className="h-full rounded-2xl bg-cream/5 p-6">
                  <blockquote className="text-sm leading-relaxed text-cream/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-medium">{t.author}</span>
                    <span className="text-cream/50"> · {t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container-page py-20">
        <div className="rounded-3xl bg-clay/10 px-6 py-14 text-center">
          <h2 className="text-3xl font-medium sm:text-4xl">Sua mesa e seu café esperam.</h2>
          <p className="mx-auto mt-3 max-w-md text-ink/70">
            Reserve com antecedência — o número de lugares é limitado para o conforto dos gatos.
          </p>
          <Link to="/contato" className="btn-primary mt-8">
            Fazer uma reserva
          </Link>
        </div>
      </section>
    </>
  )
}
