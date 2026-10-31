/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas com divisórias, e
 * qualquer outro número deixa célula órfã.
 *
 * Bloco navy com o CTA à esquerda e, à direita, os 6 dados em dois grupos.
 *
 * Os 6 dados são os fatores de escolha do gerador citados no site da Safe Mine. A
 * potência entra como opcional: quem não a sabe pede cotação descrevendo a operação.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dados para cotação',
  title: 'Não sabe a potência exata?',
  text: 'Informe o que souber da operação. A Safe Mine avalia carga, regime de uso e ambiente e indica o gerador adequado.',
  microcopy: 'Você pode pedir cotação sem saber a potência.',
  /** Rótulo do botão do bloco navy. */
  ctaLabel: 'Receber indicação e cotação',
  /** Lado claro: os 3 primeiros itens são o essencial; os demais, "se souber". */
  list: {
    title: 'O que ajuda na sua cotação',
    text: 'Comece pela operação. Os dados técnicos podem ficar para depois.',
    optionalLabel: 'Se souber, envie também',
    optionalFrom: 3,
  },
  items: [
    {
      icon: 'bolt',
      label: 'Perfil de carga',
      hint: 'O que o gerador vai alimentar, incluindo partidas de motores.',
    },
    { icon: 'refresh', label: 'Regime de uso', hint: 'Principal, emergência ou temporário' },
    { icon: 'pin', label: 'Ambiente', hint: 'Local e condições da operação' },
    { icon: 'zap', label: 'Potência', hint: 'em kVA' },
    { icon: 'clock', label: 'Autonomia', hint: 'horas de operação contínua' },
    { icon: 'truck', label: 'Mobilidade', hint: 'fixo ou entre frentes' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  ctaLabel: string
  list: { title: string; text: string; optionalLabel: string; optionalFrom: number }
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
