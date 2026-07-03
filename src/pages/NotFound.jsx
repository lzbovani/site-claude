import { Link } from 'react-router-dom'
import CatAvatar from '../components/CatAvatar.jsx'

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-28 text-center">
      <div className="w-28 overflow-hidden rounded-3xl border border-ink/10">
        <CatAvatar coat="#9a7b63" className="w-full" />
      </div>
      <p className="eyebrow mt-8">Erro 404</p>
      <h1 className="mt-2 text-3xl font-medium sm:text-4xl">Esse cantinho não existe</h1>
      <p className="mt-3 max-w-sm text-ink/70">
        Deve ter sido um gato que derrubou a página. Vamos voltar para um lugar conhecido?
      </p>
      <Link to="/" className="btn-primary mt-8">
        Voltar para a Home
      </Link>
    </section>
  )
}
