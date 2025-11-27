import { Module } from '../../types';
import { FileText } from '../../components/icons';

export const M10: Module = {
    id: 'm10',
    title: 'Módulo 10: Criando seu Plano de Ação em IA',
    subtitle: 'Workshop prático para desenhar a implementação da IA em seu negócio.',
    icon: FileText,
    lessons: [
      {
          id: 'm10-l1',
          title: 'Lição 1: Consolidando o Aprendizado',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Chegamos ao módulo final do nosso curso! Nas últimas lições, você viajou do conceito à prática, entendendo o que é a Inteligência Artificial, onde aplicá-la no seu negócio e como medir o sucesso de suas iniciativas. Agora, é hora de transformar todo esse conhecimento em um plano acionável e concreto.\n\nO objetivo deste módulo não é aprender mais teoria, mas sim usar os frameworks e conceitos que vimos para construir o rascunho do seu primeiro projeto de IA. Lembre-se sempre da filosofia principal: comece pequeno, foque em uma "vitória rápida" para gerar momentum e construa o futuro a partir daí.',
          quiz: [{ question: 'Qual o principal objetivo deste módulo final?', options: ['Aprender uma nova tecnologia de IA', 'Criar um plano de ação prático para seu primeiro projeto de IA', 'Rever todas as lições anteriores'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l2',
          title: 'Lição 2: Workshop - Passo 1: A "Vitória Rápida"',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Vamos começar nosso workshop prático. Volte à Lição 3 do Módulo 1 e ao framework "Mapear, Caçar, Priorizar". Sua primeira tarefa é definir claramente qual será a sua "Vitória Rápida".\n\nPara isso, preencha algumas informações básicas. Primeiro, defina a Área do Negócio, como "Atendimento ao Cliente". Em seguida, identifique o Problema ou a Dor principal, por exemplo: "Gastamos muito tempo respondendo às mesmas 10 perguntas sobre frete e devoluções". Com base nisso, proponha a Solução de IA, como "Implementar um chatbot no site e no Instagram para responder a essas perguntas frequentes". Por fim, justifique por que essa é uma Vitória Rápida, destacando o alto impacto na liberação de tempo da equipe e o baixo esforço de implementação com ferramentas prontas de mercado, como o ManyChat.',
          quiz: [{ question: 'Uma "Vitória Rápida" é um projeto que tem:', options: ['Baixo impacto e baixo esforço', 'Alto impacto e baixo esforço', 'Alto impacto e alto esforço'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l3',
          title: 'Lição 3: Workshop - Passo 2: O Business Case',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Agora que você tem sua ideia de "Vitória Rápida", vamos transformá-la em uma proposta de negócio, esboçando o Retorno sobre o Investimento (ROI), como vimos na Lição 9 do Módulo 1.\n\nVamos usar o nosso exemplo do chatbot. Primeiro, estime os Custos. A assinatura da ferramenta pode custar R$2.400 por ano, mais R$1.000 em horas de configuração, totalizando R$3.400. Em seguida, estime os Ganhos. Se o chatbot economizar 20 horas por mês da equipe de suporte, a um custo de R$50 por hora, isso representa uma economia de R$1.000 por mês, ou R$12.000 por ano.\n\nCom esses números, o cálculo do ROI seria (12.000 - 3.400) dividido por 3.400, o que resulta em 252%. Não se esqueça de listar também os Benefícios Indiretos, como o atendimento 24/7 e o aumento da satisfação do cliente. Este simples cálculo já transforma sua ideia em um argumento de negócio sólido.',
          quiz: [{ question: 'Qual o objetivo de calcular o ROI do seu projeto?', options: ['Apenas para cumprir uma formalidade', 'Para justificar o investimento e mostrar o valor financeiro da iniciativa', 'Para tornar o projeto mais caro'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l4',
          title: 'Lição 4: Workshop - Passo 3: Checklist de Ética',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Com a ideia e o business case em mãos, é hora de garantir que sua solução seja responsável. Passe sua ideia pelo framework T.H.I.N.K., que vimos na Lição 4 do Módulo 1.\n\nUsando nosso exemplo do chatbot, a análise seria a seguinte. Para ser Transparente, o chatbot deve se apresentar como um assistente de IA. Para garantir um Humano no comando, deve haver um botão claro para "Falar com um humano". Para ser Inclusivo, a linguagem do chatbot deve ser simples e acessível a todos. Para ser Necessário, o chatbot só deve pedir dados essenciais para resolver a dúvida, como o número do pedido. E para ter o Consentimento conhecido, deve haver um aviso sobre como a conversa pode ser armazenada.\n\nVerificar esses pontos garante que sua solução não seja apenas útil, mas também confiável e ética.',
          quiz: [{ question: 'No checklist de ética para um chatbot, qual ponto garante que o cliente não fique preso conversando com o robô?', options: ['Transparência', 'Humano no Comando (ter uma opção para falar com uma pessoa)', 'Inclusividade'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l5',
          title: 'Lição 5: Workshop - Passo 4: O Plano de Ação',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Agora, vamos transformar a ideia em um mini-projeto com os próximos passos claros e definidos. Um plano de ação para o nosso chatbot, por exemplo, poderia ser dividido nas próximas quatro semanas.\n\nNa Semana 1, o foco seria pesquisar três ferramentas de chatbot, como o ManyChat e o Intercom, e escolher uma, além de mapear as 10 perguntas mais frequentes do suporte. Na Semana 2, o objetivo seria configurar a ferramenta, escrever as respostas para as perguntas e testar tudo internamente. Na Semana 3, lançaríamos o chatbot no site em fase beta e monitoraríamos as conversas para coletar dados. Finalmente, na Semana 4, analisaríamos os resultados, coletaríamos feedback e faríamos os ajustes necessários antes de lançar em outros canais, como o Instagram.\n\nUm plano simples como este torna o projeto real, gerenciável e com um cronograma claro.',
          quiz: [{ question: 'Qual o benefício de criar um plano de ação dividido em semanas?', options: ['Tornar o projeto mais complicado', 'Tornar o projeto gerenciável e com passos claros', 'Atrasar o início do projeto'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l6',
          title: 'Lição 6: Workshop - Passo 5: Pessoas e Cultura',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A tecnologia é apenas metade da equação para o sucesso de um projeto de IA. A outra metade, e muitas vezes a mais importante, são as pessoas. Use o framework C.A.L.M.A., que vimos no Módulo 1, para planejar a gestão da mudança.\n\nAo planejar seu projeto, faça algumas perguntas-chave. Como e quando vamos comunicar sobre o novo chatbot para a equipe de suporte? Como vamos explicar que ele é uma ferramenta para ajudá-los, não para substituí-los? Que treinamento a equipe precisa para aprender a usar a nova ferramenta e a supervisionar as conversas? E como o papel do agente de suporte mudará, por exemplo, de respondedor de perguntas repetitivas para solucionador de problemas complexos?\n\nPlanejar o lado humano do projeto é crucial para evitar resistência, garantir a adoção da nova tecnologia e maximizar seu impacto positivo.',
          quiz: [{ question: 'Ao introduzir uma nova ferramenta de IA, qual é o aspecto mais importante a ser gerenciado?', options: ['A cor dos botões na interface.', 'O aspecto humano: comunicação, treinamento e adaptação cultural.', 'Manter o projeto em segredo da equipe.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l7',
          title: 'Lição 7: Workshop - Passo 6: Ferramentas e Orçamento',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Agora, vamos detalhar os recursos necessários para o nosso projeto, voltando à decisão de "Comprar, Construir ou Adaptar" da Lição 6 do Módulo 1. Para o nosso exemplo de chatbot, que é uma "Vitória Rápida", a decisão é claramente "Comprar" uma solução pronta.\n\nVamos detalhar os custos. A ferramenta escolhida, como o ManyChat, pode ter um custo de assinatura de R$900 por ano. Além disso, precisamos considerar os recursos humanos internos. Quem vai configurar a ferramenta? Digamos que seja o analista de marketing, e ele levará 10 horas. Quem será o responsável pela manutenção? Talvez a mesma pessoa, dedicando 2 horas por semana. A soma do custo da ferramenta com o custo das horas da sua equipe lhe dará o "Custo do Investimento" real para o cálculo do ROI, tornando sua proposta ainda mais precisa.',
          quiz: [{ question: 'Para um projeto de "Vitória Rápida" como um chatbot simples, qual é geralmente a melhor abordagem?', options: ['Construir a tecnologia do zero.', 'Comprar uma solução SaaS pronta.', 'Adaptar um modelo de IA complexo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l8',
          title: 'Lição 8: Apresentando seu Projeto - O Pitch de IA',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Para obter a aprovação e o orçamento da liderança, você precisa "vender" seu projeto de forma eficaz. Ninguém tem tempo para um relatório de 50 páginas. A melhor abordagem é criar um pitch de uma página, conciso e direto ao ponto.\n\nA estrutura desse pitch deve conter seis elementos. Comece com o Problema, descrevendo a dor de negócio em uma frase. Em seguida, apresente a Solução, sua proposta de IA. Crie um senso de urgência explicando Por que Agora. Apresente o Impacto, mostrando os números do ROI que você calculou. Detalhe os Recursos Necessários, tanto financeiros quanto de equipe. Por fim, mostre o Plano de Ação das próximas semanas.\n\nUm resumo claro, focado em dados e que demonstra o valor para o negócio é a melhor maneira de convencer a diretoria a apoiar sua iniciativa.',
          quiz: [{ question: 'Qual é o elemento mais persuasivo em um pitch de projeto de IA para a liderança?', options: ['Usar o máximo de jargão técnico possível.', 'Apresentar um caso de negócio claro, com foco no problema, na solução e no ROI.', 'Um design de apresentação muito elaborado.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l9',
          title: 'Lição 9: Gerenciando um Projeto de IA - Metodologia Ágil',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Projetos de IA são diferentes de projetos de software tradicionais, pois envolvem muita experimentação e incerteza. Por isso, as metodologias ágeis, como o Scrum, são muito mais adequadas para gerenciá-los.\n\nEm vez de um grande plano inicial, o trabalho é dividido em "sprints", que são ciclos curtos de uma a quatro semanas, onde a equipe foca em entregar uma pequena parte funcional do projeto. Ao final de cada sprint, a equipe testa o resultado, aprende com ele e planeja o próximo ciclo. Essa abordagem tem muitas vantagens para projetos de IA. Ela permite experimentar e errar rápido, se adapta a mudanças e, o mais importante, entrega valor mais cedo. Um chatbot que responde a três perguntas na segunda semana é muito melhor do que esperar seis meses por um chatbot perfeito. Adote uma mentalidade de "testar e aprender" em vez de "planejar e executar".',
          quiz: [{ question: 'Por que a metodologia ágil é recomendada para projetos de IA?', options: ['Porque ela evita a necessidade de planejamento.', 'Porque ela lida bem com a incerteza e a necessidade de experimentação, entregando valor em ciclos curtos.', 'Porque é a metodologia mais barata.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l10',
          title: 'Lição 10: Parabéns e Próximos Passos',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: `Parabéns! Você completou o curso "IA Sem Jargões: Acelerador de Negócios". Ao longo desta jornada, você adquiriu uma visão 360 graus de como a Inteligência Artificial pode transformar sua empresa, desde a definição da estratégia até a execução prática de um projeto.\n\nO conhecimento mais importante que você leva não é sobre a tecnologia em si, mas sobre a mentalidade necessária para ter sucesso com ela: sempre começar pelo problema de negócio, focar na geração de valor, agir de forma ética e, acima de tudo, capacitar sua equipe para essa nova era.\n\nA jornada da IA é uma maratona, não uma corrida de 100 metros. Continue experimentando, aprendendo e, o mais importante, aplicando o que você aprendeu para construir um negócio mais inteligente, eficiente e preparado para o futuro. O seu novo sócio estratégico está pronto para trabalhar.`,
          quiz: [{ question: 'Qual a mentalidade mais importante para o sucesso com IA?', options: ['Focar apenas na tecnologia mais nova', 'Começar pelo problema de negócio e focar em gerar valor', 'Implementar a IA o mais rápido possível sem planejamento'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-l11',
        title: 'Lição 11: Escalando o Sucesso: De "Vitória Rápida" a um Programa de IA',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `O sucesso da sua primeira "vitória rápida" não é o fim da linha, mas sim um catalisador para uma transformação maior. Para escalar, você precisa transformar o sucesso de um projeto isolado em um programa estratégico de IA para toda a empresa.

O primeiro passo é divulgar o sucesso. Comunique o ROI e os benefícios do primeiro projeto para todos, criando um caso de estudo interno. Em seguida, crie um "playbook", documentando o que funcionou para que sirva de guia para futuros projetos. Depois, formalize o seu Centro de Excelência (CoE) em IA, evoluindo o time virtual para uma equipe mais estruturada, com um líder e um orçamento. Por fim, crie um roteiro (roadmap) de iniciativas de IA alinhadas com os objetivos estratégicos da empresa para os próximos 12 a 18 meses, garantindo que os projetos não sejam aleatórios, mas sim parte de uma visão maior.`,
        quiz: [
          { 
            question: 'Qual é o primeiro passo para escalar o sucesso de um projeto de IA?', 
            options: [
                'Contratar uma grande equipe de IA', 
                'Manter o projeto em segredo', 
                'Comunicar os resultados e o valor do projeto para a empresa'
            ], 
            correctAnswerIndex: 2 
          }
        ],
      },
      {
        id: 'm10-l12',
        title: 'Lição 12: O Mindset do Líder de IA: Curiosidade, Coragem e Colaboração',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Liderar na era da Inteligência Artificial exige mais do que apenas conhecimento técnico; exige um novo mindset, baseado em três pilares.

O primeiro é a Curiosidade. A tecnologia muda a uma velocidade estonteante, e a vontade de aprender e experimentar continuamente é a habilidade mais importante para qualquer líder.

O segundo é a Coragem. Haverá falhas no caminho. A coragem para patrocinar projetos que podem não dar certo e para tomar decisões difíceis baseadas em dados, mesmo quando elas contradizem a intuição, é fundamental.

O terceiro pilar é a Colaboração. A IA não é um projeto de TI; é um projeto de negócio. A colaboração radical entre as áreas de negócio, dados e tecnologia é o que separa os projetos bem-sucedidos dos fracassados.

Você, como líder, é o principal agente da transformação. Sua capacidade de inspirar sua equipe, promover uma cultura de dados e liderar com uma visão clara do futuro determinará o sucesso da IA em seu negócio.`,
        quiz: [
          { 
            question: 'Qual das seguintes características NÃO é uma característica essencial do mindset de um líder de IA?', 
            options: [
                'Curiosidade', 
                'Medo de falhar', 
                'Colaboração'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
    ],
};