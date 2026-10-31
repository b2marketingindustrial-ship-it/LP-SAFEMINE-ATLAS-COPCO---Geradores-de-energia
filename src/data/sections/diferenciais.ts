/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Frase de autoridade e CTA ao lado de uma foto, e os 5 diferenciais num painel navy.
 * São 5 exatos: o painel é `lg:grid-cols-5`. Sem a pessoa recortada do padrão.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Diferenciais ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada); a segunda sai em verde. 3–6 palavras no total. */
  titleLines: ['Sua operação', 'não pode parar.'],
  text: `A ${site.brandShort} entende a operação antes de indicar o gerador, avaliando perfil de carga, regime de uso, autonomia e ambiente.`,
  /** Linha de apoio sob o botão. */
  help: 'Informe o que souber. Nós ajudamos na escolha do gerador.',
  scene: {
    src: cenario,
    alt: 'Técnico com equipamento de proteção operando o painel de um gerador Atlas Copco',
  },
  reasons: [
    {
      icon: 'user',
      title: 'Atendimento consultivo',
      description: 'Entende a operação antes de indicar o gerador.',
    },
    {
      icon: 'layers',
      title: 'Operação em paralelo',
      description: 'Geradores QAS em paralelo, com PMS conforme configuração.',
    },
    {
      icon: 'shield',
      title: 'Contenção de 110%',
      description: 'Chassi com contenção de fluidos de 110%.',
    },
    {
      icon: 'clock',
      title: 'Intervalo de 500 horas',
      description: 'Intervalo de serviço de 500 h, conforme configuração.',
    },
    {
      icon: 'factory',
      title: 'Fabricação nacional',
      description: 'Linha QAS fabricada no Brasil.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  help: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
