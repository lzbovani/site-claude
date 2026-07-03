// Formatação de moeda em Real brasileiro.
const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatPrice(value) {
  return brl.format(value)
}
