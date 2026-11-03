/**
 * Dados da seção "Recursos QAS e QES" (fase: prova). Seção própria, trazida da LP de torres
 * em 03/11/2026 a pedido do usuário, acima do FAQ.
 *
 * Fonte: página de geradores do site da Safe Mine
 * (safeminesolucoes.com.br/produtos/geradores-de-energia/15), lida em 03/11/2026:
 * - QAS: operação em paralelo e sistema de gerenciamento de energia, chassi Spillage Free
 *   (contenção de líquidos), carenagem com pintura especial contra intempéries, estrutura que
 *   facilita transporte, instalação e manutenção;
 * - QES: bacia de contenção, filtragem para serviço pesado, acesso facilitado para manutenção,
 *   intervalos de até 500 h conforme configuração.
 * Os 110% da contenção e o PMS vêm da ficha (`docs/FICHA-LP.md`). O site da Atlas Copco
 * (pt-BR) devolveu 404 nas páginas de geradores móveis nesse dia.
 *
 * `scope` diz a que linha o recurso se aplica: vários não valem para as duas.
 */
import type { IconName } from '@data/icons'

export interface Feature {
  icon: IconName
  title: string
  description: string
  scope: string
}

export const features = {
  eyebrow: 'Recursos QAS e QES',
  title: 'Recursos que fazem diferença no campo',
  /** Trecho do título em verde. */
  titleHighlight: 'no campo',
  text: 'O que as linhas QAS e QES trazem para somar potência, conter vazamentos e aguentar o ambiente da operação.',
  items: [
    {
      icon: 'layers',
      title: 'Operação em paralelo',
      description:
        'Dois ou mais geradores somam potência, com sistema de gerenciamento de energia (PMS).',
      scope: 'Linha QAS · conforme configuração',
    },
    {
      icon: 'droplet',
      title: 'Chassi Spillage Free',
      description: 'Contenção de 110% dos líquidos: vazamentos ficam retidos no próprio chassi.',
      scope: 'Linha QAS · QES com bacia de contenção',
    },
    {
      icon: 'shield',
      title: 'Carenagem para intempéries',
      description: 'Pintura especial que protege a carenagem contra chuva e sol no campo aberto.',
      scope: 'Linha QAS',
    },
    {
      icon: 'clock',
      title: 'Intervalos de até 500 h',
      description: 'Menos paradas da operação para manutenção programada do gerador.',
      scope: 'Linha QES · conforme configuração',
    },
    {
      icon: 'gear',
      title: 'Filtragem para serviço pesado',
      description: 'Sistema de filtragem dimensionado para ambientes de serviço pesado.',
      scope: 'Linha QES',
    },
    {
      icon: 'truck',
      title: 'Transporte e instalação',
      description: 'Estrutura pensada para mover, instalar e acessar o gerador com facilidade.',
      scope: 'Linhas QAS e QES',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Feature[]
}
