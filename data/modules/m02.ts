import { Module } from '../../types';
import { BookOpen } from '../../components/icons';

export const M2: Module = {
    id: 'm2',
    title: 'Módulo 2: Machine Learning para Prever o Futuro',
    subtitle: 'Como usar dados para prever tendências e comportamento do cliente.',
    icon: BookOpen,
    lessons: [
        {
            id: `m2-l1`,
            title: `Lição 1: O que é Análise Preditiva?`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A Análise Preditiva é a arte de usar dados históricos para fazer previsões sobre o futuro, e o Machine Learning (ML) é o motor que impulsiona essa análise. Em vez de programarmos regras fixas, nós "treinamos" um modelo com dados do passado, e ele aprende os padrões por conta própria.

Vamos a um exemplo de negócio: a prevenção de churn, ou cancelamento de assinaturas. Imagine que você tem uma empresa de assinaturas. Você pode alimentar um modelo de ML com dados de milhares de clientes, tanto os que cancelaram quanto os que permaneceram. Esses dados podem incluir o histórico de uso, os tickets de suporte abertos e o tempo como cliente. O modelo aprenderá quais sinais geralmente precedem um cancelamento. Com esse conhecimento, ele pode analisar seus clientes atuais e atribuir uma "pontuação de risco" a cada um, permitindo que você aja proativamente para reter aqueles com maior probabilidade de sair.`,
            quiz: [
                { question: 'Qual o principal objetivo da Análise Preditiva?', options: ['Analisar o que aconteceu no passado.', 'Usar dados históricos para prever resultados futuros.', 'Armazenar dados de forma segura.'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: `m2-l2`,
            title: `Lição 2: Classificação vs. Regressão`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `No universo do Machine Learning, as previsões geralmente se enquadram em duas categorias principais: classificação e regressão.

A primeira é a Classificação, cujo objetivo é prever uma categoria, respondendo a perguntas de "qual" ou "se". O resultado é sempre uma classe ou um rótulo. Por exemplo, podemos nos perguntar se um cliente vai cancelar ou não, se uma transação é fraude ou legítima, ou se um e-mail é spam, promoção ou importante.

A segunda categoria é a Regressão, que busca prever um número, respondendo a perguntas de "quanto" ou "quantos". O resultado é um valor numérico contínuo. Exemplos práticos incluem prever qual será a receita de vendas no próximo trimestre, qual o preço ideal para um imóvel ou quantos dias um cliente permanecerá ativo.`,
            quiz: [
                { question: 'Prever o valor exato das vendas do próximo mês é um problema de:', options: ['Classificação', 'Regressão', 'Nenhum dos dois'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: `m2-l3`,
            title: `Lição 3: Segmentação Inteligente de Clientes`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A segmentação de clientes tradicional geralmente se baseia em dados demográficos, como idade ou localização. O Machine Learning, no entanto, permite uma abordagem muito mais poderosa: a segmentação comportamental, que agrupa os clientes com base em como eles realmente agem.

Utilizando uma técnica chamada Clustering, a IA pode analisar dados de compra, como frequência, valor e tipo de produto, além de dados de navegação no site. Com isso, ela encontra grupos naturais de clientes que talvez você não conhecesse.

Por exemplo, a IA pode descobrir um grupo de "Compradores Noturnos de Alto Valor", que respondem bem a promoções por e-mail enviadas após as 22h. Ou talvez identifique um segmento de "Caçadores de Descontos", que só compram itens em liquidação. Essa visão detalhada permite a criação de campanhas de marketing muito mais direcionadas e eficazes.`,
            quiz: [
                { question: 'Qual a principal vantagem da segmentação com Machine Learning?', options: ['É mais barata que a segmentação manual', 'Agrupa clientes por comportamento real, não apenas por demografia', 'Funciona sem precisar de dados de clientes'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: `m2-l4`,
            title: `Lição 4: Previsão de Demanda e Gestão de Estoque`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Manter o nível de estoque certo é um desafio constante para as empresas. Ter muito estoque significa capital parado e custos de armazenamento, enquanto pouco estoque resulta em perda de vendas e clientes insatisfeitos. O Machine Learning supera as planilhas tradicionais ao ser capaz de analisar padrões muito mais complexos.

Um modelo de previsão de demanda pode considerar não apenas as vendas passadas, mas também uma variedade de outros fatores. Ele pode levar em conta a sazonalidade, como feriados e estações do ano, o impacto de promoções específicas no aumento das vendas e até mesmo fatores externos, como a previsão do tempo para a venda de sorvetes ou a ocorrência de eventos locais.

O resultado dessa análise aprofundada são previsões mais precisas. Isso leva diretamente a uma redução de custos com armazenamento e a um aumento da satisfação do cliente, que sempre encontrará o produto que procura disponível na prateleira.`,
            quiz: [
                { question: 'Além das vendas passadas, o que um modelo de ML pode usar para prever a demanda?', options: ['Apenas o preço do produto', 'Sazonalidade, promoções e fatores externos', 'A opinião do gerente de estoque'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: `m2-l5`,
            title: `Lição 5: Previsão do Valor do Tempo de Vida do Cliente (LTV)`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `O LTV, ou Lifetime Value, é uma métrica crucial que prevê toda a receita que um cliente trará para sua empresa ao longo do relacionamento dele com você. Saber o LTV é fundamental para tomar decisões de marketing mais inteligentes. A principal pergunta que o LTV ajuda a responder é: "Quanto posso gastar para adquirir um novo cliente?". A resposta, claro, depende do LTV esperado dele.

O Machine Learning pode prever o LTV de um novo cliente com base em suas primeiras interações, comparando seu comportamento com o de milhares de clientes antigos.

Por exemplo, um modelo pode descobrir que clientes que compram o "Produto X" na primeira semana e visitam o site três vezes têm um LTV cinco vezes maior que a média. Com essa informação, você pode tomar uma decisão estratégica de investir mais em anúncios para atrair especificamente esse perfil de cliente de alto valor, otimizando seu orçamento de marketing.`,
            quiz: [
                { question: 'Por que prever o LTV de um cliente é estrategicamente importante?', options: ['Apenas para relatórios anuais', 'Para guiar quanto se deve investir em marketing para adquirir clientes semelhantes', 'Para calcular os impostos da empresa'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: `m2-l6`,
            title: `Lição 6: Detecção de Fraudes e Anomalias`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Sistemas de detecção de fraude baseados em regras fixas, como "bloquear compras acima de R$5.000", são frágeis e fáceis de burlar. Os fraudadores simplesmente aprendem a fazer compras de R$4.999.

O Machine Learning, por outro lado, usa uma abordagem muito mais sofisticada. Ele aprende o que é um comportamento "normal" para cada cliente, criando um perfil de transações padrão. Quando surge uma transação que foge muito desse padrão, ela é sinalizada como uma anomalia.

Por exemplo, se um cliente sempre faz compras em São Paulo durante a semana, e de repente há uma compra às 3 da manhã de um sábado em outra cidade, o modelo de ML detecta essa anomalia. Dependendo do nível de risco, ele pode bloquear a transação imediatamente ou solicitar uma verificação extra, como um código enviado por SMS. Essa abordagem protege tanto a empresa quanto o cliente de forma muito mais eficaz.`,
            quiz: [
                { question: 'Por que o Machine Learning é mais eficaz na detecção de fraudes do que sistemas baseados em regras fixas?', options: ['Porque é mais rápido', 'Porque aprende o padrão de comportamento "normal" e detecta desvios (anomalias)', 'Porque é mais barato'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: `m2-l7`,
            title: `Lição 7: A Importância das "Features"`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `No jargão de Machine Learning, "features" são as colunas de dados que você usa para treinar o modelo. Pense nelas como os "ingredientes" da sua receita preditiva. A seleção das features certas é frequentemente mais importante do que o algoritmo de IA escolhido. Esse processo é chamado de Engenharia de Features, e é aqui que o conhecimento profundo do negócio se torna crucial.

Vamos a um exemplo prático de previsão de churn. Algumas features podem ser ruins e inúteis para o modelo, como o ID do cliente ou sua data de nascimento, que geralmente não são preditivos. Por outro lado, features boas e relevantes podem incluir o número de logins no último mês, o tempo desde a última compra, o número de tickets de suporte abertos ou se o cliente está usando ou não uma funcionalidade chave do produto.

É o seu conhecimento sobre o que realmente impacta a satisfação e o comportamento do cliente que ajudará a selecionar os ingredientes certos para que a previsão seja a mais precisa possível.`,
            quiz: [
                { question: 'O que são "features" em Machine Learning?', options: ['Funcionalidades do software de IA', 'As colunas de dados (variáveis) usadas para treinar o modelo', 'Os resultados da previsão'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: `m2-l8`,
            title: `Lição 8: Ferramentas de ML Acessíveis`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Você não precisa de um doutorado em estatística para começar com Machine Learning. A tecnologia está se tornando cada vez mais acessível, e há várias opções para empresas que querem dar os primeiros passos.

A primeira opção é a IA embutida em ferramentas que você já usa. Muitas plataformas de CRM, como o Salesforce Einstein, e de marketing, como o HubSpot, já possuem funcionalidades de ML prontas, como lead scoring e recomendação de produtos.

A segunda opção são as plataformas de AutoML, ou Machine Learning Automatizado. Ferramentas como o Vertex AI do Google, o Azure Machine Learning da Microsoft e o Amazon SageMaker permitem que você envie seus dados e a plataforma testa vários modelos, encontrando o melhor para você através de uma interface mais visual.

Por fim, as ferramentas de Business Intelligence, como Tableau e Power BI, também estão incorporando funcionalidades preditivas, permitindo análises mais avançadas diretamente em seus dashboards.`,
            quiz: [
                { question: 'O que é AutoML?', options: ['Machine Learning feito manualmente por programadores', 'Plataformas que automatizam o processo de criação de modelos de ML', 'Um tipo de carro autônomo'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: `m2-l9`,
            title: `Lição 9: Interpretando os Resultados`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Um modelo de Machine Learning raramente dá uma resposta de "sim" ou "não". Em vez disso, ele fornece uma probabilidade.

Por exemplo, em vez de afirmar categoricamente "Este cliente vai cancelar", o modelo dirá "Este cliente tem 92% de probabilidade de cancelar". Essa pontuação é extremamente útil, pois permite priorizar ações. Você pode, por exemplo, focar seus esforços de retenção nos clientes que têm uma probabilidade de cancelamento acima de 80%.

Outro ponto importante é a Importância das Features. Bons modelos podem explicar quais fatores mais influenciaram a previsão. Por exemplo, a IA pode informar: "A previsão de churn foi alta porque o número de logins do cliente caiu 70% e ele abriu 3 tickets de suporte sobre cobrança". Isso é incrivelmente valioso, pois o modelo não apenas prevê o que vai acontecer, mas também ajuda a entender o "porquê", gerando insights que podem levar a melhorias no seu produto ou serviço.`,
            quiz: [
                { question: 'O que um modelo de classificação geralmente fornece como resultado?', options: ['Uma certeza absoluta de sim ou não', 'Uma probabilidade (ex: 92% de chance de ser fraude)', 'Um relatório em PDF'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: `m2-l10`,
            title: `Lição 10: Workshop - Seu Primeiro Projeto Preditivo`,
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Vamos estruturar uma ideia de projeto de Machine Learning para o seu negócio. O segredo é transformar um desafio de negócio em um plano de projeto claro. Responda às seguintes perguntas:

Primeiro, qual é o Problema de Negócio? Pense em uma pergunta sobre o futuro que, se respondida, traria grande valor. Por exemplo: "Quais clientes estão mais propensos a comprar o Produto Y no próximo mês?".

Segundo, qual é o Objetivo do Modelo? O que o modelo de ML vai prever? É um problema de Classificação ou Regressão? No nosso exemplo, seria "Classificar clientes em 'provável comprador' e 'não provável comprador'".

Terceiro, quais são os Dados Necessários? Que dados ou "features" nós temos que poderiam ajudar a prever isso? Poderia ser o histórico de compras, os produtos visualizados, o tempo no site e dados demográficos.

Por último, qual é a Métrica de Sucesso? Como saberemos se o modelo funcionou? Um exemplo seria: "Se o modelo identificar um grupo de clientes onde a taxa de conversão da campanha for três vezes maior que a média, o projeto foi um sucesso".`,
            quiz: [
                { question: 'Qual o primeiro passo para estruturar um projeto de Machine Learning?', options: ['Escolher o algoritmo', 'Definir o problema de negócio e o objetivo da previsão', 'Contratar um cientista de dados'], correctAnswerIndex: 1 },
            ],
        },
        {
            id: 'm2-l11',
            title: 'Lição 11: MLOps na Prática: Gerenciando o Ciclo de Vida dos Modelos',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Criar um modelo de Machine Learning é apenas o começo da jornada. MLOps, ou Machine Learning Operations, é a disciplina de colocar esses modelos em produção de forma confiável e, mais importante, mantê-los performando ao longo do tempo. É o equivalente ao "DevOps" no mundo do Machine Learning.

A razão pela qual o MLOps é crucial é que os modelos de ML se degradam com o tempo. O mundo muda, o comportamento do cliente muda, e um modelo treinado com dados de seis meses atrás pode não ser mais preciso hoje. Esse fenômeno é conhecido como "model drift".

O ciclo de vida do MLOps envolve algumas fases principais. Começa com o Desenvolvimento, que é a criação e o treinamento do modelo. Em seguida, vem a Implantação, que é colocar o modelo em produção para que ele possa fazer previsões em tempo real. Depois, o Monitoramento contínuo acompanha a performance do modelo para detectar o "drift". Finalmente, o Retreinamento automatizado atualiza o modelo com dados novos para garantir sua precisão. Para um líder, o importante é entender que um modelo de ML não é um projeto com fim, mas um produto vivo que exige manutenção contínua.`,
            quiz: [
              { 
                question: 'O que é "model drift"?', 
                options: [
                    'Um erro no código do modelo.', 
                    'A degradação da performance de um modelo de ML ao longo do tempo, porque o mundo real mudou.', 
                    'A técnica para treinar modelos mais rapidamente.'
                ], 
                correctAnswerIndex: 1 
              }
            ],
        },
        {
            id: 'm2-l12',
            title: 'Lição 12: Além da Previsão: ML para Otimização de Processos',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `O Machine Learning não serve apenas para prever o futuro. Uma área avançada, chamada Aprendizado por Reforço (Reinforcement Learning), é usada para otimização, ou seja, para encontrar a melhor sequência de ações para atingir um objetivo específico.

A analogia mais comum é a de treinar um cachorro. Você não ensina a ele todas as regras passo a passo. Em vez disso, você dá um objetivo, como "buscar a bolinha", e recompensa o bom comportamento, como quando ele se aproxima da bolinha, e penaliza o mau comportamento. Com o tempo, através de tentativa e erro, ele aprende a sequência de ações ideal para maximizar a recompensa.

No mundo dos negócios, as aplicações são poderosas. Na precificação dinâmica, um modelo pode aprender a ajustar os preços de um produto em tempo real para maximizar a receita. Na gestão de campanhas, uma IA pode alocar o orçamento de marketing entre diferentes canais para maximizar as conversões. E na logística, pode otimizar as rotas de entrega para minimizar o tempo e o combustível. O Aprendizado por Reforço move o Machine Learning de um papel passivo de prever para um papel ativo de tomar decisões.`,
            quiz: [
              { 
                question: 'Qual é o principal objetivo do Aprendizado por Reforço?', 
                options: [
                    'Classificar clientes em diferentes segmentos.', 
                    'Encontrar a melhor sequência de ações para maximizar uma recompensa e atingir um objetivo.', 
                    'Analisar o sentimento em textos de redes sociais.'
                ], 
                correctAnswerIndex: 1 
              }
            ],
        },
    ],
};