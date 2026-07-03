import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'

// Code-splitting por rota: cada página vira um chunk carregado sob demanda.
// A casca (Layout) e o Suspense ficam no bundle inicial; o conteúdo da rota
// é buscado quando o usuário navega até ela.
const Home = lazy(() => import('./pages/Home.jsx'))
const Menu = lazy(() => import('./pages/Menu.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cardapio" element={<Menu />} />
        <Route path="sobre" element={<About />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="contato" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
