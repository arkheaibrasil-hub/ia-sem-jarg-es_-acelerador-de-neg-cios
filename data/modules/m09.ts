import { Module } from '../../types';
import { Wrench } from '../../components/icons';

export const M9: Module = {
    id: 'm9',
    title: 'Módulo 9: Ferramentas de IA para o Dia a Dia',
    subtitle: 'Um tour prático por ferramentas acessíveis que podem ser implementadas.',
    icon: Wrench,
    lessons: [
      {
          id: 'm9-l1',
          title: 'Lição 1: Categoria - Escrita e Conteúdo',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Existem diversas ferramentas que usam IA Generativa para acelerar a criação de qualquer tipo de texto. As mais conhecidas, como o ChatGPT e o Gemini, são ótimas para tarefas gerais, como brainstorming, resumos e a criação de primeiros rascunhos.\n\nExistem também ferramentas mais especializadas, como o Jasper e o Copy.ai, que são focadas em marketing e vêm com templates prontos para anúncios, posts de blog e e-mails. Outra ferramenta extremamente útil é o Grammarly, que vai além de um simples corretor ortográfico. Sua IA ajuda a melhorar o tom, a clareza e o estilo da sua escrita em tempo real.\n\nO valor de negócio dessas ferramentas é claro: uma redução drástica no tempo necessário para criar conteúdo de alta qualidade, permitindo que a equipe foque na estratégia e na personalização da mensagem.',
          quiz: [{ question: 'Para qual finalidade a ferramenta Grammarly é mais indicada?', options: ['Criar imagens', 'Melhorar a qualidade da escrita (tom, clareza, gramática)', 'Gerenciar projetos'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l2',
          title: 'Lição 2: Categoria - Imagens e Design',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'As ferramentas de IA Generativa também permitem criar visuais únicos sem a necessidade de ser um designer profissional. O Midjourney é conhecido por sua alta qualidade artística, sendo ideal para imagens conceituais e inspiradoras. O DALL-E 3, acessível através do ChatGPT Plus, é excelente para seguir prompts detalhados e criar imagens mais literais, perfeitas para anúncios.\n\nPara uso comercial, o Adobe Firefly se destaca. Ele é integrado ao Photoshop e treinado com o banco de imagens da Adobe, o que o torna mais seguro em relação a questões de direitos autorais. Por fim, o Canva Magic Studio integra a IA Generativa diretamente na popular ferramenta de design, permitindo criar e editar imagens de forma fácil e intuitiva.',
          quiz: [{ question: 'Qual a principal vantagem do Adobe Firefly para uso comercial?', options: ['É a ferramenta mais barata', 'É treinado com um banco de imagens licenciado, o que reduz os riscos de direitos autorais', 'Gera as imagens mais realistas'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l3',
          title: 'Lição 3: Categoria - Produtividade e Organização',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A IA pode ser uma grande aliada para automatizar tarefas e organizar suas informações. O Notion AI, por exemplo, permite usar a IA dentro das suas notas para resumir reuniões, fazer brainstorming e criar rascunhos de documentos.\n\nFerramentas como o Fireflies.ai e o Otter.ai são focadas em reuniões online. Elas gravam e transcrevem suas chamadas no Zoom ou Google Meet automaticamente, além de gerar resumos e identificar os principais pontos discutidos. Já o Microsoft Copilot e o Google Duet AI integram a IA Generativa diretamente no seu ambiente de trabalho do Office ou Google Workspace, ajudando a escrever e-mails, criar apresentações e analisar planilhas.\n\nO valor de negócio é a economia de horas em tarefas administrativas, garantindo que nenhuma informação importante de reuniões seja perdida.',
          quiz: [{ question: 'Qual a principal função de ferramentas como Fireflies.ai?', options: ['Criar planilhas', 'Gravar, transcrever e resumir reuniões de áudio/vídeo', 'Enviar e-mails'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l4',
          title: 'Lição 4: Categoria - Vídeo e Apresentações',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A criação de vídeo e apresentações está sendo profundamente transformada pela IA. Ferramentas como o Synthesia e o HeyGen permitem criar vídeos com avatares de IA realistas. Você simplesmente escreve o texto, escolhe um avatar e a plataforma gera um vídeo com o avatar falando seu texto, inclusive em múltiplos idiomas, o que é ótimo para vídeos de treinamento e comunicação interna.\n\nNa área de apresentações, ferramentas como o Tome.app e o Gamma.app podem criar um deck de slides inteiro a partir de um único prompt. Você descreve o tema e a IA gera a estrutura, o texto e as imagens para cada slide.\n\nO valor para o negócio é uma redução drástica no tempo e no custo de produção de vídeos e apresentações com aparência profissional.',
          quiz: [{ question: 'Ferramentas como a Synthesia permitem criar qual tipo de conteúdo?', options: ['Músicas para podcasts.', 'Vídeos com avatares de IA realistas a partir de um texto.', 'Logotipos animados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l5',
          title: 'Lição 5: Categoria - Áudio e Música',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A IA está tornando a produção de áudio de alta qualidade acessível a todos. A ElevenLabs, por exemplo, é uma plataforma líder para clonagem de voz e Text-to-Speech, ideal para criar narrações, audiobooks e dublagens com vozes muito realistas.\n\nO Adobe Podcast oferece um conjunto de ferramentas de IA para áudio, incluindo uma funcionalidade impressionante que remove ruído de fundo e melhora a qualidade de gravações de voz com um único clique, fazendo com que pareçam ter sido gravadas em um estúdio profissional.\n\nPara a criação de música, ferramentas como o Suno AI e o Udio permitem que você crie músicas completas, com vocais e instrumentos, a partir de uma simples descrição de texto. O valor de negócio é o acesso a uma produção de áudio de alta qualidade sem a necessidade de equipamentos caros ou expertise técnica.',
          quiz: [{ question: 'Para que serve a ferramenta Adobe Podcast?', options: ['Para criar músicas a partir de texto.', 'Para melhorar a qualidade de gravações de voz, removendo ruído.', 'Para distribuir podcasts nas plataformas de streaming.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l6',
          title: 'Lição 6: Categoria - Atendimento ao Cliente',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Melhorar a velocidade e a qualidade do seu suporte ao cliente é uma das aplicações mais impactantes da IA. Plataformas de atendimento como o Intercom e o Zendesk AI usam a tecnologia para potencializar seus chatbots, classificar tickets de suporte automaticamente e sugerir respostas prontas para os agentes humanos, com base no histórico de conversas.\n\nOutra ferramenta popular é o ManyChat, que permite criar chatbots para redes sociais como Instagram, Facebook Messenger e WhatsApp. Esses chatbots podem responder a perguntas frequentes 24 horas por dia, 7 dias por semana, e também qualificar leads para a equipe de vendas.\n\nO valor de negócio é claro: redução do tempo de resposta, aumento da satisfação do cliente e a liberação da equipe de suporte para focar nos problemas mais complexos que exigem um toque humano.',
          quiz: [{ question: 'Como a IA ajuda em plataformas como Zendesk e Intercom?', options: ['Apenas enviando faturas', 'Potencializando chatbots e classificando tickets de suporte', 'Criando o site da empresa'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l7',
          title: 'Lição 7: Categoria - Vendas e CRM',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A IA está se tornando um copiloto indispensável para as equipes de vendas, ajudando-as a serem mais eficientes e focadas. As IAs integradas nos principais CRMs do mercado, como o Salesforce Einstein e o HubSpot AI, são um bom exemplo. Elas podem fazer o "lead scoring", que é priorizar os leads com maior chance de fechar, resumir todo o histórico de interações com um cliente e até sugerir os próximos passos para um vendedor.\n\nOutra categoria de ferramentas, como o Gong e o Chorus.ai, grava e analisa as chamadas de vendas. A IA transcreve a conversa e identifica os tópicos discutidos, o tempo de fala de cada pessoa e se as objeções do cliente foram respondidas, fornecendo insights valiosos para o treinamento e a melhoria da equipe. O valor de negócio se traduz em um aumento da produtividade da equipe, melhoria nas taxas de conversão e insights práticos para o treinamento contínuo.',
          quiz: [{ question: 'O que é "lead scoring" feito por IA em um CRM?', options: ['Uma forma de enviar e-mails para todos os leads ao mesmo tempo.', 'Um sistema que analisa os dados e o comportamento de um lead para dar uma nota de quão provável ele é de se tornar um cliente.', 'Uma ferramenta para criar listas de leads.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l8',
          title: 'Lição 8: Categoria - Programação e Automação',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Existem ferramentas que permitem que até mesmo pessoas que não são programadoras criem automações e pequenos aplicativos. O GitHub Copilot é um exemplo de assistente de IA para programadores que sugere código em tempo real.\n\nPara não-programadores, plataformas de "integração como serviço", como o Zapier e o Make.com, são revolucionárias. Elas usam uma interface visual para conectar diferentes aplicativos e automatizar fluxos de trabalho. Por exemplo, você pode criar uma automação que diz: "Quando um novo lead chegar no Facebook Ads, crie uma linha em uma Planilha Google e envie uma notificação no Slack". A IA está sendo cada vez mais integrada a essas plataformas para ajudar a construir esses fluxos de forma mais inteligente. O valor de negócio é a capacidade de automatizar processos entre diferentes ferramentas sem a necessidade de um desenvolvedor.',
          quiz: [{ question: 'Qual o principal propósito de ferramentas como Zapier e Make.com?', options: ['Escrever código de programação complexo.', 'Conectar diferentes aplicativos para automatizar fluxos de trabalho.', 'Criar imagens para redes sociais.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l9',
          title: 'Lição 9: Como Avaliar uma Ferramenta de IA',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Com tantas opções disponíveis, escolher a ferramenta de IA certa pode ser um desafio. Um checklist de cinco pontos pode ajudar nesse processo. Primeiro, a ferramenta resolve um problema de negócio real e mensurável para você? Segundo, ela se integra facilmente com as outras ferramentas que você já usa, como seu CRM? Terceiro, como a ferramenta lida com a segurança e a privacidade dos seus dados? Ela é compatível com a LGPD? Quarto, a ferramenta é fácil de usar para a sua equipe ou exige um treinamento extenso? E quinto, o custo-benefício se justifica pelo tempo economizado ou pelo valor gerado?\n\nO mais importante é não se deslumbrar com a tecnologia pela tecnologia. O foco deve ser sempre no valor prático e mensurável que ela pode trazer para o seu negócio.',
          quiz: [{ question: 'Ao avaliar uma nova ferramenta de IA, qual das seguintes perguntas é a mais importante?', options: ['"A ferramenta usa o modelo de IA mais famoso do momento?"', '"A ferramenta resolve um problema de negócio real e se integra com meu fluxo de trabalho atual?"', '"A ferramenta tem o logotipo mais bonito?"'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-l10',
          title: 'Lição 10: Integrando Ferramentas: O Efeito Multiplicador',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: `O verdadeiro poder da IA no dia a dia não vem de usar uma única ferramenta isolada, mas de criar um "stack", ou conjunto, de ferramentas que trabalham juntas. A automação, com plataformas como o Zapier ou o Make.com, funciona como a cola que une essas diferentes ferramentas, criando um efeito multiplicador.\n\nVamos a um exemplo de um fluxo integrado. Quando um cliente preenche um formulário no seu site, o Zapier pode pegar esses dados e enviá-los para o ChatGPT, que cria um e-mail de boas-vindas personalizado com base nas respostas. Em seguida, o Zapier adiciona o cliente ao seu CRM, como o HubSpot, envia o e-mail personalizado através do seu sistema de e-mail e, por fim, envia uma notificação no Slack para a equipe de vendas. Este fluxo, que conecta cinco ferramentas diferentes, cria uma experiência poderosa e automatizada, multiplicando o valor de cada ferramenta individual.`,
          quiz: [{ question: 'Qual é a "cola" que permite que diferentes ferramentas de IA trabalhem juntas em um fluxo automatizado?', options: ['A força de vontade da equipe.', 'Plataformas de integração como Zapier ou Make.com.', 'Enviar e-mails manualmente entre as equipes.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-l11',
        title: 'Lição 11: Construindo Ferramentas Internas com Low-Code/No-Code e IA',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `A próxima fronteira da produtividade empresarial é capacitar as equipes de negócio a construir suas próprias ferramentas internas. As plataformas de Low-Code/No-Code (LCNC) permitem exatamente isso, e a IA está tornando-as ainda mais poderosas. Essas plataformas são ambientes de desenvolvimento visual que permitem criar aplicativos com pouca ou nenhuma programação, usando interfaces de "arrastar e soltar".

A IA se encaixa nesse ecossistema de duas maneiras principais. Primeiro, como um componente: você pode arrastar e soltar uma funcionalidade de "Análise de Sentimento" ou "Resumo de Texto" no seu aplicativo da mesma forma que arrasta um botão. Segundo, a IA pode ajudar na própria experiência de desenvolvimento: você pode descrever o aplicativo que quer em linguagem natural, e a IA gera a primeira versão para você.

O valor para o negócio é imenso, pois reduz a dependência da equipe de TI para criar ferramentas departamentais simples, permitindo que as áreas de negócio resolvam seus próprios problemas de forma muito mais ágil.`,
        quiz: [
          { 
            question: 'Qual é o principal benefício de usar plataformas de Low-Code/No-Code com IA?', 
            options: [
                'Substituir completamente a necessidade de programadores profissionais na empresa.', 
                'Permitir que as equipes de negócio criem suas próprias ferramentas e automações internas de forma rápida e visual.', 
                'Criar sites públicos para clientes.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
      {
        id: 'm9-l12',
        title: 'Lição 12: O Ecossistema de IA Open Source',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Além das ferramentas comerciais no modelo SaaS, existe um vibrante ecossistema de IA de código aberto, ou Open Source. Essas são ferramentas e modelos criados por comunidades e empresas e disponibilizados gratuitamente para que qualquer um possa usar e modificar.

Um dos principais players nesse espaço é o Hugging Face, que funciona como o "GitHub da IA". É um hub onde pesquisadores compartilham milhares de modelos de IA pré-treinados para todos os tipos de tarefas. Existem também frameworks como o LangChain e o LlamaIndex, que ajudam os desenvolvedores a construir aplicações com LLMs, especialmente usando a arquitetura RAG. Além disso, empresas como a Meta e a Mistral AI lançam modelos de linguagem poderosos, como o Llama 3, que podem ser baixados e executados em sua própria infraestrutura.

As vantagens do Open Source são o custo (geralmente gratuito), o controle e a privacidade, já que tudo roda no seu ambiente, e a customização máxima. A desvantagem é que exige muito mais conhecimento técnico para implementar e manter.`,
        quiz: [
          { 
            question: 'Qual é a principal vantagem de usar um modelo de IA Open Source em vez de uma API comercial?', 
            options: [
                'É sempre mais fácil de usar e não requer conhecimento técnico.', 
                'Oferece maior controle, privacidade e customização, pois o modelo pode ser executado em sua própria infraestrutura.', 
                'Tem suporte técnico 24/7 garantido pelo fornecedor.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
    ],
};