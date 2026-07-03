import SectionTitle from '../components/SectionTitle.jsx'
import CatCard from '../components/CatCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { cats } from '../data/cats.js'
import { cafe } from '../data/cafe.js'

export default function About() {
  return (
    <>
      {/* HISTÓRIA */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Nossa história"
              title="Começou com um gato e uma cafeteira"
            />
            <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
              <p>
                O {cafe.name} nasceu em 2021, quando a Nina — uma gata resgatada da
                rua — decidiu que a cafeteria de bairro seria seu novo lar. Os
                clientes voltavam menos pelo café e mais pela companhia dela.
              </p>
              <p>
                Aos poucos, três outros gatos chegaram, e a casa se transformou.
                Hoje somos um café de especialidade onde as pessoas vêm desacelerar,
                e onde cada gato tem liberdade para escolher com quem quer sentar.
              </p>
            </div>
          </div>

          <Reveal className="rounded-3xl bg-surface p-8">
            <h3 className="font-display text-xl">Nossa missão</h3>
            <p className="mt-3 text-ink/75 leading-relaxed">
              Oferecer um refúgio calmo no meio da cidade — bom café, silêncio na
              medida certa e o afeto genuíno de gatos resgatados e bem cuidados.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink/70">
              <li className="flex gap-3">
                <span className="text-clay">—</span> Todos os gatos são resgatados,
                castrados e acompanhados por veterinário.
              </li>
              <li className="flex gap-3">
                <span className="text-clay">—</span> Segunda é dia de folga: a casa
                fecha para eles descansarem.
              </li>
              <li className="flex gap-3">
                <span className="text-clay">—</span> Lugares limitados, sempre por
                reserva, para não sobrecarregar o ambiente.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* GATOS RESIDENTES */}
      <section className="border-t border-ink/10 bg-surface/50">
        <div className="container-page py-16 sm:py-20">
          <SectionTitle
            eyebrow="A equipe felina"
            title="Os gatos residentes"
            subtitle="Chegue devagar, deixe que eles venham até você. Cada um tem sua personalidade."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cats.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 80}>
                <CatCard cat={cat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
