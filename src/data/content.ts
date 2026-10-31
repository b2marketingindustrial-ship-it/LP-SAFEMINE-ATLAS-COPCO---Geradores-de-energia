/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

/** Linha da faixa "Encontre a linha" no pé do hero. Cada card é um CTA. */
export interface HeroLine {
  id: string
  icon: IconName
  title: string
  /** Dado de destaque sob o título; mais de um item entra separado por divisória. */
  spec: readonly string[]
  description: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicitar cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu gerador',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
  /** Link do hero que rola até a seção de linhas. Não é CTA de atendimento. */
  findLine: 'Encontrar meu gerador',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  /** Âncoras da barra (desvio do padrão herdado da LP de compressores): rolam até as seções. */
  nav: [
    { id: 'geradores', label: 'Geradores', href: '#linhas' },
    { id: 'aplicacoes', label: 'Aplicações', href: '#aplicacoes' },
  ],
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Energia para operações que não podem parar',
  title: `${site.product} para ${site.context}`,
  /** Trecho do H1 em verde. */
  highlight: 'obras e mineração',
  text: 'Geradores a diesel QAS e QES, de 24 a 550 kVA, como fonte principal, de emergência ou temporária. Distribuidora autorizada em Minas Gerais, a Safe Mine entende sua operação e indica o modelo certo.',
  banner: {
    src: heroBg,
    alt: 'Geradores Atlas Copco de quatro portes sobre terreno de mineração',
    /** Larguras geradas: as mesmas no <Picture> do Hero e no preload do Layout. */
    widths: [480, 768, 1020],
    sizes: '(min-width: 1024px) 46vw, 100vw',
  },
  help: {
    title: 'Não sabe a potência exata?',
    text: 'Descreva a operação. Nós indicamos o modelo.',
  },
  lines: {
    title: 'Encontre o gerador para a sua demanda',
    note: 'Potências, tensões e configurações dependem do modelo.',
    items: [
      {
        id: 'qas-24-105',
        icon: 'bolt',
        title: 'QAS 24 a 105',
        spec: ['24 a 101,8 kVA'],
        description: 'Obras, frentes de serviço e operações remotas.',
      },
      {
        id: 'qas-130-180',
        icon: 'building',
        title: 'QAS 130 e 180',
        spec: ['Até 171,3 kVA'],
        description: 'Plantas industriais e demandas maiores.',
      },
      {
        id: 'qas-225-550',
        icon: 'factory',
        title: 'QAS 225 a 550',
        spec: ['Até 550 kVA'],
        description: 'Grandes cargas e operação em paralelo.',
      },
      {
        id: 'qes-35-140',
        icon: 'wrench',
        title: 'QES 35 a 140',
        spec: ['36 a 153 kVA'],
        description: 'Custo competitivo e implantação rápida.',
      },
    ],
  },
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  highlight: string
  banner: Photo & { widths: readonly number[]; sizes: string }
  help: { title: string; text: string }
  lines: {
    title: string
    note: string
    items: readonly [HeroLine, HeroLine, HeroLine, HeroLine]
  }
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Cotação de geradores',
  title: 'Fale com quem entende de geradores de energia.',
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'geradores de energia.',
  text: 'Compare as linhas QAS e QES e solicite cotação conforme sua aplicação. Atendimento em Minas Gerais: preencha o formulário ou fale direto conosco pelo WhatsApp.',
  /** Linha sob o botão de WhatsApp. */
  help: 'Não sabe a potência exata? Basta descrever a operação.',
  trust: [
    { icon: 'users', label: 'Atendimento consultivo' },
    { icon: 'pin', label: 'Atendimento em Minas Gerais' },
    { icon: 'badge-check', label: 'Distribuidor autorizado Atlas Copco' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.',
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  help: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
