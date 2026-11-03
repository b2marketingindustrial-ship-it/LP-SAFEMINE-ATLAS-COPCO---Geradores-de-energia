/**
 * Dados da seção "Perguntas frequentes" (biblioteca B2, fase: autoridade).
 *
 * Entrou em 03/11/2026, a pedido do usuário, entre os recursos e os diferenciais, como na LP
 * de torres. Respostas só com dados já usados na LP: ficha (linhas, potências, PMS), página de
 * geradores do site da Safe Mine (fatores de escolha) e o endereço.
 * Pendente: a lista real de dúvidas do comercial (prazo, garantia, faturamento), como pede a
 * biblioteca e a ficha.
 */
export interface Question {
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'O que perguntam antes de cotar',
  /** Trecho do título em verde. */
  titleHighlight: 'antes de cotar',
  text: 'As dúvidas mais comuns sobre os geradores QAS e QES e o atendimento. Não encontrou a sua? Fale com a nossa equipe.',
  items: [
    {
      question: 'Preciso saber a potência para pedir cotação?',
      answer:
        'Não. Informe o que o gerador vai alimentar, o regime de uso e o local. A Safe Mine avalia carga, autonomia e ambiente e indica o modelo.',
    },
    {
      question: 'Qual a diferença entre as linhas QAS e QES?',
      answer:
        'A QAS é a linha premium, fabricada no Brasil, para condições severas, de 24 a 550 kVA e com operação em paralelo. A QES tem custo competitivo, manutenção simples e implantação rápida, de 36 a 153 kVA.',
    },
    {
      question: 'O gerador serve como fonte principal ou de emergência?',
      answer:
        'Sim. As linhas QAS e QES atendem como fonte principal, de emergência ou temporária. O regime de uso entra na escolha do modelo e da potência.',
    },
    {
      question: 'Como escolher a potência do gerador?',
      answer:
        'A potência é só um dos fatores. Perfil de carga, incluindo partidas de motores, regime de uso, ambiente, mobilidade e autonomia também definem o modelo.',
    },
    {
      question: 'Os geradores QAS podem operar em paralelo?',
      answer:
        'Sim. Os QAS operam em paralelo, com sistema de gerenciamento de energia (PMS) conforme a configuração, para atender cargas maiores.',
    },
    {
      question: 'Onde fica a Safe Mine?',
      answer:
        'Em Contagem, na Grande Belo Horizonte. O atendimento é para operações em Minas Gerais, pelo formulário ou pelo WhatsApp.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Question[]
}
