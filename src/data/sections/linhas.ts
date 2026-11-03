/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 *
 * Aqui são três faixas da linha QAS (11 modelos) e a linha QES (5 modelos): é como os
 * 16 modelos cabem nos 4 cards do layout herdado da LP de compressores. Os cards são
 * claros, e `dark` fica só para o contrato da biblioteca. `features` é posicional:
 * potência standby, tensão, motor. Potência e motor só onde o catálogo documenta: o
 * QAS 225 fica sem número próprio porque o briefing não traz o standby dele.
 *
 * Fotos do site da Safe Mine, em retângulo: o material não tem recorte com fundo
 * transparente. Por isso o card usa object-cover (ver ProductLines.astro).
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import linha4 from '@assets/linhas/linha-4.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Quando escolher esta faixa: aplicação típica, a partir da página de geradores da Safe Mine. */
  idealFor: string
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Linhas QAS e QES',
  title: 'Geradores QAS e QES para cada demanda de energia',
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'cada demanda de energia',
  text: 'QAS, premium e fabricada no Brasil, para condições severas. QES, de custo competitivo e implantação rápida.',
  /** Rótulos das duas primeiras features de cada card. */
  specLabels: ['Standby', 'Tensão'],
  /** Rótulo da linha "quando escolher" de cada card. */
  idealForLabel: 'Indicado para',
  note: 'Potências, tensões e configurações dependem do modelo. Outras potências sob consulta.',
  items: [
    {
      id: 'qas-24-105',
      tag: 'QAS · pequeno porte',
      title: 'QAS 24 a 105',
      description: 'Modelos QAS 24, 40, 55, 70, 85 e 105, da linha premium.',
      photo: { src: linha1, alt: 'Gerador QAS 24 Atlas Copco sobre terreno de terra' },
      features: ['24 a 101,8 kVA', '220 a 440 V', 'Kubota no QAS 24, Perkins no 55 e 105'],
      idealFor: 'Canteiros de obra e frentes remotas, longe da rede.',
      dark: false,
    },
    {
      id: 'qas-130-180',
      tag: 'QAS · médio porte',
      title: 'QAS 130 e 180',
      description: 'Modelos QAS 130 e 180, para demandas intermediárias.',
      photo: { src: linha2, alt: 'Gerador QAS Atlas Copco instalado em base de concreto' },
      features: ['Até 171,3 kVA', '220 a 440 V', 'Perkins no QAS 180'],
      idealFor: 'Plantas industriais e operação em condições severas.',
      dark: false,
    },
    {
      id: 'qas-225-550',
      tag: 'QAS · grande porte',
      title: 'QAS 225 a 550',
      description: 'Modelos QAS 225, 360 e 550, o topo da faixa QAS.',
      photo: { src: linha3, alt: 'Gerador QAS Atlas Copco de grande porte' },
      features: ['Até 550 kVA', '220 a 440 V', 'Scania nos QAS 360 e 550'],
      idealFor: 'Grandes cargas e operação em paralelo.',
      dark: false,
    },
    {
      id: 'qes-35-140',
      tag: 'QES · custo competitivo',
      title: 'QES 35 a 140',
      description: 'Modelos QES 35, 50, 70, 110 e 140, de manutenção simples.',
      photo: { src: linha4, alt: 'Gerador QES Atlas Copco com painel de acesso aberto' },
      features: ['36 a 153 kVA', '220 V', 'Motores Kubota ou Cummins'],
      idealFor: 'Obras e operações temporárias, com custo competitivo.',
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  specLabels: readonly [string, string]
  idealForLabel: string
  note: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
