import { Module } from '../../types';
import { Database } from '../../components/icons';

export const M8: Module = {
    id: 'm8',
    title: 'Módulo 8: Estratégia de Dados para IA',
    subtitle: 'Como coletar, organizar e utilizar os dados da sua empresa.',
    icon: Database,
    lessons: [
      {
          id: 'm8-l1',
          title: 'Lição 1: Revisão - Por que os Dados são Tudo',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Como vimos anteriormente, os dados são o combustível da IA. O princípio "Garbage In, Garbage Out" — ou seja, se entra lixo, sai lixo — é absoluto nesse universo. Neste módulo, vamos aprofundar os aspectos estratégicos da gestão de dados, indo além da teoria.\n\nUma Estratégia de Dados eficaz não é sobre a tecnologia em si, mas sobre como sua empresa vai usar a informação como um ativo para atingir seus objetivos. Uma boa estratégia garante que os dados certos estejam disponíveis, com a qualidade certa, para as pessoas e sistemas certos, e no momento certo. É a base sobre a qual todos os projetos de IA bem-sucedidos são construídos.',
          quiz: [{ question: 'Uma Estratégia de Dados é principalmente sobre:', options: ['Comprar o software de banco de dados mais caro', 'Usar a informação como um ativo estratégico para o negócio', 'Contratar mais analistas'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l2',
          title: 'Lição 2: O Problema dos "Silos de Dados"',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O maior inimigo de uma boa estratégia de dados é o "silo". Esse problema acontece quando os dados de cada departamento ficam presos em seus próprios sistemas, que não conversam entre si. O time de Marketing tem os dados de campanhas, o time de Vendas tem os dados do CRM, e o time de Suporte tem os dados dos tickets, cada um em seu próprio universo.\n\nSem uma visão unificada, é impossível ter uma visão 360 graus do cliente, que é essencial para a maioria das aplicações de IA. Para uma IA prever o churn de um cliente, por exemplo, ela precisa de todos esses dados juntos para entender o comportamento completo do cliente. Portanto, quebrar os silos e centralizar os dados é o primeiro passo técnico e estratégico de qualquer projeto sério de IA.',
          quiz: [{ question: 'O que é um "silo de dados"?', options: ['Um tipo de backup seguro', 'Quando os dados de diferentes departamentos ficam isolados em sistemas que não se comunicam', 'Um relatório de dados consolidado'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l3',
          title: 'Lição 3: Data Warehouse vs. Data Lake vs. Lakehouse',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Para centralizar os dados e quebrar os silos, três arquiteturas são comumente utilizadas. A primeira é o Data Warehouse, ou Armazém de Dados. Ele é um repositório de dados estruturados e já limpos, como uma biblioteca super organizada, pronta para análise e relatórios de BI.\n\nA segunda é o Data Lake, ou Lago de Dados. Ele armazena uma vasta quantidade de dados brutos, em seu formato original, tanto estruturados quanto não estruturados. Pense nele como um grande lago onde você joga todos os tipos de dados para serem processados posteriormente.\n\nA terceira, e mais moderna, é o Data Lakehouse. Essa abordagem combina o melhor dos dois mundos. Ela permite armazenar todos os tipos de dados, como um Data Lake, mas adiciona camadas de estrutura e governança sobre eles, como um Data Warehouse. O Data Lakehouse é a base para a maioria das plataformas de IA modernas, oferecendo flexibilidade e organização.',
          quiz: [{ question: 'Qual arquitetura de dados moderna combina a flexibilidade de um Data Lake com a organização de um Data Warehouse?', options: ['Data Warehouse', 'Data Lake', 'Data Lakehouse'], correctAnswerIndex: 2 }],
      },
      {
          id: 'm8-l4',
          title: 'Lição 4: Governança de Dados na Prática',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A Governança de Dados é o conjunto de processos, regras e padrões que garantem que os dados da empresa sejam gerenciados de forma segura, consistente e em conformidade com as leis, como a LGPD no Brasil e a GDPR na Europa. Ela responde a perguntas cruciais como: quem pode acessar quais dados, o que significa cada dado e como garantimos a qualidade dos dados.\n\nÉ importante entender que ter uma boa governança não é apenas burocracia. É o que constrói a confiança nos seus dados, um pilar fundamental para qualquer iniciativa de IA. Uma governança sólida permite que a IA seja usada de forma segura e ética, evitando problemas como vazamentos de dados e, igualmente importante, prevenindo que decisões de negócio sejam tomadas com base em informações erradas ou de baixa qualidade.',
          quiz: [{ question: 'Qual o objetivo da Governança de Dados?', options: ['Tornar o acesso aos dados mais difícil', 'Garantir que os dados sejam gerenciados de forma segura, consistente e em conformidade com as leis', 'Apenas para cumprir uma formalidade'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l5',
          title: 'Lição 5: A Pirâmide da Qualidade de Dados',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A qualidade dos dados não é um conceito único e pode ser vista como uma pirâmide com vários níveis, todos igualmente importantes. No topo, temos a Precisão, que questiona se o dado reflete a realidade, como um telefone de cliente correto no CRM. Em seguida, vem a Completude, que verifica se todos os campos importantes estão preenchidos.\n\nA Consistência garante que o mesmo dado seja representado da mesma forma em diferentes sistemas, evitando discrepâncias como "São Paulo" em um lugar e "SP" em outro. A Pontualidade assegura que o dado esteja disponível no momento em que é necessário para a tomada de decisão. Por fim, a Validade verifica se o dado está no formato correto, como um campo de data que realmente contém uma data.\n\nSem garantir esses fundamentos, os resultados de qualquer análise ou modelo de IA serão, na melhor das hipóteses, questionáveis.',
          quiz: [{ question: 'Se um cliente se chama "João Silva" no CRM e "J. Silva" no sistema de faturamento, qual dimensão da qualidade de dados está sendo violada?', options: ['Precisão', 'Consistência', 'Completude'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l6',
          title: 'Lição 6: Estratégias de Coleta de Dados',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A IA precisa de dados, mas como obtê-los de forma estratégica? Existem três tipos principais de fontes de dados. Os mais valiosos são os Dados Primários, ou First-Party Data. São os dados que sua empresa coleta diretamente de seus clientes, como os dados do seu site via Google Analytics, as informações do seu CRM ou as respostas de pesquisas de satisfação. Eles são os mais confiáveis.\n\nEm seguida, temos os Dados Secundários, ou Second-Party Data, que são, na verdade, os dados primários de outra empresa, que você adquire através de uma parceria estratégica. Por fim, existem os Dados Terciários, ou Third-Party Data. São dados agregados de várias fontes, vendidos por empresas especializadas. Eles são úteis para enriquecer seus dados primários, mas a qualidade e a privacidade podem ser uma preocupação.\n\nUma boa estratégia de IA deve sempre focar em maximizar a coleta e o uso inteligente dos dados primários.',
          quiz: [{ question: 'Os dados de comportamento do usuário coletados no seu próprio site são um exemplo de qual tipo de dado?', options: ['Dados Primários (First-Party)', 'Dados Secundários (Second-Party)', 'Dados Terciários (Third-Party)'], correctAnswerIndex: 0 }],
      },
      {
          id: 'm8-l7',
          title: 'Lição 7: O Papel do "Data Owner"',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A qualidade dos dados não pode ser responsabilidade apenas da equipe de TI. Para que a governança de dados funcione na prática, é crucial estabelecer o papel do "Data Owner", ou Dono do Dado, dentro das áreas de negócio.\n\nO Data Owner é geralmente o gerente ou diretor da área que gera os dados. Por exemplo, o Diretor de Vendas é o "dono" dos dados do CRM. Ele não é um técnico, mas é o responsável final por garantir a qualidade, o significado e o uso correto dos dados gerados por sua área.\n\nEssa descentralização da responsabilidade é fundamental para criar uma cultura de dados forte, onde todos na empresa se sentem responsáveis pela qualidade do "combustível" que alimenta a IA. A qualidade dos dados passa a ser uma preocupação de todos, não apenas de um departamento.',
          quiz: [{ question: 'Quem é o "Data Owner" em uma organização?', options: ['O principal programador da equipe de TI.', 'Um gestor da área de negócio que é o responsável final pela qualidade dos dados gerados por sua área.', 'Um consultor externo contratado para limpar os dados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l8',
          title: 'Lição 8: "Feature Store" - O Segredo para Escalar ML',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Quando uma empresa começa a ter vários modelos de Machine Learning em produção, um problema comum surge: diferentes equipes acabam recriando as mesmas "features" ou variáveis repetidamente, o que gasta tempo e gera inconsistências. A solução para isso é a Feature Store.\n\nUma Feature Store é um repositório centralizado para armazenar, gerenciar e servir features já prontas e validadas para os modelos de ML. Uma boa analogia é pensar nela como uma despensa de cozinha central e super organizada para seus chefs, que são os cientistas de dados. Em vez de cada chef ter que picar a própria cebola toda vez que vai cozinhar, ele pode simplesmente pegar a cebola já picada e de alta qualidade da despensa. Isso acelera drasticamente a preparação dos pratos, ou no nosso caso, o desenvolvimento e a implantação de novos modelos.',
          quiz: [{ question: 'Qual é o principal benefício de uma "Feature Store"?', options: ['Armazenar os modelos de ML depois de prontos.', 'Reutilizar "features" de alta qualidade, acelerando o desenvolvimento e garantindo consistência entre os modelos.', 'É um nome mais moderno para um banco de dados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l9',
          title: 'Lição 9: Democratização de Dados e Self-Service BI',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Uma estratégia de dados moderna não deve trancar os dados apenas com a equipe de TI ou de dados. O conceito de Democratização de Dados visa dar às pessoas das áreas de negócio o acesso e as ferramentas para que elas mesmas possam explorar os dados e encontrar insights, sem depender de intermediários.\n\nIsso é feito através de ferramentas de Business Intelligence (BI) e Self-Service Analytics, como o Tableau, o Microsoft Power BI e o Looker. Essas plataformas oferecem interfaces visuais de "arrastar e soltar" que permitem que um gerente de marketing, por exemplo, crie seus próprios dashboards e relatórios sem precisar escrever uma única linha de código. Essa autonomia cria uma organização muito mais ágil e genuinamente orientada a dados.',
          quiz: [{ question: 'O que significa "Democratização de Dados"?', options: ['Tornar todos os dados da empresa públicos na internet.', 'Dar às equipes de negócio as ferramentas para que possam analisar os dados por si mesmas.', 'Limitar o acesso aos dados apenas à diretoria.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l10',
          title: 'Lição 10: Workshop - Esboçando sua Estratégia de Dados',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Vamos criar um esboço de uma página para a sua estratégia de dados, respondendo a algumas perguntas-chave. Primeiro, qual é a sua Visão? Pense em como você quer que os dados sejam usados para impulsionar o negócio em três anos. Por exemplo, "Tomar todas as decisões de produto com base em dados de uso do cliente".\n\nSegundo, quais são seus Principais Ativos de Dados? Identifique os três conjuntos de dados mais críticos para o seu sucesso, como os dados do CRM e do site. Terceiro, qual é o seu Desafio Principal hoje? Talvez seja o fato de que seus dados estão em silos e você não tem uma visão única do cliente.\n\nPor fim, qual é a sua Iniciativa Prioritária? Defina o primeiro passo concreto para resolver esse desafio, como "Implementar um Data Warehouse para centralizar os dados de Vendas e Marketing". Este exercício simples ajuda a traduzir conceitos abstratos em um plano de ação concreto.',
          quiz: [{ question: 'Ao esboçar uma estratégia de dados, qual é um bom primeiro passo?', options: ['Comprar uma ferramenta de IA cara.', 'Definir uma visão clara e identificar os principais ativos de dados e desafios.', 'Contratar 10 cientistas de dados.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-l11',
        title: 'Lição 11: Arquitetura de Dados Moderna: O Conceito de Data Mesh',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Conforme as empresas crescem, até mesmo um Data Lakehouse centralizado pode se tornar um gargalo, com uma equipe central de dados sobrecarregada. O Data Mesh é um novo paradigma de arquitetura de dados que aborda esse problema, propondo uma mudança de mentalidade fundamental: a descentralização da propriedade dos dados.

O Data Mesh se baseia em quatro princípios. O primeiro é o Domínio de Dados, onde cada área de negócio, como Marketing ou Vendas, é dona dos seus próprios dados e responsável por sua qualidade. O segundo é tratar os Dados como Produto, onde cada domínio disponibiliza seus dados para o resto da empresa de forma fácil de consumir. O terceiro é ter uma Plataforma de Dados Self-Service, fornecida pela TI, que permite que os domínios gerenciem e compartilhem seus "produtos de dados". Por fim, a Governança Federada estabelece um comitê com representantes de cada domínio para definir as regras globais.

O Data Mesh é uma abordagem organizacional e técnica para escalar a análise de dados em grandes empresas, tratando os dados como um ecossistema distribuído, e não como um monolito central.`,
        quiz: [
          { 
            question: 'Qual é a principal mudança de mentalidade proposta pelo Data Mesh?', 
            options: [
                'Centralizar ainda mais a equipe de dados para ter mais controle.', 
                'Descentralizar a propriedade dos dados, tratando-os como "produtos" gerenciados pelas próprias áreas de negócio.', 
                'Eliminar a necessidade de uma plataforma de dados.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
      {
        id: 'm8-l12',
        title: 'Lição 12: Qualidade de Dados Ativa com IA',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Tradicionalmente, a gestão da qualidade de dados é um processo reativo. As empresas rodam relatórios no final do mês e só então descobrem os problemas que ocorreram. A Inteligência Artificial, no entanto, permite uma abordagem muito mais poderosa: ativa e preditiva.

A IA pode ajudar na qualidade dos dados de várias maneiras. Uma delas é a Detecção de Anomalias. Um modelo de Machine Learning pode monitorar os dados que entram nos seus sistemas em tempo real. Se um novo cadastro chega com um CEP que não corresponde à cidade, ou um pedido tem um valor cem vezes maior que a média, o modelo pode sinalizar isso para verificação imediata, antes que o dado "sujo" contamine todo o sistema.

Além disso, a IA pode sugerir correções com base em como erros semelhantes foram corrigidos no passado, e até mesmo preencher de forma inteligente os dados faltantes. Usar a IA para gerenciar a própria qualidade dos dados cria um ciclo virtuoso, onde dados melhores treinam IAs melhores, que por sua vez ajudam a manter a qualidade dos dados.`,
        quiz: [
          { 
            question: 'Como a IA pode ser usada para uma "qualidade de dados ativa"?', 
            options: [
                'Apenas criando relatórios mensais sobre a qualidade dos dados.', 
                'Ignorando a qualidade dos dados, já que a IA é inteligente o suficiente para lidar com dados ruins.', 
                'Monitorando os dados em tempo real para detectar anomalias e potenciais erros antes que eles se espalhem.'
            ], 
            correctAnswerIndex: 2 
          }
        ],
      },
    ],
};