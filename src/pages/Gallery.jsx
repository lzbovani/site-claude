import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Placeholder from '../components/Placeholder.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { galleryItems } from '../data/gallery.js'

// Classes de span para o layout masonry-like em grid.
const spanClass = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="container-page py-16 sm:py-20">
      <SectionTitle
        eyebrow="Galeria"
        title="Um passeio pela casa"
        subtitle="Clique em qualquer imagem para ampliar. Use as setas do teclado para navegar."
      />

      <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4">
        {galleryItems.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={`group relative overflow-hidden rounded-2xl focus-visible:ring-2 ${
              spanClass[item.span] || ''
            }`}
            aria-label={`Ampliar: ${item.caption}`}
          >
            <Placeholder
              tone={item.tone}
              caption={item.caption}
              className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay com legenda no hover */}
            <span className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/70 to-transparent p-4 text-left text-sm font-medium text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={galleryItems}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  )
}
