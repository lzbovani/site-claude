# Ronronar · Cat Café 🐈☕

Site multi-página fictício de uma cafeteria de gatos ("cat café"), com design
minimalista, **modo claro/escuro** e navegação SPA. Projeto de estudo.

> Stack: **React + Vite + TailwindCSS + React Router**

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
```

Outros comandos:

```bash
npm run build    # gera a versão de produção em dist/
npm run preview  # serve o build localmente
```

## Páginas

| Rota         | Página   | Destaques                                             |
| ------------ | -------- | ----------------------------------------------------- |
| `/`          | Home     | Hero, destaques, gatos residentes, depoimentos, CTA   |
| `/cardapio`  | Cardápio | Filtro interativo por categoria (sem reload)          |
| `/sobre`     | Sobre    | História, missão e os 4 gatos residentes              |
| `/galeria`   | Galeria  | Grid com hover + **lightbox** (teclado + swipe)       |
| `/contato`   | Contato  | Formulário de reserva com validação client-side       |
| `*`          | 404      | Página de erro temática                               |

## Funcionalidades

- **Modo claro/escuro** com toggle, persistência em `localStorage`, detecção da
  preferência do sistema e sem flash na carga (script inline no `index.html`).
- **Filtro de cardápio** por categoria, sem recarregar a página.
- **Formulário de reserva** com validação de nome, e-mail, telefone (DDD + número),
  data (não permite passado) e horário.
- **Lightbox acessível**: fecha no Esc / clique no fundo, navega por setas do
  teclado e por *swipe* no toque, prende o foco (focus-trap) e o devolve ao
  thumbnail ao fechar.
- **Micro-interações** com `IntersectionObserver` (fade-up ao rolar), respeitando
  `prefers-reduced-motion`.
- **Placeholders 100% SVG** (gatos e "fotos") — sem imagens externas nem
  dependência de rede.

## Estrutura

```
src/
├── main.jsx · App.jsx · index.css
├── data/        # fonte única de conteúdo (café, cardápio, gatos, etc.)
├── hooks/       # useReservationForm, useTheme
├── utils/       # formatação de moeda
├── components/  # Layout, Navbar, Footer, ThemeToggle, Lightbox, cards...
└── pages/       # Home, Menu, About, Gallery, Contact, NotFound
```

## Design

Paleta reduzida (neutros quentes + acentos terracota/sage) via **tokens
semânticos em CSS variables** (`--bg`, `--surface`, `--ink`), que trocam de valor
no modo escuro. Tipografia: Fraunces (títulos) + Inter (texto).

---

Projeto fictício, apenas para fins de estudo. Nenhum dado é enviado a servidores.
