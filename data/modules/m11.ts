import { Module } from '../../types';
import { Trophy } from '../../components/icons';

export const M11: Module = {
    id: 'm11',
    title: 'Módulo 11: Dominando Prompts de IA',
    subtitle: 'A arte e a ciência de se comunicar com a IA Generativa.',
    icon: Trophy,
    lessons: [
      {
          id: 'm11-l1',
          title: 'Lição 1: A Arte do Prompt: Como Falar com a IA',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A qualidade da sua interação com uma IA Generativa depende diretamente da qualidade do seu prompt. Um bom prompt é como dar instruções claras a um assistente genial. Para isso, podemos usar o framework P-C-T-F. A letra P significa Persona, onde você diz à IA qual papel ela deve assumir, ajustando o tom e o estilo da resposta. Por exemplo, "Aja como um diretor de marketing experiente". A letra C é de Contexto, onde você fornece o pano de fundo e as informações essenciais para a IA entender seu negócio. A letra T representa a Tarefa, onde você diz exatamente o que quer que a IA faça, usando verbos de ação específicos. Por fim, a letra F é de Formato, especificando como você quer receber a resposta, como uma tabela ou uma lista, o que economiza tempo de edição. Dominar o P-C-T-F é a base para obter resultados de alta qualidade de qualquer modelo de linguagem.',
          quiz: [{ question: 'No framework P-C-T-F, o que a letra "P" representa?', options: ['Pergunta', 'Persona', 'Problema'], correctAnswerIndex: 1 }, { question: 'Qual componente do P-C-T-F é responsável por definir a estrutura da resposta, como uma tabela ou lista?', options: ['Contexto', 'Tarefa', 'Formato'], correctAnswerIndex: 2 }, { question: 'Por que é importante fornecer "Contexto" em um prompt?', options: ['Para tornar o prompt mais longo', 'Para dar à IA as informações de fundo necessárias para gerar uma resposta relevante', 'Para confundir a IA'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm11-l2',
        title: 'Lição 2: Prompts para Marketing e Vendas: Exemplos Práticos',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Vamos aplicar o framework P-C-T-F em cenários reais de marketing e vendas. Para criar posts para redes sociais, por exemplo, você pode definir a Persona como um especialista em LinkedIn, dar o Contexto da sua empresa e produto, definir a Tarefa de criar três posts com benefícios diferentes e especificar o Formato, como um texto de no máximo 150 palavras com hashtags.

Para um e-mail de prospecção, a Persona seria um SDR persuasivo, o Contexto seria o perfil do cliente e a dor que seu produto resolve, a Tarefa seria escrever um e-mail curto para agendar uma chamada e o Formato definiria a estrutura do e-mail e o tom de voz.

Podemos expandir para outros cenários. Para um post de blog otimizado para SEO, a Persona seria um especialista em SEO, o Contexto seria a palavra-chave e o público-alvo, a Tarefa seria criar um rascunho completo do artigo e o Formato definiria a estrutura de tópicos. Para um roteiro de vídeo curto, a Persona seria um roteirista de redes sociais, o Contexto seria o produto e o público, a Tarefa seria criar um roteiro de 15 segundos e o Formato definiria a estrutura de cena e áudio.

Na área de vendas, para um e-mail de follow-up pós-reunião, a Persona seria um executivo de contas consultivo, o Contexto seria o que foi discutido na reunião, a Tarefa seria recapitular os pontos e definir os próximos passos, e o Formato seria um e-mail conciso com bullet points. Para gerar ideias de upsell, a Persona seria um gerente de sucesso do cliente, o Contexto seria o uso atual do cliente e as novas funcionalidades, a Tarefa seria gerar abordagens estratégicas e o Formato seria uma lista de ideias com frases de abertura.`,
        quiz: [
            {
                question: 'Ao criar um prompt para um e-mail de prospecção, qual é o objetivo principal da "Tarefa"?',
                options: [
                    'Descrever todos os recursos do produto em detalhes.',
                    'Ser vago para que a IA tenha liberdade criativa.',
                    'Definir claramente a ação desejada, como despertar curiosidade e agendar uma chamada.'
                ],
                correctAnswerIndex: 2
            }
        ],
    },
      {
          id: 'm11-l3',
          title: 'Lição 3: Evitando Erros Comuns e Alucinações',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Para obter o melhor da IA, é crucial evitar algumas armadilhas. O primeiro erro comum são os prompts vagos. Em vez de pedir para a IA "escrever sobre marketing", seja específico, como "crie um post de blog de 500 palavras sobre a importância do SEO para e-commerce em 2024". O segundo erro é não iterar. Pense na interação como uma conversa e refine seu prompt se a primeira resposta não for boa.\n\nUm problema sério são as "alucinações", que ocorrem quando a IA inventa fatos de forma confiante. Ela faz isso porque é otimizada para ser coerente, não necessariamente verdadeira. Para mitigar isso, você pode pedir fontes e verificá-las, usar a IA para criar a estrutura do conteúdo mas pesquisar os fatos você mesmo, ou usar a técnica RAG. Com o RAG, você fornece um documento à IA e pede para ela responder com base apenas naquele conteúdo, limitando sua capacidade de inventar informações.',
          quiz: [{ question: 'Qual é a melhor maneira de mitigar "alucinações" ao lidar com informações críticas?', options: ['Confiar cegamente na IA, pois ela raramente erra', 'Pedir à IA que seja mais criativa', 'Fornecer o contexto (como um documento) e instruir a IA a basear sua resposta apenas nele'], correctAnswerIndex: 2 }],
      },
       {
        id: 'm11-l4',
        title: 'Lição 4: Decompondo Tarefas Complexas (Prompt Chaining)',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Para tarefas grandes e complexas, um único prompt geralmente não é suficiente. A solução é usar o Prompt Chaining, que consiste em quebrar a tarefa em uma sequência de prompts menores e mais focados, onde a saída de um se torna a entrada para o próximo. É como gerenciar um projeto com um funcionário: você não pede para "lançar um produto", você quebra em etapas como pesquisa de mercado, plano de marketing, etc.

Vamos a um exemplo de como criar um webinar. O primeiro prompt poderia ser para brainstorming, pedindo à IA para gerar 10 ideias de títulos. Depois de escolher um, o segundo prompt pediria para criar a estrutura detalhada do webinar. O terceiro prompt poderia focar em uma parte específica, pedindo o conteúdo para um dos slides. Por fim, o quarto prompt usaria o título e a estrutura para criar um e-mail de convite. Este método garante um resultado final muito mais completo, coeso e de alta qualidade.`,
        quiz: [
            {
                question: 'O que é "Prompt Chaining"?',
                options: [
                    'Enviar o mesmo prompt várias vezes.',
                    'Quebrar uma tarefa complexa em uma sequência de prompts menores, usando a saída de um como entrada para o próximo.',
                    'Um tipo especial de prompt que só funciona para resumir textos.'
                ],
                correctAnswerIndex: 1
            }
        ],
    },
    {
        id: 'm11-l5',
        title: 'Lição 5: Aumentando o Raciocínio com "Chain of Thought"',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Os modelos de linguagem podem, às vezes, "pular" para a resposta muito rápido, especialmente em problemas que exigem lógica ou matemática, e acabar errando. A técnica "Chain of Thought", ou Cadeia de Pensamento, resolve isso de uma forma surpreendentemente simples: basta adicionar a frase "Pense passo a passo" ao final do seu prompt.

Isso força o modelo a externalizar seu "raciocínio". Ele primeiro descreve a lógica que vai usar para resolver o problema, etapa por etapa, e só depois apresenta a resposta final. Esse processo de desacelerar e explicar os passos aumenta drasticamente a precisão da resposta. Por exemplo, ao pedir o cálculo do ROI anual de um projeto, instruir a IA a pensar passo a passo fará com que ela primeiro calcule o custo anual, depois o ganho anual e só então aplique a fórmula do ROI, detalhando cada etapa e minimizando a chance de erro. A técnica CoT é essencial para qualquer tarefa que envolva lógica, planejamento ou cálculos.`,
        quiz: [
            {
                question: 'Qual é a maneira mais simples de aplicar a técnica "Chain of Thought"?',
                options: [
                    'Escrever um prompt muito longo e detalhado.',
                    'Adicionar a frase "Pense passo a passo" ao final do prompt.',
                    'Usar apenas letras maiúsculas no prompt.'
                ],
                correctAnswerIndex: 1
            }
        ],
    },
    {
        id: 'm11-l6',
        title: 'Lição 6: Guiando a IA com Exemplos (Few-Shot Prompting)',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Às vezes, apenas descrever a tarefa não é suficiente para a IA, especialmente se você deseja uma resposta em um formato muito específico. A técnica de Few-Shot Prompting resolve isso, consistindo em dar à IA alguns exemplos de como você quer a resposta antes de fazer seu pedido final. Existem diferentes níveis: o Zero-Shot é o que já fizemos, apenas com a instrução; o One-Shot envolve dar um exemplo completo; e o Few-Shot significa dar dois ou mais exemplos.

Por exemplo, se você quer que a IA classifique o feedback de um cliente, você pode fornecer exemplos no prompt: para o feedback "A velocidade de entrega foi incrível", a classificação seria { "Sentimento": "Positivo", "Tópico": "Entrega" }. Após dar alguns exemplos como este, você apresenta o novo feedback a ser classificado. Dar exemplos é uma das formas mais eficazes de guiar o comportamento da IA e garantir a consistência do formato da saída.`,
        quiz: [
            {
                question: 'O que é "Few-Shot Prompting"?',
                options: [
                    'Dar um único comando muito curto.',
                    'A técnica de incluir um ou mais exemplos completos no prompt para mostrar à IA o formato de resposta desejado.',
                    'Fazer a mesma pergunta de várias maneiras diferentes.'
                ],
                correctAnswerIndex: 1
            }
        ],
    },
     {
        id: 'm11-l7',
        title: 'Lição 7: Usando a IA para Análise de Dados',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Ferramentas como o ChatGPT, com sua funcionalidade de Análise Avançada de Dados, e o Gemini, podem analisar arquivos que você envia, como planilhas CSV ou Excel. Isso abre um novo mundo de possibilidades para a análise de dados, mesmo para quem não sabe programar.

Você pode pedir à IA para realizar uma análise exploratória e extrair os principais insights de um arquivo de vendas, ou para criar visualizações de dados, como um gráfico de barras mostrando as vendas por categoria. Também é possível pedir segmentações mais complexas, como agrupar clientes com base no valor e na frequência de compra. Além disso, a IA pode ajudar na limpeza de dados, como padronizar os valores de uma coluna.

Por baixo dos panos, a IA está escrevendo e executando código, geralmente em Python, para realizar a análise que você pediu em linguagem natural. Ela se torna, na prática, sua "cientista de dados" pessoal. Uma boa dica é sempre começar pedindo um resumo do arquivo para garantir que a IA o entendeu corretamente.`,
        quiz: [
            {
                question: 'Qual é uma capacidade da IA na análise de dados, como o recurso de Análise Avançada de Dados do ChatGPT?',
                options: [
                    'Apenas abrir e visualizar planilhas.',
                    'Executar análises complexas, criar gráficos e segmentar clientes a partir de um arquivo enviado e comandos em linguagem natural.',
                    'Apenas funciona com bancos de dados, não com arquivos.'
                ],
                correctAnswerIndex: 1
            }
        ],
    },
    {
        id: 'm11-l8',
        title: 'Lição 8: Prompts para Geração de Código',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Mesmo que você não seja um programador, a IA pode ajudá-lo a criar pequenos scripts para automatizar tarefas do dia a dia. Por exemplo, se você tem uma pasta com 100 fotos e precisa renomear todas, pode pedir à IA para escrever um script Python que adicione a data de hoje no início de cada nome de arquivo.

As aplicações vão além. Você pode pedir à IA para criar fórmulas complexas para o Excel ou Google Sheets, descrevendo o que você precisa em linguagem natural. Também é possível criar scripts de automação para interagir com sites ou gerar consultas SQL para buscar informações específicas em um banco de dados. A IA está reduzindo drasticamente a barreira para a automação e a programação, capacitando mais pessoas a resolverem seus próprios problemas técnicos.`,
        quiz: [
            {
                question: 'Além de escrever código para programadores, como a IA pode ajudar não-técnicos?',
                options: [
                    'Ela não pode ajudar quem não sabe programar.',
                    'Apenas criando sites complexos.',
                    'Gerando fórmulas de planilhas, scripts de automação simples e consultas de banco de dados a partir de descrições em linguagem natural.'
                ],
                correctAnswerIndex: 2
            }
        ],
    },
    {
        id: 'm11-l9',
        title: 'Lição 9: Refinando e Melhorando seus Prompts',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `A engenharia de prompt é um processo iterativo, e raramente você acertará o prompt perfeito na primeira tentativa. Para refinar suas instruções, comece sendo mais específico. Em vez de pedir um post genérico, detalhe o tamanho, o canal, o tom e o público. Outra técnica é adicionar restrições, dizendo à IA o que ela *não* deve fazer, como evitar certos jargões.

Não se contente com a primeira resposta; peça múltiplas opções para ter mais variedade. Uma técnica avançada é pedir à própria IA para criticar e melhorar seu prompt. Você pode perguntar: "Como você melhoraria este prompt para obter uma resposta mais estratégica?". Manter um "caderno de prompts" com os que funcionaram bem para você também é uma ótima prática, pois com o tempo, você desenvolverá uma biblioteca de templates eficazes para suas tarefas mais comuns.`,
        quiz: [
            {
                question: 'Qual é uma técnica eficaz para refinar um prompt que gerou uma resposta genérica?',
                options: [
                    'Tornar o prompt ainda mais curto e vago.',
                    'Adicionar mais especificidade, contexto e restrições.',
                    'Desistir e tentar outra ferramenta.'
                ],
                correctAnswerIndex: 1
            }
        ],
    },
    {
        id: 'm11-l10',
        title: 'Lição 10: O Futuro são os Agentes de IA',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `A próxima evolução da IA Generativa são os Agentes de IA. A diferença fundamental é que, em vez de apenas responder a um comando único, um agente pode receber um objetivo e executar múltiplos passos de forma autônoma para alcançá-lo.

Vamos a um exemplo. Um comando simples para uma IA seria: "Resuma meus e-mails não lidos". Já para um Agente de IA, você poderia dar um objetivo mais complexo, como: "Organize minha viagem de negócios para o Rio". O agente, então, poderia executar uma sequência de ações de forma autônoma: primeiro, acessar seu calendário para ver as datas; depois, pesquisar voos e comparar hotéis; em seguida, propor um itinerário e, por fim, aguardar sua aprovação para efetuar as reservas. Essa capacidade de agir em múltiplos passos e de forma autônoma irá transformar profundamente a forma como interagimos com o software.`,
        quiz: [{ question: 'Qual a principal característica de um "Agente de IA"?', options: ['Ele só pode gerar texto', 'Ele pode executar múltiplos passos de forma autônoma para atingir um objetivo', 'Ele é mais barato que a IA Generativa normal'], correctAnswerIndex: 1 }],
    },
    {
        id: 'm11-l11',
        title: 'Lição 11: Exemplos Avançados de Prompt Chaining',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Vamos aplicar a técnica de Prompt Chaining a um projeto de marketing mais complexo: a criação de uma campanha de lançamento para um novo produto, o "Café SuperFoco".

O processo começa com um primeiro prompt para definir os perfis de público-alvo. Com base em uma das personas criadas, o segundo prompt pede os melhores canais de marketing e a mensagem principal para cada um. O terceiro prompt usa a mensagem de um dos canais para gerar ideias de títulos para posts de blog. Escolhendo um dos títulos, o quarto prompt pede o rascunho de 300 palavras para esse post. Por fim, o quinto prompt transforma os pontos principais do post em um script de 30 segundos para um anúncio no Instagram Reels.

Este fluxo encadeado, onde a saída de um prompt alimenta o próximo, garante que toda a campanha seja coesa e estratégica, partindo da definição do público até a execução criativa final.`,
        quiz: [
            {
                question: 'No exemplo de Prompt Chaining para a campanha de marketing, por que é importante definir as personas primeiro?',
                options: [
                    'Não é importante, a ordem dos prompts não importa.',
                    'Porque a definição do público-alvo (personas) informa todas as decisões subsequentes, como a escolha de canais e a criação da mensagem.',
                    'Apenas para tornar o processo mais longo.'
                ],
                correctAnswerIndex: 1
            }
        ],
    },
    {
        id: 'm11-l12',
        title: 'Lição 12: Criando um Agente de IA Simples (Simulado)',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Mesmo sem ferramentas avançadas, podemos simular o comportamento de um agente de IA usando um prompt de duas etapas que força o modelo a primeiro planejar e depois executar.

A técnica é simples: você dá um objetivo complexo e pede para a IA primeiro criar um plano passo a passo de como ela vai realizar a tarefa, e só depois executá-lo. Por exemplo, para uma análise de concorrência, seu prompt pediria para a IA primeiro criar um plano identificando os critérios de comparação e, em uma segunda parte, executar esse plano, apresentando a análise final.

A IA responderia primeiro com uma seção de "PLANO", detalhando os passos que irá seguir, e depois com uma seção de "EXECUÇÃO DA ANÁLISE", onde ela efetivamente realiza o trabalho. Essa técnica melhora drasticamente a qualidade e a estrutura de respostas para tarefas complexas, simulando um agente que pensa antes de agir e garantindo um resultado mais lógico e bem organizado.`,
        quiz: [
            {
                question: 'Qual é o principal benefício de usar a técnica "Planeje e Execute" em um prompt?',
                options: [
                    'Gera respostas mais curtas e rápidas.',
                    'Força a IA a estruturar seu raciocínio, criando um plano antes de gerar a resposta final, o que melhora a qualidade e a lógica do resultado.',
                    'Funciona apenas para tarefas de programação.'
                ],
                correctAnswerIndex: 1
            }
        ],
    },
    ],
};
