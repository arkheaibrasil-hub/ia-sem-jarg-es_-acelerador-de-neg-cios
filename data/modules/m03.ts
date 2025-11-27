import { Module } from '../../types';
import { MessageSquare } from '../../components/icons';

export const M3: Module = {
    id: 'm3',
    title: 'Módulo 3: PLN para Ouvir seu Cliente em Escala',
    subtitle: 'Análise de feedback, automação de atendimento e monitoramento de redes sociais.',
    icon: MessageSquare,
    lessons: [
      {
          id: 'm3-l1',
          title: 'Lição 1: Ensinando a Máquina a Ler',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O Processamento de Linguagem Natural, ou PLN, é um ramo da Inteligência Artificial que dá às máquinas a habilidade de ler, entender e interpretar a linguagem humana. Pense em como você compreende esta frase: você reconhece as palavras, a gramática e o contexto. O PLN tenta replicar exatamente essa capacidade em um computador.\n\nPara os negócios, o impacto é imenso. Isso significa que você pode finalmente analisar a enorme quantidade de dados não estruturados que sua empresa gera diariamente. Estamos falando de e-mails de clientes, posts em redes sociais, reviews de produtos e até mesmo transcrições de chamadas de atendimento. O PLN transforma esse caos de texto em insights valiosos.',
          quiz: [{ question: 'O que são "dados não estruturados"?', options: ['Dados organizados em planilhas', 'Dados em formato de texto livre, como e-mails e reviews', 'Gráficos e imagens'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l2',
          title: 'Lição 2: Análise de Sentimento na Prática',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A aplicação mais popular e imediata do PLN é a Análise de Sentimento. Em essência, é a automação da tarefa de ler um texto e decidir se o sentimento expresso nele é positivo, negativo ou neutro.\n\nVamos a um exemplo de negócio. Imagine que você lança um novo produto e, em poucas horas, recebe 10.000 menções no Twitter. É humanamente impossível ler tudo. Com a Análise de Sentimento, você pode ter um dashboard em tempo real mostrando um resumo, como "75% das menções são positivas, 20% são negativas e 5% são neutras". Isso permite que você meça o pulso do mercado instantaneamente, possibilitando uma reação rápida a uma crise de imagem ou, por outro lado, a capitalização de uma onda de feedback positivo.',
          quiz: [{ question: 'Análise de Sentimento serve principalmente para:', options: ['Corrigir erros de gramática', 'Classificar a emoção (positiva/negativa) de um texto', 'Traduzir textos para outros idiomas'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l3',
          title: 'Lição 3: Descoberta de Tópicos (Topic Modeling)',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Além de saber se o feedback dos seus clientes é positivo ou negativo, você precisa entender *sobre o que* eles estão falando. É exatamente aí que entra a Modelagem de Tópicos, ou Topic Modeling.\n\nEssa técnica de PLN analisa um grande volume de textos e agrupa automaticamente as palavras que aparecem juntas com frequência para identificar os principais temas ou assuntos discutidos.\n\nPor exemplo, ao analisar 5.000 reviews de um hotel, a IA pode identificar tópicos recorrentes como "preço do estacionamento", "qualidade do café da manhã", "velocidade do wi-fi" e "simpatia da recepção". O mais poderoso é que, para cada um desses tópicos, você pode ver o sentimento associado. Com isso, você pode descobrir que as pessoas amam o seu café da manhã, mas odeiam o preço do estacionamento, fornecendo um feedback claro e acionável.',
          quiz: [{ question: 'Qual a principal função da Modelagem de Tópicos?', options: ['Contar o número de palavras em um texto', 'Identificar os principais temas discutidos em um grande volume de textos', 'Resumir um único documento'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l4',
          title: 'Lição 4: Extração de Entidades (Entity Extraction)',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A Extração de Entidades é a capacidade da IA de identificar e extrair informações específicas e estruturadas de um texto corrido. Pense nela como uma ferramenta que consegue encontrar e classificar nomes de pessoas, organizações, locais, datas e valores monetários dentro de um documento.\n\nUm caso de uso clássico é no departamento financeiro. Imagine que sua equipe recebe centenas de faturas em PDF por e-mail. Em vez de um funcionário ter que digitar manualmente o nome do fornecedor, o número da fatura, a data de vencimento и o valor em um sistema, uma IA com PLN pode "ler" o documento, extrair essas informações automaticamente e preencher o sistema. Isso economiza horas de trabalho manual, repetitivo e sujeito a erros.',
          quiz: [{ question: 'O que a Extração de Entidades faz?', options: ['Resume o texto', 'Identifica e extrai informações específicas como nomes e datas de um texto', 'Verifica o sentimento do texto'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l5',
          title: 'Lição 5: Como os Chatbots Modernos Entendem Você',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Os chatbots modernos, diferentes de seus antecessores, usam PLN para entender a intenção do usuário, e não apenas para procurar por palavras-chave. Essa capacidade é chamada de NLU, ou Natural Language Understanding (Compreensão de Linguagem Natural).\n\nQuando um cliente digita "Perdi meu cartão, o que eu faço?", o NLU não se prende às palavras exatas. Ele é treinado para entender que a intenção por trás dessa frase é "bloquear_cartao". Com base nessa intenção identificada, o sistema dispara a ação correta, como iniciar o fluxo de bloqueio e reemissão de um novo cartão.\n\nIsso permite uma conversa muito mais fluida e eficaz. O usuário pode se expressar de diferentes maneiras e ainda assim ser compreendido, o que melhora drasticamente a experiência do cliente e a eficiência do atendimento.',
          quiz: [{ question: 'A capacidade de um chatbot entender o objetivo do usuário, mesmo com palavras diferentes, é chamada de:', options: ['Análise de Sentimento', 'Compreensão de Linguagem Natural (NLU)', 'Modelagem de Tópicos'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l6',
          title: 'Lição 6: Classificação de Texto para Organização',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A classificação de texto é a tarefa de atribuir categorias ou "tags" predefinidas a um texto, de forma muito parecida com a organização automática da sua caixa de entrada de e-mails.\n\nUm caso de uso muito comum é na área de suporte ao cliente. Imagine uma empresa que recebe milhares de e-mails de suporte por dia. Usando PLN, cada e-mail pode ser classificado automaticamente em categorias como "Dúvida sobre Faturamento", "Problema Técnico", "Sugestão de Produto" ou "Reclamação Urgente".\n\nO benefício imediato é que os e-mails podem ser roteados para a equipe certa instantaneamente. Além disso, a automação permite priorizar os casos urgentes, garantindo que os problemas mais críticos sejam resolvidos primeiro e melhorando significativamente o tempo de resposta geral.',
          quiz: [{ question: 'Qual o benefício de classificar automaticamente os tickets de suporte?', options: ['Aumentar o número de tickets', 'Roteamento rápido para a equipe certa e priorização de casos urgentes', 'Deixar os e-mails mais bonitos'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l7',
          title: 'Lição 7: Resumo Automático de Textos',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Com o volume de informações que recebemos diariamente, ler tudo é simplesmente impossível. O resumo automático de textos é uma técnica de PLN que resolve esse problema, criando uma versão curta e concisa de um documento longo, enquanto preserva seus pontos principais.\n\nAs aplicações de negócio são vastas. Na análise da concorrência, é possível resumir longos relatórios de mercado ou notícias sobre concorrentes para obter os principais insights rapidamente. Na área jurídica, advogados podem obter a essência de contratos ou documentos legais extensos em segundos. No suporte ao cliente, um agente pode receber um resumo do histórico de conversas de um cliente antes de iniciar uma chamada, permitindo que ele entenda todo o contexto instantaneamente.',
          quiz: [{ question: 'Qual a principal função do resumo automático de textos?', options: ['Traduzir o documento', 'Criar uma versão curta e coerente de um texto longo', 'Verificar erros de digitação'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l8',
          title: 'Lição 8: PLN para Monitoramento de Marca',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Neste exato momento, sua marca está sendo mencionada em redes sociais, blogs e fóruns. O PLN permite que você monitore essas conversas em tempo real e em uma escala que seria impossível para uma equipe humana.\n\nFerramentas de "social listening" usam PLN para executar um processo de três etapas. Primeiro, elas coletam todas as menções à sua marca na internet. Em seguida, analisam o sentimento de cada menção para entender se a conversa é predominantemente positiva ou negativa. Por fim, elas identificam os temas principais para descobrir sobre o que exatamente as pessoas estão falando em relação à sua marca.\n\nEssa capacidade permite gerenciar a reputação da sua marca de forma proativa, identificar influenciadores importantes e até mesmo descobrir crises de imagem antes que elas se tornem virais.',
          quiz: [{ question: 'Como o PLN ajuda no monitoramento de marca?', options: ['Ele responde automaticamente a todos os comentários', 'Ele coleta menções, analisa o sentimento e identifica os temas das conversas sobre a marca', 'Ele cria os posts para as redes sociais'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l9',
          title: 'Lição 9: Ferramentas de PLN no Mercado',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Assim como no Machine Learning, o acesso ao PLN está mais fácil do que nunca, e você não precisa construir tudo do zero. Existem diversas opções no mercado para começar a usar essa tecnologia.\n\nUma opção são as APIs de grandes players, como a Natural Language API do Google, o Comprehend da Amazon e o Azure Text Analytics da Microsoft. Elas oferecem serviços poderosos para análise de sentimento, extração de entidades e outras tarefas. Outra alternativa são as ferramentas de atendimento, como Zendesk e Intercom, que já têm PLN embutido para classificar tickets e potencializar seus chatbots. Por fim, existem as ferramentas de social listening, como Brandwatch e Meltwater, que usam PLN como o núcleo de seus serviços para monitoramento de marca.',
          quiz: [{ question: 'Para usar a Análise de Sentimento, uma empresa precisa necessariamente construir sua própria tecnologia do zero?', options: ['Sim, sempre', 'Não, ela pode usar serviços de API de grandes empresas de tecnologia ou ferramentas que já tenham essa função embutida', 'Sim, e requer um grande time de linguistas'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l10',
          title: 'Lição 10: Workshop - Projeto "Voz do Cliente"',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Vamos desenhar um projeto prático de PLN para entender melhor seus clientes. O primeiro passo é escolher uma fonte de dados de texto que sua empresa já possui. Pode ser, por exemplo, os reviews de produtos no seu site, os comentários em posts do Instagram ou as respostas em campos de texto de pesquisas de satisfação como o NPS.\n\nCom a fonte de dados definida, vamos responder a algumas perguntas usando PLN. Primeiro, através da Análise de Sentimento, podemos descobrir qual o sentimento geral expresso nesses textos. Em seguida, com a Modelagem de Tópicos, podemos identificar quais são os três principais temas positivos e os três principais temas negativos que mais aparecem. Com base nesses insights, a pergunta final é: qual a primeira ação de negócio que poderíamos tomar para melhorar nosso produto ou serviço?',
          quiz: [{ question: 'Ao analisar os comentários de uma pesquisa de satisfação, qual técnica de PLN ajudaria a descobrir os principais motivos de reclamação?', options: ['Extração de Entidades', 'Modelagem de Tópicos (Topic Modeling)', 'Resumo Automático'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-l11',
        title: 'Lição 11: A Revolução dos Transformers e LLMs',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Toda a revolução da IA Generativa que vemos hoje, com ferramentas como o ChatGPT e o Gemini, foi possibilitada por uma arquitetura de rede neural chamada Transformer, introduzida pelo Google em 2017.

O que o Transformer faz de tão especial é seu mecanismo de "atenção". Esse mecanismo permite que o modelo pese a importância de diferentes palavras em uma frase, não importando a distância entre elas. Isso deu aos modelos uma compreensão do contexto muito mais profunda e sofisticada do que as tecnologias anteriores, como as Redes Neurais Recorrentes (RNNs).

Os Grandes Modelos de Linguagem (LLMs), como o GPT-4, são, em essência, modelos Transformer gigantes. Eles foram treinados em quantidades massivas de texto e código da internet. É essa combinação de uma arquitetura sofisticada com dados em escala que lhes confere suas habilidades impressionantes de gerar texto, traduzir e responder perguntas de forma coerente.`,
        quiz: [
          { 
            question: 'Qual arquitetura de rede neural é a base para os modernos Grandes Modelos de Linguagem (LLMs) como o GPT?', 
            options: [
                'Redes Neurais Convolucionais (CNNs)', 
                'Transformers', 
                'Redes Neurais Recorrentes (RNNs)'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
      {
        id: 'm3-l12',
        title: 'Lição 12: Construindo seu Chatbot Especialista com RAG',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Já vimos o conceito de RAG (Retrieval-Augmented Generation) como uma forma de evitar que a IA "alucine" ou invente fatos. Agora, vamos explorar o RAG como uma ferramenta poderosa para construir chatbots especialistas.

O problema é que um LLM genérico, treinado na internet, não conhece os detalhes dos seus produtos, suas políticas internas ou seus manuais técnicos. A solução é o RAG. O processo começa com a criação de uma Base de Conhecimento, onde você reúne todos os seus documentos relevantes. Em seguida, um Motor de Busca indexa esses documentos, permitindo que a IA encontre os trechos mais relevantes para uma pergunta específica.

Finalmente, na etapa de Geração, quando um usuário faz uma pergunta, o sistema primeiro busca na sua base de conhecimento os parágrafos mais importantes e os entrega ao LLM junto com a pergunta, com a instrução: "Responda a esta pergunta usando apenas estes documentos."

O resultado é que você pode criar um chatbot para seus funcionários que responde a perguntas sobre as políticas de férias da empresa, ou um chatbot para seus clientes que é um verdadeiro especialista no seu produto mais complexo, garantindo que as respostas sejam sempre baseadas na sua documentação oficial.`,
        quiz: [
          { 
            question: 'Qual é o principal benefício de usar a arquitetura RAG para um chatbot de suporte técnico?', 
            options: [
                'Permite que o chatbot use todo o seu conhecimento da internet para ser mais criativo.', 
                'Garante que as respostas do chatbot sejam estritamente baseadas na documentação técnica oficial da empresa.', 
                'Deixa o chatbot mais rápido, mas menos preciso.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
    ],
};