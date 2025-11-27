import { Module } from '../../types';
import { BrainLightbulb } from '../../components/icons';

export const M15: Module = {
    id: 'm15',
    title: 'Módulo 15: Bônus - Seu "Segundo Cérebro" com IA',
    subtitle: 'Como usar a IA para capturar, organizar e potencializar seu conhecimento.',
    icon: BrainLightbulb,
    lessons: [
        {
            id: 'm15-l1',
            title: 'Lição 1: O Conceito de "Segundo Cérebro"',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Um "Segundo Cérebro" é um sistema digital externo projetado para capturar, organizar e conectar as informações e ideias que você consome. O objetivo principal é liberar sua mente da tarefa de ter que se *lembrar* de tudo, permitindo que ela se concentre em tarefas de maior valor, como *criar* e *pensar*. Na era atual de sobrecarga de informação, essa prática é crucial, pois transforma o caos de artigos, anotações e ideias em uma base de conhecimento pessoal, pesquisável e acionável.

Uma metodologia popular para estruturar isso é o framework C.O.D.E. de Tiago Forte, que se baseia em quatro pilares. O primeiro é Capturar, que é o ato de coletar o que ressoa com você. O segundo é Organizar, que estrutura a informação para a ação. O terceiro é Destilar, focando em encontrar a essência de cada nota. Por fim, o quarto pilar é Expressar, que é o uso efetivo de suas notas para criar. A Inteligência Artificial pode potencializar cada uma dessas etapas de forma significativa.`,
            quiz: [
                { question: 'Qual é o principal objetivo de se construir um "Segundo Cérebro"?', options: ['Ter um backup de todos os seus arquivos.', 'Liberar sua mente da tarefa de lembrar, transformando informação em conhecimento acionável.', 'Apenas para organizar fotos.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l2',
            title: 'Lição 2: Ferramentas de Gestão de Conhecimento',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A base do seu Segundo Cérebro é um aplicativo de anotações, e as ferramentas modernas vão muito além de simples notas. O Notion, por exemplo, funciona como um "Lego" para informações, permitindo criar bancos de dados e documentos interligados, com a IA integrada para resumir e fazer brainstorming.

Outra ferramenta poderosa é o Obsidian, que é focado em "pensamento em rede". Ele permite criar links bidirecionais entre suas notas, criando um mapa visual de como suas ideias se conectam. Ele funciona com arquivos locais, o que oferece mais privacidade. Já o Evernote é um clássico, focado na captura rápida e em uma busca poderosa. Se você gosta de estrutura e bancos de dados, o Notion é um ótimo ponto de partida. Se prefere ver as conexões entre as ideias de forma visual, explore o Obsidian.`,
            quiz: [
                { question: 'Qual ferramenta é conhecida por sua abordagem de "pensamento em rede" e links bidirecionais?', options: ['Notion', 'Obsidian', 'Microsoft Word'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l3',
            title: 'Lição 3: Captura Inteligente com IA',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A etapa de "Capturar" é onde a Inteligência Artificial começa a brilhar, pois seu objetivo é reduzir o atrito para salvar informações interessantes. Ferramentas como os Web Clippers, extensões de navegador do Notion ou Evernote, permitem salvar artigos com um único clique.

Indo além, ferramentas como o Readwise Reader não só salvam os artigos, mas usam IA para gerar um resumo no momento da captura. Outra técnica é a transcrição de voz para texto, onde você pode gravar uma ideia e ferramentas como o Otter.ai a transcrevem e enviam para seu Segundo Cérebro. A maioria das ferramentas também oferece um endereço de e-mail especial, para que você possa encaminhar e-mails importantes e transformá-los em notas.`,
            quiz: [
                { question: 'Ferramentas como o Readwise Reader usam IA para qual finalidade na etapa de captura?', options: ['Corrigir a gramática do artigo original.', 'Gerar um resumo do artigo automaticamente no momento da captura.', 'Bloquear o acesso ao artigo.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l4',
            title: 'Lição 4: Organização com IA: Sumarização e Tagging',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Uma vez que a informação está capturada, a IA pode ajudar a organizá-la e destilá-la. Uma técnica poderosa é a Sumarização Progressiva. Em vez de apenas salvar um artigo inteiro, você pode usar uma IA para criar resumos em camadas: primeiro um resumo de 3 frases, depois transformar em 5 bullet points acionáveis e, por fim, destacar a única ideia principal.

Outra forma de organização é o Tagging Automático. Em vez de usar pastas rígidas, as tags oferecem mais flexibilidade. Você pode pedir à IA para sugerir tags relevantes para suas notas com um simples prompt: "Sugira 5 tags relevantes para esta nota sobre [tópico]". Isso garante que, ao salvar uma nota, você já está extraindo sua essência, tornando-a muito mais útil no futuro.`,
            quiz: [
                { question: 'O que é "Sumarização Progressiva"?', options: ['Resumir o mesmo texto várias vezes.', 'Criar resumos em diferentes níveis de detalhe (ex: resumo, bullet points, frase principal) para extrair a essência de uma nota.', 'Um tipo de algoritmo de IA.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l5',
            title: 'Lição 5: Conexão de Ideias com IA',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `O verdadeiro poder de um Segundo Cérebro não está em armazenar notas, mas em conectar ideias que você não sabia que estavam relacionadas. A IA pode ajudar nisso de duas maneiras principais.

A primeira é a Busca Semântica. As ferramentas modernas de busca em notas usam IA para encontrar informações com base no *significado*, não apenas na palavra-chave. Você pode procurar por "ideias para reduzir custos de marketing" e a IA encontrará uma nota que menciona "otimização de orçamento de anúncios".

O futuro, no entanto, está na Sugestão de Conexões. Imagine uma IA que, ao você escrever uma nova nota, proativamente sugere: "Esta ideia parece relacionada a outras 3 notas que você escreveu sobre produtividade". Isso transforma seu Segundo Cérebro de um arquivo passivo em um parceiro de brainstorming ativo.`,
            quiz: [
                { question: 'O que a "busca semântica" permite fazer em seu Segundo Cérebro?', options: ['Apenas procurar por palavras-chave exatas.', 'Encontrar notas com base no significado e no conceito, não apenas em palavras-chave idênticas.', 'Organizar suas notas em ordem alfabética.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l6',
            title: 'Lição 6: RAG Pessoal: Conversando com seus Documentos',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Esta é uma das aplicações mais poderosas da IA para o seu Segundo Cérebro. Usando a arquitetura RAG (Retrieval-Augmented Generation), você pode criar um "ChatGPT Pessoal" treinado com as *suas* notas.

A mecânica é simples: você conecta um modelo de linguagem à sua base de conhecimento. Quando você faz uma pergunta, a IA primeiro busca em suas notas pelos trechos mais relevantes e, em seguida, usa esses trechos como contexto para gerar uma resposta.

Você pode fazer perguntas como "Quais foram os principais pontos da minha reunião com o Cliente X?" ou "Com base nas minhas notas sobre marketing de conteúdo, gere 3 ideias de posts para o blog". Isso transforma seu Segundo Cérebro em um assistente que conhece todo o seu histórico de conhecimento.`,
            quiz: [
                { question: 'O que a arquitetura RAG permite que você faça com seu Segundo Cérebro?', options: ['Compartilhar suas notas publicamente na internet.', 'Criar um chatbot pessoal que responde a perguntas com base exclusivamente em suas próprias notas e documentos.', 'Fazer backup de suas notas na nuvem.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l7',
            title: 'Lição 7: Estudo de Caso: Preparando uma Apresentação com seu Segundo Cérebro',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Imagine que você precisa criar uma apresentação sobre "O Futuro do Trabalho". Com seu Segundo Cérebro e IA, o processo é muito mais rápido. Primeiro, você pode usar a busca com RAG para perguntar: "Quais são as minhas principais ideias e anotações sobre o futuro do trabalho?". A IA sintetiza suas notas de livros, artigos e reuniões sobre o tema.

Com essa síntese em mãos, você pode usar um prompt no ChatGPT para criar um outline para a apresentação. Para cada item do outline, você pode pedir à IA para elaborar o conteúdo e sugerir citações. Por fim, você pode usar uma ferramenta como a Gamma.app para colar o outline e gerar a apresentação visual inteira. Em vez de começar do zero, você usou seu conhecimento acumulado e a IA para ir da ideia à apresentação final em uma fração do tempo.`,
            quiz: [
                { question: 'No estudo de caso, qual foi o primeiro passo para criar a apresentação?', options: ['Procurar imagens no Google.', 'Usar a IA para pesquisar e sintetizar as notas relevantes que já existiam no Segundo Cérebro.', 'Começar a escrever os slides do zero.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l8',
            title: 'Lição 8: Estudo de Caso: Pesquisa para um Artigo',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Para escrever um artigo sobre "Como pequenas empresas podem usar IA", o fluxo de trabalho é igualmente otimizado. Primeiro, você captura de 10 a 15 artigos sobre o tema em seu Segundo Cérebro. Em seguida, usa a IA para gerar resumos de cada um, permitindo que você entenda a essência rapidamente.

Depois, você pode perguntar ao seu Segundo Cérebro: "Com base nos resumos dos últimos artigos que salvei, quais são os 5 temas mais recorrentes?". Com esses temas, você pode pedir à IA para criar um rascunho do post de blog. Seu trabalho, então, muda de escritor para editor e estrategista: você edita o rascunho, adiciona sua perspectiva única e refina o texto, em vez de começar de uma página em branco.`,
            quiz: [
                { question: 'No fluxo de trabalho de pesquisa, como a IA é usada para acelerar a fase de leitura?', options: ['A IA lê os artigos em voz alta.', 'A IA gera resumos de cada artigo capturado, permitindo que o pesquisador entenda os pontos principais rapidamente.', 'A IA impede o acesso aos artigos completos.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l9',
            title: 'Lição 9: Mantendo seu Segundo Cérebro (Revisão e Refatoração)',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Um Segundo Cérebro é como um jardim: ele precisa ser cuidado para continuar útil. Uma boa prática é a Revisão Semanal, onde você reserva 30 minutos para organizar as notas que capturou. Além disso, a IA pode ajudar na Refatoração.

Com o tempo, você pode ter notas duplicadas ou fragmentadas. Você pode usar um "Prompt de Consolidação" para pedir à IA: "Aqui estão 3 notas sobre o mesmo tópico. Sintetize-as em uma única nota mestre". Você também pode usar um "Prompt de Melhoria" para pedir à IA que revise uma nota antiga, tornando-a mais clara e sugerindo conexões. Manter seu Segundo Cérebro é um investimento que aumenta o valor do seu ativo de conhecimento.`,
            quiz: [
                { question: 'Qual é um exemplo de como usar a IA para "refatorar" seu Segundo Cérebro?', options: ['Apagar todas as notas com mais de um ano.', 'Pedir à IA para consolidar múltiplas notas sobre o mesmo tópico em uma única nota mestre.', 'Apenas fazer um backup dos arquivos.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l10',
            title: 'Lição 10: O Futuro da Produtividade Pessoal',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `O conceito de Segundo Cérebro, combinado com a IA, aponta para um futuro onde a gestão do conhecimento se torna proativa. Podemos esperar o surgimento de Agentes de Conhecimento Pessoal. Em vez de você buscar, seu Segundo Cérebro trará informações até você, como sugerir notas relevantes antes de uma reunião.

Outra tendência é a Criação a partir de Intenção, onde você poderá dar comandos como: "Use minhas notas sobre o Projeto X para criar o primeiro rascunho da apresentação de resultados". Além disso, a IA será capaz de descobrir Conexões Inesperadas, analisando seu conhecimento para encontrar relações entre ideias que você não havia percebido. Seu Segundo Cérebro evoluirá de uma ferramenta que você usa para um parceiro que pensa com você.`,
            quiz: [
                { question: 'Como os futuros "Agentes de Conhecimento Pessoal" devem mudar a forma como interagimos com nosso Segundo Cérebro?', options: ['Eles tornarão o sistema mais difícil de usar.', 'Eles trarão informações relevantes de forma proativa, em vez de esperar que o usuário busque por elas.', 'Eles limitarão o acesso às nossas próprias notas.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l11',
            title: 'Lição 11: Automatizando a Captura de Insights',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Podemos usar ferramentas de automação como o Zapier ou Make.com para alimentar nosso Segundo Cérebro automaticamente. Por exemplo, você pode criar um fluxo que, sempre que uma mensagem no Slack for marcada com um emoji de ideia, o conteúdo da mensagem seja enviado para o seu Notion.

Outra automação poderosa é a integração com o Kindle através do Readwise, que importa automaticamente todos os seus destaques de livros. Você também pode configurar um fluxo para que, toda segunda-feira, o KPI de vendas da sua planilha seja adicionado a uma nova nota no seu diário de bordo no Notion. Essas automações garantem que os insights mais importantes do seu dia a dia sejam capturados sem esforço manual.`,
            quiz: [
                { question: 'Qual é um exemplo de como automatizar a captura de insights para o seu Segundo Cérebro?', options: ['Digitar manualmente todas as suas ideias todos os dias.', 'Criar um fluxo de automação que salva mensagens importantes do Slack diretamente em suas notas.', 'Apenas usar a memória para lembrar de tudo.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm15-l12',
            title: 'Lição 12: Ética e Privacidade do seu Segundo Cérebro',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Ao integrar IA ao seu sistema de conhecimento pessoal, é vital considerar a privacidade. Suas notas contêm suas ideias mais íntimas e planos de negócio. Ao usar uma IA na nuvem, é importante entender as políticas de privacidade e se seus dados são usados para treinar os modelos da empresa.

Para informações ultrassensíveis, ferramentas como o Obsidian, que funcionam com arquivos locais, são uma ótima opção. Você pode combiná-las com modelos de IA de código aberto que rodam na sua própria máquina, garantindo que seus dados nunca saiam do seu computador. É crucial ser seletivo e não enviar informações confidenciais de clientes para uma IA pública. A IA é uma ferramenta poderosa, mas a responsabilidade sobre seus dados continua sendo sua.`,
            quiz: [
                { question: 'Para informações altamente sensíveis, qual abordagem oferece o maior nível de privacidade?', options: ['Usar a versão gratuita de qualquer ferramenta de IA na nuvem.', 'Usar uma ferramenta que funciona com arquivos locais (como Obsidian) combinada com um modelo de IA que roda na sua própria máquina.', 'Imprimir todas as suas notas e guardá-las em um cofre.'], correctAnswerIndex: 1 }
            ],
        },
    ],
};
