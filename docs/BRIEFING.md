# Registro da LP — o que a ficha decidiu e o que a execução fez

> Existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.

## Origem

| Campo                     | Valor                                                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                                                                 |
| Data da ficha             | 2026-10-30                                                                                                                         |
| Versão do padrão          | 2.8.0                                                                                                                              |
| Estrutura                 | cópia da LP de compressores portáteis (repositório `LP-ATLAS-COPCO---Compressores-port-teis`), por pedido do usuário em 30/10/2026 |
| Material bruto do cliente | `docs/briefing-cliente/briefing-safe-mine-geradores.md` (fora do git) e o site safeminesolucoes.com.br                             |
| Campanha                  | `ATC_PESQ_GERADORES_B2B`                                                                                                           |

**Cliente e fabricante.** A Safe Mine Soluções anuncia como distribuidor autorizado Atlas Copco, em Minas Gerais. "Autorizado" saiu da lista de claims proibidos por decisão do usuário registrada no briefing.

## Campanha

| Campo                   | Valor                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal | `gerador de energia industrial` — no H1 e no title                                                                  |
| Área atendida           | Minas Gerais — selo e texto da cotação, hero e meta description                                                     |
| Negativas de oferta     | gerador portátil camping, para casa, residencial, de bicicleta, eólico caseiro, inversor solar doméstico            |
| Claims proibidos        | locação em qualquer forma, manutenção como serviço próprio, fabricante ou filial, canal oficial, cobertura nacional |

| Família           | Bloco que responde | Status                                                         |
| ----------------- | ------------------ | -------------------------------------------------------------- |
| produto-categoria | `linhas`           | coberta                                                        |
| marca             | `linhas`           | coberta                                                        |
| aplicacao         | `aplicacoes`       | coberta                                                        |
| cotacao           | `identificar`      | parcial: sem preço, prazo ou condições, só o pedido de cotação |

## Composição

`linhas` · `identificar` · `aplicacoes` · `diferenciais`, iguais às da LP de compressores. A biblioteca do starter não está nesta cópia: `npm run ficha` e, portanto, `npm run verify` não rodam aqui. A verificação usada é a do CI: `check:lp`, lint, prettier e build. `lp.manifest.json` foi ajustado à mão, só nos assets de `linhas`.

## Desvios herdados da LP de compressores

Header, Hero e os layouts de `linhas`, `identificar`, `aplicacoes`, `diferenciais` e Cotação seguem o mockup aprovado em 29/10/2026 para a LP de compressores. `scripts/check-lp.mjs` confere essas assinaturas. `npm run compose` sobrescreveria as seções com as da biblioteca: não rode sem guardá-las.

## Desvio desta LP

- `ProductLines.astro`: a foto do card passou de `object-contain` com `mix-blend-multiply` para `object-cover`, porque o material não tem foto recortada.
- `src/assets/linhas/marcas.png` virou `linha-4.png`; a especificação foi atualizada no manifesto.

## Linhas nos 4 cards

| Card          | Modelos                     | Standby        | Motor                                |
| ------------- | --------------------------- | -------------- | ------------------------------------ |
| QAS 24 a 105  | QAS 24, 40, 55, 70, 85, 105 | 24 a 101,8 kVA | Kubota no 24; Perkins no 55 e no 105 |
| QAS 130 e 180 | QAS 130, 180                | até 171,3 kVA  | Perkins no 180                       |
| QAS 225 a 550 | QAS 225, 360, 550           | até 550 kVA    | Scania no 360 e no 550               |
| QES 35 a 140  | QES 35, 50, 70, 110, 140    | 36 a 153 kVA   | Kubota ou Cummins                    |

O corte entre as faixas segue os valores documentados no catálogo: QAS 130 e 225 não têm standby próprio no briefing, por isso a segunda faixa termina no QAS 180, cujo valor é conhecido. Motores só aparecem para os modelos que o briefing documenta.

## Assets

| Arquivo                                    | Origem (site da Safe Mine)                        |
| ------------------------------------------ | ------------------------------------------------- |
| `heroBg.png`, `linhas/linha-1`             | foto da família QAS, seção de geradores do site   |
| `linhas/linha-2`, `aplicacoes/aplicacao-4` | `geradores-de-energia-20260811172441`             |
| `linhas/linha-3`, `aplicacoes/aplicacao-3` | `geradores-de-energia-20260811172309`             |
| `linhas/linha-4`, `diferenciais/cenario`   | `geradores-de-energia-20260811172415`             |
| `aplicacoes/aplicacao-1`                   | foto do gerador içado, seção de geradores do site |
| `aplicacoes/aplicacao-2`                   | `geradores-de-energia-20260811172334`             |

Algumas máquinas nas fotos trazem modelos fora da lista da campanha (QAS 500, QES 100, QES 40). Os recortes tiram o rótulo mais legível (QES 40) e os textos alternativos não citam esses modelos. O site não tem foto em frente de lavra.

## Estado da entrega

Pendências em `docs/FICHA-LP.md`. Na Vercel não há o plugin de atendimento: o formulário aparece como shortcode em texto e só o botão flutuante de WhatsApp funciona. Formulário e demais botões dependem da publicação no WordPress, pela branch `wp-build`, como na LP de compressores.

## Desvios do padrão

- **Header:** sem desvio. Restaurado em 01/11/2026 à estrutura fixa 4.1.1 (barra navy sticky, logo em placa pendurada, tagline central, CTA laranja, sem âncoras).
- **Hero:** sem desvio. O Hero da primeira versão (fundo claro, sem a coluna do chat) foi substituído em 01/11/2026 pelo da estrutura fixa 4.1.2: grid `1fr · 270px · 300px`, coluna 2 vazia, slot `shortcode` de 300px, foto de 1700px ancorada na borda do container. A faixa de prioridades e o cartão de ajuda do hero saíram; a nota ficou sob os botões. A foto foi reenquadrada em 1981×900, com o grupo em ~70% da largura.
- **Paleta:** os véus do hero usam o azul `#0a1d4d` da marca no lugar do navy `#001830` do template. O token `accent-orange-light` (`#7ba249`) existe só para o destaque do H1 sobre o fundo escuro.

## Header restaurado ao padrão (01/11/2026)

A pedido do usuário, o Header deixou a barra branca flutuante do mockup de 29/10/2026 e voltou à estrutura fixa 4.1.1, como nas demais LPs da B2: barra navy `sticky`, a placa branca traz o logo da Safe Mine, tagline central "Geradores de energia" e CTA laranja em caixa-alta ("Cotação" no celular). As âncoras do topo saíram. O Hero voltou ao padding do padrão (`py-20 lg:py-24`), já que o header não é mais sobreposto. A assinatura A8 do Header em `scripts/check-lp.mjs` voltou à da estrutura fixa.
