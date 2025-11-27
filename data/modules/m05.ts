import { Module } from '../../types';
import { Eye } from '../../components/icons';

export const M5: Module = {
    id: 'm5',
    title: 'Módulo 5: Visão Computacional',
    subtitle: 'Aplicações em varejo, logística e controle de qualidade.',
    icon: Eye,
    lessons: [
      {
          id: 'm5-l1',
          title: 'Lição 1: Ensinando a Máquina a Ver',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A Visão Computacional é um campo fascinante da Inteligência Artificial que treina computadores para "ver", interpretar e entender informações do mundo visual, como imagens e vídeos. Da mesma forma que o Processamento de Linguagem Natural (PLN) ensina a máquina a ler, a Visão Computacional a ensina a enxergar.\n\nPara alcançar essa capacidade, são utilizadas Redes Neurais, especialmente as de Deep Learning, que são treinadas com milhões de imagens para aprender a reconhecer padrões visuais. O impacto dessa tecnologia nos negócios que lidam com o mundo físico, como varejo, indústria e logística, é gigantesco e transformador.',
          quiz: [{ question: 'Qual o objetivo da Visão Computacional?', options: ['Analisar dados de planilhas', 'Interpretar e entender informações de imagens e vídeos', 'Criar músicas'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l2',
          title: 'Lição 2: Classificação de Imagens vs. Detecção de Objetos',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Existem várias tarefas em Visão Computacional, mas duas das mais comuns são a classificação de imagens e a detecção de objetos.\n\nA primeira, Classificação de Imagens, consiste em a IA olhar para uma imagem e a descrever com uma única etiqueta. Por exemplo, ao ver a foto de um gato, a IA simplesmente responde "gato".\n\nA segunda, Detecção de Objetos, é mais avançada. A IA não só identifica os objetos presentes em uma imagem, mas também desenha uma caixa ao redor de cada um deles, localizando-os com precisão. Por exemplo, ao analisar a foto de uma rua, a IA desenharia caixas e identificaria "carro", "pedestre" e "semáforo".\n\nA detecção é mais complexa, mas oferece muito mais utilidade para aplicações no mundo real, onde a localização dos objetos é tão importante quanto sua identificação.',
          quiz: [{ question: 'Qual a diferença entre Classificação e Detecção de Objetos?', options: ['Não há diferença', 'Classificação dá uma etiqueta à imagem inteira, enquanto Detecção encontra e localiza múltiplos objetos na imagem', 'Detecção só funciona em vídeos'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l3',
          title: 'Lição 3: Estudo de Caso - Varejo Inteligente',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'As lojas físicas estão usando a Visão Computacional para obter o mesmo tipo de dados que o e-commerce possui, permitindo-lhes competir de forma mais eficaz. Existem diversas aplicações práticas.\n\nUma delas é o monitoramento de gôndolas. Câmeras analisam as prateleiras em tempo real para identificar produtos fora de estoque ou no lugar errado, enviando alertas para que os funcionários possam reabastecer a prateleira rapidamente. Outra aplicação é a análise de fluxo de clientes, onde câmeras no teto geram "mapas de calor" que mostram as áreas mais visitadas da loja, ajudando os gerentes a otimizar o layout dos produtos.\n\nO exemplo mais avançado são as lojas sem caixa, como a Amazon Go. Nesses locais, um sistema complexo de câmeras identifica quais produtos um cliente pega da prateleira, permitindo que ele simplesmente saia da loja e a cobrança seja feita automaticamente em sua conta.',
          quiz: [{ question: 'Como a Visão Computacional pode ajudar uma loja de varejo?', options: ['Apenas para segurança', 'Monitorando o estoque nas gôndolas e analisando o fluxo de clientes', 'Tocando música ambiente'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l4',
          title: 'Lição 4: Estudo de Caso - Indústria 4.0',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Na manufatura, a Visão Computacional é um pilar da chamada Indústria 4.0, principalmente por sua capacidade de automatizar o controle de qualidade com uma precisão sobre-humana.\n\nVamos a um exemplo. Em uma linha de produção de garrafas, uma câmera de alta velocidade tira uma foto de cada garrafa que passa. Um modelo de IA, que foi treinado com milhares de fotos de garrafas perfeitas e defeituosas, analisa cada imagem em milissegundos.\n\nSe o modelo detecta uma falha, como uma rachadura, um arranhão ou um erro no rótulo, ele envia um sinal para um braço mecânico, que remove a garrafa defeituosa da linha de produção instantaneamente. Esse processo garante um nível de qualidade muito superior e mais consistente do que a inspeção visual humana, que é mais lenta e sujeita a fadiga e erros.',
          quiz: [{ question: 'Qual é uma aplicação comum da Visão Computacional na indústria?', options: ['Controle de qualidade automatizado', 'Gerenciamento de RH', 'Marketing de conteúdo'], correctAnswerIndex: 0 }],
      },
      {
          id: 'm5-l5',
          title: 'Lição 5: Reconhecimento Óptico de Caracteres (OCR)',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O Reconhecimento Óptico de Caracteres, ou OCR, é uma tecnologia de Visão Computacional que permite que os computadores "leiam" texto dentro de imagens. Se você já tirou uma foto de um documento e seu celular permitiu que você copiasse o texto contido nela, você usou o OCR.\n\nAs aplicações de negócio são vastas. A mais comum é a digitalização de documentos, que permite converter pilhas de papel, como contratos, faturas e formulários, em texto digital que pode ser pesquisado e analisado. Outros exemplos incluem a leitura de placas de veículos em estacionamentos e pedágios automatizados, e a leitura de medidores de energia, onde empresas podem usar drones para tirar fotos de medidores de luz e o OCR lê o consumo automaticamente, otimizando o processo de faturamento.',
          quiz: [{ question: 'Qual a função do OCR?', options: ['Reconhecer rostos', 'Converter texto de imagens em texto digital', 'Detectar emoções'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l6',
          title: 'Lição 6: Reconhecimento Facial: Tecnologia e Ética',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O reconhecimento facial é uma das aplicações mais conhecidas e, ao mesmo tempo, mais controversas da Visão Computacional. A tecnologia funciona mapeando as características faciais de uma pessoa, como a distância entre os olhos e o formato do nariz, e convertendo esses pontos em uma assinatura matemática única.\n\nNo mundo dos negócios, as aplicações incluem segurança, como o desbloqueio de smartphones e o controle de acesso a áreas restritas. No marketing, lojas podem analisar de forma anônima e agregada o gênero e a faixa etária dos clientes para entender melhor seu público.\n\nNo entanto, o uso de reconhecimento facial levanta sérias questões éticas sobre privacidade e vigilância. Além disso, há o desafio do viés algorítmico, onde o sistema pode apresentar taxas de erro mais altas para certos grupos demográficos, levando a decisões injustas.',
          quiz: [{ question: 'Qual é um dos maiores desafios éticos associados ao reconhecimento facial?', options: ['O alto custo das câmeras de alta resolução.', 'Questões de privacidade, vigilância e potencial de viés.', 'A dificuldade de integrar com outros sistemas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l7',
          title: 'Lição 7: Segmentação de Imagem - Entendendo o Contexto',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Enquanto a detecção de objetos desenha uma caixa retangular ao redor de um item, a segmentação de imagem vai um passo além e oferece uma compreensão muito mais detalhada. Ela classifica a imagem a nível de pixel, colorindo cada pixel de acordo com o objeto ao qual ele pertence.\n\nComo analogia, em vez de apenas desenhar um retângulo ao redor de um carro em uma foto, a segmentação "pinta" perfeitamente apenas a área exata do carro. Isso dá à IA uma compreensão muito mais precisa da forma e dos limites de cada objeto na cena.\n\nAs aplicações dessa técnica são avançadas. Carros autônomos a usam para entender exatamente onde a estrada termina e a calçada começa. Na medicina, ela ajuda a delimitar com precisão o tamanho e a forma de um tumor em uma ressonância magnética. E no e-commerce, é usada para remover automaticamente o fundo de fotos de produtos.',
          quiz: [{ question: 'Qual a principal vantagem da Segmentação de Imagem sobre a Detecção de Objetos?', options: ['É mais rápida de processar.', 'Fornece uma compreensão muito mais detalhada e precisa da forma e dos limites de um objeto.', 'Funciona melhor com imagens de baixa qualidade.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l8',
          title: 'Lição 8: Geração de Imagens com GANs',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'As Redes Adversariais Generativas, ou GANs, são uma arquitetura fascinante de IA usada para gerar imagens sintéticas ultrarrealistas. Elas consistem em duas redes neurais que competem entre si em um jogo de gato e rato.\n\nA primeira rede é o Gerador, que tenta criar imagens falsas que pareçam reais. A segunda é o Discriminador, que tenta identificar se uma imagem é real ou se foi criada pelo gerador.\n\nA melhor analogia é pensar em um falsificador de arte (o gerador) tentando enganar um detetive de arte (o discriminador). Com o tempo, o feedback do detetive faz o falsificador melhorar, e as melhorias do falsificador forçam o detetive a se aprimorar. Essa competição resulta em imagens falsas quase perfeitas.\n\nAs aplicações de negócio incluem o design de produtos, a criação de conteúdo para marketing e até mesmo o uso na moda para criar novas peças de roupa.',
          quiz: [{ question: 'Em uma GAN, qual é o papel da rede "Geradora"?', options: ['Identificar imagens falsas.', 'Tentar criar imagens sintéticas que pareçam reais.', 'Classificar imagens existentes.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l9',
          title: 'Lição 9: Aplicações na Agricultura (AgroTech)',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A Visão Computacional está revolucionando a agricultura, um setor tradicionalmente de baixa tecnologia, tornando-a mais eficiente, precisa e sustentável. As aplicações são diversas e impactantes.\n\nNo monitoramento de colheitas, drones equipados com câmeras voam sobre as plantações. A IA analisa as imagens para detectar sinais de doenças, pragas ou falta de irrigação em áreas específicas. Isso permite que os agricultores ajam de forma direcionada, em vez de pulverizar a lavoura inteira, economizando recursos e reduzindo o impacto ambiental.\n\nOutra aplicação são os robôs de colheita, que usam visão computacional para identificar frutas e vegetais maduros e colhê-los com precisão, reduzindo o desperdício. Além disso, a IA pode analisar imagens de drones para contar o gado em grandes pastagens, uma tarefa que antes era demorada e imprecisa.',
          quiz: [{ question: 'Como drones com Visão Computacional podem ajudar na agricultura?', options: ['Apenas para tirar fotos bonitas da fazenda.', 'Detectando áreas específicas da plantação com doenças ou pragas.', 'Substituindo os tratores.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l10',
          title: 'Lição 10: O Futuro da Visão: Realidade Aumentada e IA Multimodal',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O futuro da Visão Computacional reside na sua integração com outras tecnologias e sentidos, tornando as interações entre o mundo físico e o digital ainda mais profundas.\n\nA primeira grande tendência é a combinação com a Realidade Aumentada (AR). Imagine um técnico de manutenção usando óculos de AR. A câmera do óculos filma um equipamento, a IA identifica as peças em tempo real e sobrepõe as instruções de reparo diretamente no campo de visão do técnico, guiando-o passo a passo.\n\nA segunda tendência é a IA Multimodal, que é a combinação da visão com outros tipos de IA, como o processamento de áudio. Um carro autônomo, por exemplo, não apenas "vê" um pedestre, mas também pode "ouvir" uma sirene para tomar decisões mais seguras e contextuais. A capacidade de ver e interpretar o mundo visual em tempo real abrirá portas para aplicações que hoje parecem ficção científica.',
          quiz: [{ question: 'O que é IA Multimodal no contexto da Visão Computacional?', options: ['Usar múltiplas câmeras ao mesmo tempo.', 'Combinar a visão com outros tipos de dados, como áudio, para uma compreensão mais completa.', 'Uma nova marca de óculos inteligentes.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-l11',
        title: 'Lição 11: Análise de Vídeo em Tempo Real',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `A Visão Computacional vai muito além das imagens estáticas. A análise de vídeo em tempo real permite que a IA entenda ações e eventos conforme eles acontecem, abrindo um leque de aplicações dinâmicas. Para isso, a IA não apenas processa cada quadro (frame) do vídeo individualmente, mas também analisa a relação entre os quadros para entender movimento e mudança ao longo do tempo.

As aplicações de negócio são vastas. Na segurança inteligente, em vez de um segurança ter que monitorar 20 telas, a IA pode analisar as câmeras e alertar sobre comportamentos suspeitos, como uma pessoa abandonando uma bagagem em um aeroporto. No varejo, pode-se analisar como os clientes se movem pela loja e se as filas dos caixas estão ficando muito longas. E na segurança do trabalho, uma IA pode detectar se um operário em uma fábrica está usando o equipamento de proteção individual (EPI) correto ou se está se aproximando demais de uma máquina perigosa, prevenindo acidentes.`,
        quiz: [
          { 
            question: 'Qual é a principal diferença entre a análise de imagem e a análise de vídeo?', 
            options: [
                'A análise de vídeo é sempre mais rápida.', 
                'A análise de vídeo considera a relação entre os quadros ao longo do tempo para entender movimento e ações.', 
                'A análise de imagem usa uma tecnologia mais avançada.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
      {
        id: 'm5-l12',
        title: 'Lição 12: IA Multimodal na Prática',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `A IA Multimodal é a próxima fronteira da inteligência artificial, onde os modelos são capazes de entender e raciocinar sobre múltiplos tipos de dados, ou modalidades, simultaneamente. Essa abordagem aproxima a IA da forma como nós, humanos, percebemos o mundo, usando vários sentidos ao mesmo tempo.

Um exemplo prático e poderoso é um carro autônomo. Para dirigir com segurança, ele utiliza um sistema multimodal complexo. Ele usa a Visão de câmeras para ver pedestres e semáforos, o LiDAR e o Radar para medir a distância e a velocidade dos objetos com precisão, o Áudio de microfones para ouvir sirenes de ambulâncias, e os Dados de Mapas para saber a rota e os limites de velocidade. Um modelo multimodal integra todas essas informações para tomar uma decisão muito mais robusta e segura do que um modelo que usasse apenas a visão.

O impacto nos negócios será profundo. Imagine um assistente de IA para reuniões que não apenas transcreve o que foi dito, mas também analisa a apresentação de slides e até a linguagem corporal dos participantes para gerar um resumo completo e contextualizado.`,
        quiz: [
          { 
            question: 'Por que a IA Multimodal é importante para um carro autônomo?', 
            options: [
                'Porque torna o carro mais bonito.', 
                'Porque permite que o carro toque músicas de diferentes estilos.', 
                'Porque a combinação de diferentes tipos de dados (visão, áudio, radar) leva a uma tomada de decisão mais segura e robusta.'
            ], 
            correctAnswerIndex: 2 
          }
        ],
      },
    ],
};