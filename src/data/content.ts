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

/** Ponto da caixa de ícones do hero: `line1` e `line2` ficam sempre em duas linhas. */
export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
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
    widths: [640, 1024, 1536, 1981],
    sizes: '(min-width: 1024px) 1700px, 100vw',
  },
  points: [
    { icon: 'bolt', line1: 'Geradores QAS', line2: '24 a 550 kVA' },
    { icon: 'wrench', line1: 'Geradores QES', line2: '36 a 153 kVA' },
    { icon: 'clock', line1: 'Fonte principal,', line2: 'emergência ou temporária' },
  ],
  /** Aviso sob os botões: os dados acima variam por modelo e configuração. */
  note: 'Potências, tensões e configurações dependem do modelo.',
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  highlight: string
  banner: Photo & { widths: readonly number[]; sizes: string }
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
  note: string
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
