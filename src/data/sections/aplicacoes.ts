/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3, ícone e título. O card inteiro é o CTA. Estrutura da seção
 * "Segmentos atendidos" das LPs SEIVE, nas cores da Safe Mine, como na LP de torres
 * (03/11/2026, pedido do usuário).
 *
 * As quatro aplicações respondem aos termos que a campanha compra: mineração, obras,
 * indústria e energia de emergência. Agronegócio, operações florestais e infraestrutura
 * entram na faixa abaixo dos cards. Fotos da página de geradores do site da Safe Mine;
 * o site não tem foto em frente de lavra, por isso o primeiro card mostra o gerador
 * sendo içado para instalação.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  icon: IconName
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Energia confiável para cada operação',
  /** Trecho do título em verde. */
  titleHighlight: 'cada operação',
  text: 'Fonte principal, de emergência ou temporária: cada operação pede sua potência, regime de uso e autonomia.',
  /** Chamada no pé de cada card (o card inteiro é o botão). */
  cardCta: 'Cotar para esta aplicação',
  /** Faixa abaixo dos cards, para quem não se vê nas 4 aplicações. */
  help: {
    title: 'Sua aplicação não está aqui?',
    text: 'Agronegócio, floresta ou infraestrutura? Descreva a operação e a Safe Mine indica o gerador.',
  },
  items: [
    {
      id: 'frentes-de-lavra',
      icon: 'mountain',
      label: 'Frentes de lavra',
      description: 'Mineração em locais remotos, longe da rede elétrica.',
      photo: { src: app1, alt: 'Gerador Atlas Copco içado por guindaste com técnico orientando' },
    },
    {
      id: 'canteiros-de-obra',
      icon: 'building',
      label: 'Canteiros de obra',
      description: 'Energia temporária para canteiros, frentes e serviços de obra.',
      photo: { src: app2, alt: 'Gerador Atlas Copco em canteiro de obra' },
    },
    {
      id: 'plantas-industriais',
      icon: 'factory',
      label: 'Plantas industriais',
      description: 'Instalações e equipamentos de plantas industriais.',
      photo: { src: app3, alt: 'Gerador Atlas Copco ao lado de subestação de energia' },
    },
    {
      id: 'emergencia-contingencia',
      icon: 'power',
      label: 'Emergência e contingência',
      description: 'Fonte de reserva para processos e equipamentos que não podem parar.',
      photo: { src: app4, alt: 'Quatro geradores Atlas Copco lado a lado junto a uma subestação' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  cardCta: string
  help: { title: string; text: string }
  items: readonly [Application, Application, Application, Application]
}
