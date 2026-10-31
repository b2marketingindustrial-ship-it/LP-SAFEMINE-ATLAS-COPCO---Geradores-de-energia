/**
 * Logos do carrossel de marcas — primitivo opcional.
 *
 * Vazio nesta LP: a logo da Atlas Copco está liberada, mas o arquivo em alta não chegou
 * (`marcas.usarLogos: false`), e o carrossel só renderiza com 4 logos ou mais. O
 * componente fica porque a seção `linhas` declara o primitivo `BrandCarousel`.
 */
import type { ImageMetadata } from 'astro'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = []
