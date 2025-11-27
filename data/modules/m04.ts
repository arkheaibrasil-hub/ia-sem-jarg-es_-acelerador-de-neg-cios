import { Module } from '../../types';
import { BrainCog } from '../../components/icons';

export const M4: Module = {
    id: 'm4',
    title: 'Módulo 4: Redes Neurais para Entender Padrões',
    subtitle: 'Como a IA pode identificar oportunidades que não são óbvias.',
    icon: BrainCog,
    lessons: [
      {
          id: 'm4-l1',
          title: 'Lição 1: O que são Redes Neurais?',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'As Redes Neurais são um tipo de Machine Learning inspirado na estrutura do cérebro humano. Elas consistem em camadas de "neurônios" interconectados, onde cada um processa uma pequena parte da informação. Ao trabalharem em conjunto, essas camadas conseguem aprender e reconhecer padrões extremamente complexos nos dados, algo que seria muito difícil para outros tipos de algoritmos.\n\nUma boa analogia é pensar em como você reconhece o rosto de um amigo. Você não analisa uma característica de cada vez; seu cérebro processa o formato dos olhos, o nariz, a boca e outras feições, tudo ao mesmo tempo para chegar a uma conclusão. As redes neurais funcionam de forma semelhante, analisando múltiplas facetas dos dados simultaneamente para identificar padrões complexos.',
          quiz: [{ question: 'A estrutura das Redes Neurais é inspirada em quê?', options: ['Na forma como um computador funciona', 'No cérebro humano', 'Em organogramas de empresas'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l2',
          title: 'Lição 2: Deep Learning - Aprofundando a Rede',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O Deep Learning, ou Aprendizado Profundo, é simplesmente o termo usado para descrever redes neurais com muitas camadas, daí o nome "profundo". Essas camadas extras permitem que a rede aprenda padrões de forma hierárquica e em diferentes níveis de abstração, tornando-a muito mais poderosa.\n\nVamos a um exemplo de reconhecimento de imagem. A primeira camada da rede pode aprender a reconhecer características simples, como bordas e cores. A segunda camada pode combinar essas bordas para reconhecer formas mais complexas, como olhos e narizes. Por fim, uma terceira camada pode combinar essas formas para reconhecer um rosto completo.\n\nÉ essa profundidade e capacidade de aprendizado hierárquico que torna o Deep Learning tão eficaz para tarefas com dados complexos, como imagens, áudio e vídeo.',
          quiz: [{ question: 'O que caracteriza o "Deep Learning"?', options: ['É um tipo de IA que aprende devagar', 'O uso de Redes Neurais com muitas camadas', 'É uma teoria que ainda não tem aplicação prática'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l3',
          title: 'Lição 3: Quando Usar Redes Neurais?',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'As Redes Neurais não são a solução para todos os problemas de negócio. Elas realmente brilham quando algumas condições específicas são atendidas.\n\nPrimeiramente, elas são ideais para lidar com dados complexos e não estruturados, como imagens, áudio, vídeo e texto, onde os padrões não são lineares ou óbvios. Em segundo lugar, elas se beneficiam de um grande volume de dados, o famoso "Big Data". Redes neurais precisam de muitos exemplos para aprender e geralmente superam outros modelos quando a quantidade de dados é massiva. Por fim, elas são excelentes para identificar relações não-lineares, ou seja, quando a relação entre as variáveis de entrada e o resultado é complexa e não pode ser descrita por uma fórmula simples.\n\nPara problemas mais simples, com dados bem estruturados em tabelas, modelos de Machine Learning tradicionais costumam ser mais rápidos, eficientes e mais fáceis de interpretar.',
          quiz: [{ question: 'Em qual dos cenários abaixo uma Rede Neural seria a escolha mais apropriada?', options: ['Prever vendas com base em uma planilha com 100 linhas', 'Analisar 1 milhão de imagens para detectar defeitos em produtos', 'Calcular a média de idade dos clientes'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l4',
          title: 'Lição 4: O "Problema da Caixa-Preta"',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Um dos maiores desafios das Redes Neurais, especialmente as profundas, é o que chamamos de "problema da caixa-preta" (black box). Devido à sua enorme complexidade, com milhões de conexões entre os neurônios, muitas vezes é extremamente difícil entender *exatamente como* a rede chegou a uma determinada decisão. Ela fornece a resposta, mas não o raciocínio detalhado.\n\nIsso pode ser um grande problema em áreas críticas como finanças ou medicina, onde a explicabilidade é crucial. Por exemplo, se uma IA nega um empréstimo, o banco precisa ser capaz de explicar o porquê para o cliente, tanto por questões de regulação quanto de transparência.\n\nPara resolver isso, o campo da IA Explicável (XAI) está trabalhando ativamente para criar técnicas que consigam "abrir" essa caixa-preta, tornando as decisões das redes neurais mais transparentes e interpretáveis para os humanos.',
          quiz: [{ question: 'O que significa o "problema da caixa-preta" em Redes Neurais?', options: ['Que elas não funcionam em computadores escuros', 'A dificuldade em entender o raciocínio exato por trás de suas decisões', 'Que elas só funcionam com dados sigilosos'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l5',
          title: 'Lição 5: Estudo de Caso - Netflix',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A Netflix é um exemplo clássico do uso massivo de redes neurais para personalizar a experiência do usuário. Uma das suas aplicações mais interessantes é a personalização das capas, ou thumbnails, dos filmes e séries para cada assinante.\n\nA IA da Netflix analisa seu histórico de visualização para entender seus gostos e preferências. Por exemplo, se você assiste a muitos filmes de comédia com uma determinada atriz, e essa mesma atriz faz uma participação em um filme de ação, a IA pode te mostrar uma capa destacando a atriz para te convencer a assistir. No entanto, outra pessoa que prefere filmes de ação verá uma capa do mesmo filme, mas com uma cena de explosão.\n\nA rede neural aprende qual imagem tem a maior probabilidade de gerar um clique *para cada usuário*, otimizando o engajamento na plataforma de forma individual e em grande escala.',
          quiz: [{ question: 'Como a Netflix usa redes neurais para as capas dos filmes?', options: ['Usa a mesma capa para todos os usuários', 'Personaliza a capa para cada usuário com base no seu histórico de visualização', 'Troca a capa aleatoriamente a cada dia'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l6',
          title: 'Lição 6: CNNs - Os Olhos das Redes Neurais',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'As Redes Neurais Convolucionais, ou CNNs, são um tipo especializado de rede neural, projetado especificamente para processar dados de imagem. Elas são, em essência, os "olhos" da IA moderna, responsáveis pela maioria dos avanços em visão computacional.\n\nUma boa analogia é pensar em como um médico especialista analisa uma chapa de raio-X. Ele não olha para a imagem inteira de uma vez, mas escaneia pequenas partes em busca de padrões específicos, como formas, texturas e bordas. As CNNs fazem algo semelhante: elas usam "filtros" que deslizam sobre a imagem, procurando por características simples. À medida que a informação passa para camadas mais profundas da rede, essas características simples são combinadas para reconhecer padrões mais complexos, como um rosto em uma foto ou um tumor em uma imagem médica.',
          quiz: [{ question: 'As Redes Neurais Convolucionais (CNNs) são particularmente eficazes para qual tipo de tarefa?', options: ['Análise de planilhas de vendas', 'Processamento e reconhecimento de imagens', 'Previsão do mercado de ações'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l7',
          title: 'Lição 7: RNNs - A Memória das Redes Neurais',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'As Redes Neurais Recorrentes, ou RNNs, são projetadas para trabalhar com dados sequenciais, onde a ordem da informação é fundamental. Elas possuem uma espécie de "memória" que lhes permite levar em conta informações de etapas anteriores ao processar a etapa atual.\n\nUma analogia simples é a leitura de uma frase. Para entender o significado da última palavra, você precisa se lembrar das palavras que vieram antes. As RNNs aplicam esse mesmo princípio aos dados, tornando-as a base para diversas aplicações. Elas são fundamentais no Processamento de Linguagem Natural, para tarefas como tradução e resumo de texto; na Previsão de Séries Temporais, para prever o preço de uma ação ou a demanda de um produto; e no Reconhecimento de Voz, para transcrever o que uma pessoa está dizendo em tempo real.',
          quiz: [{ question: 'Qual é a principal característica das Redes Neurais Recorrentes (RNNs)?', options: ['Sua habilidade de processar imagens em alta velocidade.', 'Sua capacidade de lidar com dados sequenciais, usando uma "memória" de informações passadas.', 'Sua simplicidade e falta de camadas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l8',
          title: 'Lição 8: Transfer Learning - O Atalho Inteligente',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Treinar uma rede neural profunda do zero é uma tarefa monumental, que exige uma quantidade gigantesca de dados e um poder computacional massivo, algo fora do alcance da maioria das empresas. É aqui que entra o Transfer Learning, ou Aprendizado por Transferência, uma técnica que oferece um atalho poderoso.\n\nA analogia perfeita é a contratação de um especialista. Em vez de ensinar um médico do zero, você contrata um médico já formado — que seria um modelo pré-treinado por gigantes como o Google em milhões de dados — e apenas o especializa nos seus problemas específicos, um processo chamado "fine-tuning" com seus próprios dados.\n\nIsso permite que empresas com menos dados e recursos possam criar modelos de IA de alta performance, aproveitando o conhecimento acumulado de modelos que já foram treinados em uma escala muito maior.',
          quiz: [{ question: 'O que é Transfer Learning?', options: ['Transferir dados de um computador para outro.', 'A técnica de usar um modelo de IA pré-treinado como ponto de partida para um novo problema.', 'Um tipo de rede neural que não precisa de dados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l9',
          title: 'Lição 9: Ferramentas e Plataformas para Deep Learning',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Para implementar projetos de Deep Learning, as empresas geralmente recorrem a frameworks de programação e plataformas de nuvem, que tornam a tecnologia mais acessível.\n\nOs frameworks mais populares são o TensorFlow, do Google, e o PyTorch, do Facebook. Eles são as "linguagens" ou conjuntos de ferramentas que os desenvolvedores usam para construir e treinar as redes neurais, fornecendo os blocos de construção necessários.\n\nAs plataformas de nuvem, como Amazon Web Services (AWS), Google Cloud (Vertex AI) e Microsoft (Azure), oferecem plataformas de IA que facilitam todo o ciclo de vida dos modelos. Elas fornecem o poder computacional necessário, especialmente as GPUs, como um serviço sob demanda. Como líder, o importante é saber que essas ferramentas existem e permitem que sua equipe técnica construa soluções poderosas sem a necessidade de montar uma infraestrutura de supercomputadores do zero.',
          quiz: [{ question: 'Qual o principal benefício de usar plataformas de nuvem como AWS ou Google Cloud para Deep Learning?', options: ['Elas são as únicas que funcionam.', 'Elas fornecem o poder computacional necessário sob demanda, sem que a empresa precise comprar e manter hardware caro.', 'Elas oferecem cursos gratuitos de programação.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l10',
          title: 'Lição 10: O Futuro das Redes Neurais',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'As redes neurais continuam a evoluir a um ritmo impressionante. Duas tendências importantes para ficar de olho são a IA Explicável e a Computação Neuromórfica.\n\nA IA Explicável, ou XAI, busca superar o problema da "caixa-preta". A capacidade de tornar as decisões dos modelos mais transparentes é uma prioridade, especialmente para garantir a adoção da tecnologia em áreas de alto risco como saúde e finanças.\n\nA Computação Neuromórfica é uma abordagem de hardware. Em vez de simular uma rede neural em um computador tradicional, os pesquisadores estão construindo chips que imitam a arquitetura do cérebro. Esses chips prometem ser muito mais eficientes em termos de energia para executar tarefas de IA, um passo crucial para a sustentabilidade da tecnologia.\n\nA era das redes neurais está apenas começando, e sua capacidade de encontrar padrões complexos continuará a ser o motor da inovação em todos os setores.',
          quiz: [{ question: 'Qual tendência futura busca resolver o problema da "caixa-preta" das redes neurais?', options: ['Aumento do número de camadas nas redes.', 'IA Explicável (XAI).', 'Computação em nuvem mais rápida.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-l11',
        title: 'Lição 11: Além da Caixa-Preta: IA Explicável (XAI) na Prática',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `A IA Explicável (XAI) busca responder à pergunta fundamental: "Por que a IA tomou essa decisão?". Essa capacidade é vital para construir confiança, depurar modelos e cumprir regulações em diversas indústrias.

Existem algumas técnicas comuns de XAI. A mais simples é a Importância de Features, que mostra quais variáveis de entrada tiveram mais peso na decisão. Por exemplo, ela pode dizer que a previsão de churn de um cliente foi alta principalmente porque seu número de logins caiu 80%. Outra técnica é o LIME, que explica a previsão para um único cliente, criando um modelo mais simples que "imita" o comportamento da rede neural complexa apenas para aquele caso específico. Uma abordagem mais robusta é o SHAP, que distribui a "contribuição" de cada feature para a previsão final, mostrando não apenas o que foi importante, mas o quanto cada fator contribuiu, seja de forma positiva ou negativa.

O valor de negócio é imenso. Em um cenário de negação de crédito, o XAI não só permite que o banco explique o motivo para o cliente, mas também ajuda o próprio banco a entender se o modelo está se comportando como esperado e de forma justa.`,
        quiz: [
          { 
            question: 'Qual é o principal objetivo da IA Explicável (XAI)?', 
            options: [
                'Tornar os modelos de IA mais complexos.', 
                'Entender e explicar como um modelo de IA chegou a uma decisão específica.', 
                'Acelerar o treinamento de redes neurais.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
      {
        id: 'm4-l12',
        title: 'Lição 12: GANs para Criação de Dados Sintéticos',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `As Redes Adversariais Generativas (GANs) não servem apenas para criar arte digital. Uma de suas aplicações de negócio mais poderosas é a geração de dados sintéticos.

O problema que elas resolvem é a falta de dados. Muitas vezes, não temos dados suficientes para treinar um bom modelo de Machine Learning, especialmente em casos raros, como detecção de fraudes ou doenças raras, ou quando os dados são sensíveis e protegidos por leis de privacidade.

A solução com GANs é engenhosa. Uma GAN pode aprender os padrões estatísticos dos seus dados reais e, a partir daí, gerar novos dados artificiais que se parecem muito com os dados originais, mas não são cópias exatas.

As aplicações são diversas. A primeira é o Aumento de Dados. Se você tem poucas amostras de fraude, pode usar uma GAN para criar mais exemplos sintéticos, melhorando o treinamento do seu modelo de detecção. A segunda é a Privacidade. Um hospital, por exemplo, pode usar uma GAN para criar um conjunto de dados sintéticos de pacientes que mantém as características estatísticas dos dados reais, mas sem conter nenhuma informação de pacientes reais. Esse dado pode então ser compartilhado com pesquisadores sem violar a privacidade.`,
        quiz: [
          { 
            question: 'Qual é uma aplicação prática de negócio para a geração de dados sintéticos com GANs?', 
            options: [
                'Criar imagens de gatos para redes sociais.', 
                'Aumentar a quantidade de dados de treinamento para casos raros, como detecção de fraude, ou criar dados anônimos para pesquisa.', 
                'Substituir completamente a necessidade de coletar dados reais.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
    ],
};