import { Module } from '../../types';
import { Sparkles } from '../../components/icons';

export const M6: Module = {
    id: 'm6',
    title: 'Módulo 6: IA Generativa para Criar e Inovar',
    subtitle: 'Como usar ferramentas como ChatGPT para marketing, vendas e produtos.',
    icon: Sparkles,
    lessons: [
      {
          id: 'm6-l1',
          title: 'Lição 1: Além do Marketing - O Impacto no Negócio',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Já vimos como a IA Generativa (GenAI) pode revolucionar a criação de conteúdo de marketing. Agora, vamos explorar seu impacto estratégico em outras áreas fundamentais do negócio.\n\nNa área de Vendas, a GenAI pode criar propostas comerciais e e-mails de follow-up personalizados em questão de segundos. No Desenvolvimento de Produtos, ela atua como uma parceira de brainstorming, ajudando a gerar ideias para novas funcionalidades e a criar nomes para produtos. Para o Recursos Humanos, ela pode elaborar descrições de vagas atraentes e estruturar programas de treinamento. E na área de Estratégia, é possível gerar análises SWOT preliminares com base em dados de mercado, acelerando o planejamento.\n\nA IA Generativa é, em essência, uma ferramenta de produtividade universal para qualquer profissional que trabalhe com informação.',
          quiz: [{ question: 'Além do marketing, em qual outra área a IA Generativa pode ser aplicada?', options: ['Apenas em finanças', 'Vendas, RH, e desenvolvimento de produtos', 'Apenas na diretoria'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l2',
          title: 'Lição 2: A ascensão da IA Multimodal',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Os modelos de IA Generativa mais recentes são multimodais, o que significa que eles podem entender e gerar diferentes tipos de conteúdo, não se limitando apenas ao texto. Essa capacidade amplia drasticamente suas aplicações.\n\nPor exemplo, você pode enviar uma imagem de um prato de comida para o modelo e pedir: "Crie uma receita para este prato". O modelo consegue "ver" a imagem, entender os ingredientes presentes e, a partir daí, gerar o texto da receita passo a passo.\n\nOutra aplicação poderosa é fornecer ao modelo um documento de texto longo e pedir: "Crie uma apresentação de slides sobre este documento". A IA entende o conteúdo do texto e gera a estrutura e o conteúdo para cada slide. Essa capacidade multimodal abre um leque de possibilidades para a automação de tarefas complexas que envolvem diferentes formatos de informação.',
          quiz: [{ question: 'O que significa um modelo de IA ser "multimodal"?', options: ['Ele só funciona em múltiplos computadores', 'Ele pode processar e gerar diferentes tipos de dados, como texto e imagens', 'Ele fala múltiplos idiomas'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l3',
          title: 'Lição 3: Fine-Tuning - Deixando a IA com a cara da sua empresa',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Modelos de linguagem como o GPT foram treinados com um vasto conjunto de dados da internet, o que os torna generalistas. O Fine-Tuning, ou Ajuste Fino, é o processo de pegar um desses modelos pré-treinados e continuar seu treinamento, mas usando os dados específicos da sua empresa, como e-mails, documentos internos e manuais de produtos.\n\nO resultado desse processo é a criação de um modelo de IA que se torna um verdadeiro especialista no seu negócio. Ele aprende o seu tom de voz, conhece seus produtos a fundo e entende o jargão específico da sua indústria.\n\nUm ótimo exemplo é uma empresa de software que pode fazer fine-tuning em um modelo para criar um chatbot de suporte. Esse chatbot, treinado com a documentação técnica da empresa, poderá responder a perguntas complexas sobre o produto com uma precisão muito maior do que um modelo genérico.',
          quiz: [{ question: 'Qual o objetivo do "Fine-Tuning"?', options: ['Tornar o modelo mais rápido', 'Especializar um modelo de IA genérico nos dados e no contexto de uma empresa específica', 'Reduzir o custo do modelo'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l4',
          title: 'Lição 4: O Risco das "Alucinações"',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Um dos maiores riscos ao usar a IA Generativa é o fenômeno da "alucinação". Isso ocorre quando o modelo gera informações que são falsas, mas as apresenta de forma confiante e plausível. É importante entender que a IA não está "mentindo" de propósito; ela está simplesmente gerando uma sequência de palavras que é estatisticamente provável, mas que não corresponde à realidade. Por exemplo, se você pedir um resumo sobre uma pessoa pouco conhecida, o modelo pode inventar uma biografia inteira para ela.\n\nPara mitigar esse risco, algumas práticas são essenciais. Sempre verifique fatos e números importantes gerados pela IA. Use a tecnologia como um assistente para o primeiro rascunho, não como uma fonte de verdade absoluta. Para tarefas críticas, utilize técnicas como a RAG (Retrieval-Augmented Generation), que força a IA a basear suas respostas em documentos específicos que você fornece, limitando sua capacidade de inventar informações.',
          quiz: [{ question: 'O que é uma "alucinação" em IA Generativa?', options: ['Uma falha de segurança', 'Quando a IA gera informações factualmente incorretas de forma confiante', 'Um tipo de imagem criada pela IA'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l5',
          title: 'Lição 5: Estudo de Caso - Morgan Stanley',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O banco de investimentos Morgan Stanley é um excelente exemplo de como a IA Generativa pode ser aplicada em um ambiente corporativo complexo. Em parceria com a OpenAI, eles implementaram um assistente de IA para seus consultores financeiros. O projeto envolveu o fine-tuning do modelo GPT com a vasta biblioteca de pesquisas de mercado e documentos internos do banco, que se estende por décadas.\n\nO resultado foi transformador. Os consultores agora podem fazer perguntas em linguagem natural, como: "Qual a visão da nossa empresa sobre o mercado de semicondutores para o próximo trimestre?". Em segundos, a IA lê, resume e entrega a informação relevante de centenas de documentos. Isso permite que o consultor passe mais tempo em atividades de alto valor, como aconselhar os clientes, e muito menos tempo em tarefas de pesquisa manual.',
          quiz: [{ question: 'Qual foi o principal benefício da IA Generativa para o Morgan Stanley?', options: ['Substituir os consultores financeiros', 'Acelerar drasticamente a pesquisa de informações internas para os consultores', 'Criar logotipos para o banco'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l6',
          title: 'Lição 6: Geração de Áudio e Música com IA',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A IA Generativa vai muito além do texto e das imagens. A geração de áudio é uma área em rápida expansão, com aplicações que podem otimizar custos e processos.\n\nUma das principais aplicações é o Text-to-Speech (TTS) ultrarrealista, que permite criar narrações para vídeos ou podcasts com vozes que soam perfeitamente humanas. Ferramentas como a ElevenLabs podem até clonar uma voz a partir de uma pequena amostra de áudio.\n\nOutra área é a criação de música sob demanda. Você pode gerar trilhas sonoras para seus vídeos de marketing simplesmente descrevendo o estilo desejado, como "uma música eletrônica animada com uma batida de rock". Além disso, é possível gerar qualquer efeito sonoro que você possa imaginar, descrevendo-o em texto.\n\nO impacto de negócio é direto, resultando na redução de custos com locutores profissionais, licenças de música e produção de áudio em geral.',
          quiz: [{ question: 'Qual aplicação de IA Generativa de áudio permite criar uma narração com a voz de uma pessoa específica?', options: ['Text-to-Speech Padrão', 'Clonagem de Voz', 'Geração de Efeitos Sonoros'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l7',
          title: 'Lição 7: Geração de Vídeo - A Próxima Fronteira',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A geração de vídeo a partir de texto, ou text-to-video, é uma das tecnologias mais impressionantes e disruptivas no horizonte da IA Generativa. Modelos como o Sora da OpenAI e o Veo do Google já demonstram a capacidade de criar clipes de vídeo curtos e de alta qualidade a partir de uma simples descrição de texto.\n\nA tecnologia funciona através do aprendizado da relação entre palavras e como os objetos e cenas se parecem e se movem no mundo real. A IA então "pinta" cada quadro do vídeo para corresponder ao que foi descrito no prompt.\n\nAtualmente, a tecnologia ainda é nova e apresenta limitações em duração e consistência, mas está evoluindo a uma velocidade espantosa. O impacto futuro será imenso, com o potencial de revolucionar a publicidade, o cinema, a educação e a criação de conteúdo, permitindo a produção de vídeos personalizados em uma escala nunca antes vista.',
          quiz: [{ question: 'A tecnologia de "text-to-video" permite criar vídeos a partir de quê?', options: ['De outras imagens', 'De uma descrição de texto (prompt)', 'De um arquivo de áudio'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l8',
          title: 'Lição 8: RAG (Retrieval-Augmented Generation) na Prática',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Já mencionamos o RAG como uma forma de combater as alucinações da IA. Agora, vamos aprofundar em como essa técnica torna a IA Generativa uma especialista nos seus dados. O processo funciona em três etapas.\n\nPrimeiro, a Indexação, onde você pega sua base de conhecimento — como documentos internos, manuais e histórico de suporte — e a transforma em um banco de dados que a IA pode pesquisar. Em seguida, a Recuperação. Quando um usuário faz uma pergunta, o sistema primeiro busca em seu banco de dados os trechos mais relevantes para aquela pergunta específica.\n\nPor fim, a Geração Aumentada. O sistema envia esses trechos recuperados para a IA Generativa junto com a pergunta original, com a instrução: "Responda a esta pergunta usando apenas estas informações."\n\nO resultado é que, em vez de responder com conhecimento genérico da internet, a IA responde com base nos seus documentos, tornando-se um chatbot de suporte interno ou um especialista de produto infalível.',
          quiz: [{ question: 'Qual é a principal vantagem de usar RAG para um chatbot de atendimento ao cliente?', options: ['Torna o chatbot mais criativo e propenso a inventar respostas.', 'Garante que o chatbot baseie suas respostas exclusivamente nos documentos e na base de conhecimento da empresa.', 'Permite que o chatbot acesse toda a internet para responder.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l9',
          title: 'Lição 9: IA Generativa e o Futuro da Programação',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A IA Generativa está mudando fundamentalmente o papel dos desenvolvedores de software. Eles estão deixando de ser apenas "escritores de código" para se tornarem "revisores e arquitetos de código".\n\nIsso acontece através de ferramentas como os copilotos de código, como o GitHub Copilot. Esses assistentes de IA se integram ao ambiente de programação e sugerem linhas de código ou funções inteiras em tempo real, com base no contexto do que o desenvolvedor está tentando fazer. Além disso, a IA permite a geração de código a partir de linguagem natural, onde o desenvolvedor descreve uma funcionalidade e a IA gera o código inicial.\n\nOutras aplicações incluem a depuração e os testes. A IA pode analisar o código para encontrar bugs ou até mesmo escrever testes automatizados para garantir que ele funcione como esperado. O impacto direto é um aumento massivo na produtividade dos desenvolvedores, permitindo que eles foquem em problemas de lógica de negócio mais complexos.',
          quiz: [{ question: 'Como ferramentas como o GitHub Copilot ajudam os desenvolvedores?', options: ['Escrevendo todo o software do zero sem intervenção humana.', 'Sugerindo código em tempo real, automatizando a escrita de testes e ajudando a encontrar bugs.', 'Apenas corrigindo erros de digitação nos comentários.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l10',
          title: 'Lição 10: O Futuro são os Agentes de IA',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: `A próxima grande evolução da IA Generativa são os Agentes de IA. A diferença fundamental é que, em vez de apenas responder a um comando específico, um agente pode receber um objetivo e executar múltiplos passos de forma autônoma para alcançá-lo.

Vamos a um exemplo. Um comando simples para uma IA seria: "Resuma meus e-mails não lidos e me diga quais são urgentes." Já para um Agente de IA, você poderia dar um objetivo mais complexo, como: "Organize a minha viagem de negócios para o Rio".

O agente, então, poderia executar uma sequência de ações: primeiro, ele acessaria seu calendário para ver as datas. Depois, pesquisaria voos e compararia hotéis perto do local da reunião. Em seguida, proporia um itinerário completo e, finalmente, aguardaria sua aprovação para efetuar as reservas. Essa capacidade de agir de forma autônoma e em múltiplos passos irá transformar a forma como interagimos com o software.`,
          quiz: [{ question: 'Qual a principal característica de um "Agente de IA"?', options: ['Ele só pode gerar texto', 'Ele pode executar múltiplos passos de forma autônoma para atingir um objetivo', 'Ele é mais barato que a IA Generativa normal'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-l11',
        title: 'Lição 11: Fine-tuning vs. RAG: Qual a Melhor Abordagem?',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Tanto o Fine-tuning quanto o RAG são técnicas usadas para especializar uma IA, mas eles resolvem problemas diferentes e é crucial entender quando usar cada um.

Use o Fine-tuning quando você quer ensinar um estilo ou comportamento. A analogia é como treinar um ator: você o ensina a "incorporar a persona" da sua marca. É ideal para fazer a IA adotar o tom de voz específico da sua empresa, ensinar um formato de resposta muito particular ou um comportamento específico. No entanto, é um processo mais caro e complexo, pois envolve retreinar o modelo.

Por outro lado, use o RAG quando você quer ensinar conhecimento. A analogia aqui é como dar ao seu estagiário acesso à biblioteca da empresa e uma ferramenta de busca. É a melhor abordagem para responder perguntas com base em documentos que mudam com frequência, para garantir que as respostas sejam factuais e baseadas em fontes específicas, e para criar chatbots de perguntas e respostas. Geralmente, é mais barato e rápido de implementar.

Muitas vezes, a melhor solução é híbrida: usar Fine-tuning para o tom e RAG para o conhecimento.`,
        quiz: [
          { 
            question: 'Se o seu objetivo é garantir que um chatbot responda a perguntas de clientes com base no seu manual de produto mais recente, qual abordagem é mais adequada?', 
            options: [
                'Fine-tuning', 
                'RAG (Retrieval-Augmented Generation)', 
                'Nenhuma das duas, um modelo genérico é suficiente.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
      {
        id: 'm6-l12',
        title: 'Lição 12: A Economia dos Agentes de IA',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Os Agentes de IA não são apenas uma evolução tecnológica; eles criam um novo paradigma econômico, que podemos chamar de Economia dos Agentes.

A principal mudança está na forma como a automação funciona. Hoje, ferramentas como o Zapier operam com base em gatilhos e ações, seguindo um fluxo de trabalho pré-definido: se isso acontecer, faça aquilo. Os Agentes de IA, por sua vez, operam com base em objetivos. Eles podem planejar e executar sequências de tarefas complexas e dinâmicas, agindo como verdadeiros "funcionários digitais".

Vamos a um exemplo de um Agente de Compras Autônomo. Uma empresa pode dar a ele o objetivo de "manter o estoque de matéria-prima X sempre acima de 100 unidades, ao menor custo possível". Este agente poderia monitorar o estoque, analisar previsões de demanda, pesquisar preços em diferentes fornecedores, negociar e executar a ordem de compra, tudo de forma autônoma. Isso move a automação do nível de "tarefas" para o nível de "funções", permitindo a criação de operações de negócio cada vez mais autônomas e eficientes.`,
        quiz: [
          { 
            question: 'Qual é a principal mudança de paradigma introduzida pelos Agentes de IA em comparação com a automação tradicional?', 
            options: [
                'Agentes de IA são mais baratos de programar.', 
                'Agentes de IA operam com base em objetivos e podem executar fluxos de trabalho complexos e dinâmicos, em vez de seguir regras fixas de "se-então".', 
                'Agentes de IA só funcionam para tarefas de marketing.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
    ],
};