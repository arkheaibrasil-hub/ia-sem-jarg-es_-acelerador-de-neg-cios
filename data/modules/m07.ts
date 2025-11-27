import { Module } from '../../types';
import { Bot } from '../../components/icons';

export const M7: Module = {
    id: 'm7',
    title: 'Módulo 7: Automação Inteligente de Processos',
    subtitle: 'Otimização de tarefas repetitivas para liberar tempo estratégico.',
    icon: Bot,
    lessons: [
      {
          id: 'm7-l1',
          title: 'Lição 1: O que é RPA (Automação Robótica de Processos)?',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O RPA, ou Automação Robótica de Processos, é uma tecnologia que permite criar "robôs de software" que imitam as ações humanas repetitivas em um computador. Pense nele como uma macro de planilha, mas com superpoderes. Um robô de RPA pode realizar uma série de tarefas, como abrir e-mails e seus anexos, fazer login em diferentes sistemas, copiar e colar dados entre planilhas e aplicativos, e preencher formulários web.\n\nO ponto chave é que o RPA é excelente para automatizar tarefas que são altamente repetitivas e baseadas em regras claras. Ele não possui inteligência própria, mas executa um script de forma precisa e incansável, liberando os humanos de trabalhos monótonos e propensos a erros.',
          quiz: [{ question: 'RPA é mais adequado para qual tipo de tarefa?', options: ['Tomada de decisão estratégica', 'Tarefas repetitivas e baseadas em regras claras', 'Conversas criativas com clientes'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l2',
          title: 'Lição 2: RPA + IA = Automação Inteligente',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O RPA, por si só, é "burro". Ele apenas segue as regras que foram programadas. A verdadeira transformação acontece com a Automação Inteligente, também chamada de Hiperautomação, que combina a força de execução do RPA com o "cérebro" da Inteligência Artificial.\n\nVamos a um exemplo prático: o processamento de faturas. Neste cenário, um robô RPA pode ser programado para monitorar a caixa de e-mails e baixar os anexos das faturas. Em seguida, a IA, usando tecnologias como o OCR, entra em ação para "ler" a fatura, que é um documento não estruturado, e extrair os dados importantes, como o nome do fornecedor, o valor e a data de vencimento. Finalmente, o robô RPA pega esses dados já estruturados e os insere no sistema de finanças da empresa.\n\nJuntos, RPA e IA conseguem automatizar um processo de ponta a ponta que nenhum dos dois conseguiria realizar sozinho.',
          quiz: [{ question: 'Na Automação Inteligente, qual o papel da IA?', options: ['Apenas executar o "clique" do mouse', 'Adicionar a capacidade de lidar com dados não estruturados e tomar pequenas decisões', 'Garantir a segurança do processo'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l3',
          title: 'Lição 3: Estudo de Caso - Onboarding de Funcionários',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O processo de contratar um novo funcionário, ou onboarding, envolve muitas tarefas repetitivas em diferentes sistemas, tornando-o um candidato perfeito para a automação inteligente.\n\nImagine um processo automatizado. Quando um candidato é marcado como "contratado" no sistema de RH, um robô RPA é acionado automaticamente. Esse robô então cria o usuário do novo funcionário no sistema da empresa, no serviço de e-mail e em outras ferramentas necessárias. Em paralelo, uma IA Generativa pode criar um e-mail de boas-vindas personalizado para o novo colaborador. Por fim, o RPA envia esse e-mail e agenda as reuniões de integração iniciais no calendário do gestor.\n\nO resultado é um processo rápido, consistente e sem erros, que permite que a equipe de RH foque na parte mais importante: a integração humana e cultural do novo membro da equipe.',
          quiz: [{ question: 'Qual o principal benefício de automatizar o onboarding de funcionários?', options: ['Tornar o processo mais lento e pessoal', 'Reduzir o trabalho manual, garantir consistência e liberar o RH para focar em tarefas estratégicas', 'Aumentar a quantidade de formulários para preencher'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l4',
          title: 'Lição 4: Identificando Oportunidades de Automação',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Como encontrar os melhores processos para automatizar na sua empresa? O segredo é procurar por tarefas com características específicas. Um acrônimo útil para lembrar é R.U.I.M.\n\nPrimeiro, a tarefa deve ser Repetitiva, ou seja, executada da mesma forma várias vezes. Segundo, ela deve ser Usual ou baseada em regras, com critérios claros que definem como ela é feita. Terceiro, os Inputs devem ser digitais, ou seja, a tarefa deve começar com dados já em formato digital, como e-mails ou planilhas. Por fim, a tarefa deve ser Manual e cansativa, daquelas que ninguém na equipe gosta de fazer.\n\nProcessos como a geração de relatórios, a reconciliação de dados entre sistemas e o processamento de pedidos são candidatos perfeitos que geralmente se encaixam nesses critérios. O primeiro passo é sempre mapear os passos exatos do processo manual antes de pensar em como automatizá-lo.',
          quiz: [{ question: 'Qual característica torna um processo um bom candidato para automação com RPA?', options: ['Ser um processo altamente criativo e estratégico.', 'Ser um processo manual, repetitivo e baseado em regras claras.', 'Ser um processo que muda constantemente.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l5',
          title: 'Lição 5: Ferramentas de RPA no Mercado',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O mercado de RPA é dominado por algumas plataformas principais, que oferecem interfaces visuais de "arrastar e soltar" para construir os robôs, tornando a automação mais acessível.\n\nEntre as líderes de mercado estão a UiPath, conhecida por sua plataforma completa e uma comunidade de desenvolvedores muito forte, e a Automation Anywhere, que tem um forte foco em automação na nuvem e integração com IA.\n\nOutra opção poderosa é o Microsoft Power Automate, que está integrado de forma nativa ao ecossistema da Microsoft, como o Windows e o Office 365. Ele é uma escolha excelente para empresas que já utilizam essas ferramentas, pois permite criar automações tanto no desktop, com RPA, quanto na nuvem, com fluxos de trabalho digitais. A escolha da ferramenta ideal dependerá do seu ecossistema tecnológico atual, do seu orçamento e da complexidade das automações que você planeja construir.',
          quiz: [{ question: 'Qual ferramenta de RPA é nativamente integrada ao ecossistema do Windows e Office 365?', options: ['UiPath', 'Automation Anywhere', 'Microsoft Power Automate'], correctAnswerIndex: 2 }],
      },
      {
          id: 'm7-l6',
          title: 'Lição 6: Process Mining - O Raio-X dos seus Processos',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'Muitas vezes, os líderes de uma empresa *acham* que sabem como um processo funciona, mas a realidade do dia a dia é bem diferente. O Process Mining é uma tecnologia que funciona como um raio-X para os seus processos de negócio, revelando a verdade sobre como eles realmente operam.\n\nEle funciona analisando os logs digitais dos seus sistemas, como o CRM e o ERP, para criar um mapa visual de como um processo realmente acontece na prática. Esse mapa mostra todos os desvios, os gargalos e as ineficiências que não são visíveis no desenho teórico do processo.\n\nUma boa analogia é a diferença entre olhar o mapa de uma cidade e ver o trânsito em tempo real no Waze. O Process Mining te mostra exatamente onde estão os "engarrafamentos" no seu fluxo de trabalho, indicando com precisão onde a automação trará o maior impacto.',
          quiz: [{ question: 'Qual o principal objetivo do Process Mining?', options: ['Criar novos processos do zero.', 'Analisar os dados dos sistemas para descobrir como os processos realmente funcionam, identificando gargalos.', 'Automatizar tarefas de digitação.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l7',
          title: 'Lição 7: Estudo de Caso - Automação no Financeiro',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'O departamento financeiro é um dos que mais se beneficia da automação, devido à natureza altamente repetitiva e baseada em regras de muitas de suas tarefas. Vamos analisar o processo de reconciliação bancária.\n\nNo processo manual, um analista passava dias no final do mês comparando os extratos bancários com os registros do sistema contábil, linha por linha, uma tarefa tediosa e propensa a erros. Com a automação, o processo é transformado. Primeiro, um robô de RPA baixa automaticamente os extratos do portal do banco e os registros do sistema ERP. Em seguida, o robô compara as duas planilhas, dando "match" nas transações que batem. Para as exceções, ou seja, as transações que não batem, o robô gera um relatório e o envia por e-mail para o analista.\n\nO resultado é impressionante: o processo que levava dois dias agora é concluído em 15 minutos, e o analista pode focar seu tempo investigando apenas as exceções, uma tarefa de maior valor.',
          quiz: [{ question: 'Na automação da reconciliação bancária, qual tarefa o robô de RPA executa?', options: ['Decidir a estratégia de investimentos da empresa.', 'Baixar relatórios, comparar dados e enviar um relatório de exceções para o analista.', 'Ligar para o gerente do banco para tirar dúvidas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l8',
          title: 'Lição 8: Estudo de Caso - Automação no Marketing',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A equipe de marketing lida com um grande volume de dados de diferentes fontes, o que torna a geração de relatórios uma tarefa demorada e um prato cheio para a automação.\n\nNo processo manual, um analista de marketing gastava cerca de quatro horas toda segunda-feira coletando dados do Google Analytics, Facebook Ads, Google Ads e do CRM. Ele precisava juntar tudo em uma única planilha para apresentar os KPIs da semana. Com a automação, um robô de RPA é programado para rodar todo domingo à noite. Ele faz login em cada uma das plataformas, exporta os relatórios necessários, consolida todos os dados em uma única planilha padrão e envia o relatório pronto para a equipe às 9h da manhã de segunda-feira.\n\nO resultado é que a equipe começa a semana já com os insights em mãos, em vez de esperar pelos dados, permitindo uma tomada de decisão muito mais ágil e informada.',
          quiz: [{ question: 'Qual é o principal benefício de automatizar a geração de relatórios de marketing?', options: ['Tornar os relatórios menos precisos.', 'Liberar o tempo do analista e fornecer insights para a equipe de forma mais rápida e consistente.', 'Aumentar o custo de todas as campanhas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l9',
          title: 'Lição 9: Gerenciando sua "Força de Trabalho Digital"',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'É importante entender que robôs de software são como funcionários digitais: eles precisam ser gerenciados, monitorados e mantidos para garantir que continuem funcionando corretamente. Conforme a empresa aumenta seu nível de automação, torna-se essencial criar um Centro de Excelência (CoE) em Automação.\n\nEste é um time central responsável por várias funções críticas. A primeira é a Governança, que define as melhores práticas para construir e implantar os robôs. A segunda é a Manutenção; se um site ou sistema que o robô usa mudar de layout, o robô pode "quebrar", e o CoE é responsável por consertá-lo. A terceira é a Segurança, garantindo que os robôs tenham apenas as permissões necessárias. Por fim, o CoE deve Medir o ROI, acompanhando o valor que a força de trabalho digital está gerando para a empresa, seja em horas economizadas ou em erros reduzidos.',
          quiz: [{ question: 'Por que é importante ter um Centro de Excelência (CoE) em Automação?', options: ['Apenas para criar mais burocracia na empresa.', 'Para garantir a governança, manutenção, segurança e o valor dos robôs de software.', 'Porque as ferramentas de RPA exigem isso para funcionar.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l10',
          title: 'Lição 10: O Futuro da Automação - A Empresa Autônoma',
          videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
          content: 'A combinação de RPA, IA e Process Mining está nos levando em direção à Hiperautomação e, eventualmente, à visão da Empresa Autônoma. A ideia central é que processos de negócio inteiros possam se gerenciar e se otimizar sozinhos, com mínima intervenção humana.\n\nVamos imaginar um exemplo na cadeia de suprimentos. Uma IA Preditiva prevê um aumento na demanda por um produto. Isso aciona um Agente de IA, que automaticamente faz um pedido de matéria-prima ao fornecedor. Quando a fatura chega, um robô RPA a processa. Enquanto isso, o Process Mining monitora todo o fluxo, identifica um gargalo e sugere uma otimização, que a própria IA pode implementar no futuro.\n\nNesse cenário, o papel dos humanos muda drasticamente. Eles não executam mais o processo; eles o supervisionam, definem a estratégia e lidam com as exceções complexas que a automação ainda não consegue resolver.',
          quiz: [{ question: 'O que é o conceito de "Hiperautomação"?', options: ['Usar apenas um robô muito poderoso para todas as tarefas.', 'A aplicação coordenada de múltiplas tecnologias (RPA, IA, Process Mining) para automatizar o máximo de processos possível.', 'Um tipo de marketing viral.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-l11',
        title: 'Lição 11: Orquestração de Processos: Gerenciando a Força de Trabalho Híbrida',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `Quando você tem múltiplos robôs e humanos trabalhando juntos em um mesmo processo, você precisa de um "maestro" para garantir que tudo funcione em harmonia. A Orquestração de Processos é a tecnologia que gerencia e coordena o trabalho entre essa força de trabalho híbrida.

Um orquestrador desempenha várias funções cruciais. Ele gerencia uma Fila de Trabalho central, distribuindo as tarefas para o próximo robô ou humano disponível, de acordo com a carga de trabalho e a habilidade. Ele também cuida da Priorização, decidindo quais tarefas são mais urgentes com base em regras de negócio. Além disso, ele é fundamental para o Tratamento de Exceções; se um robô falha em uma tarefa, o orquestrador pode automaticamente passá-la para um humano resolver. Por fim, ele oferece ferramentas de Monitoramento e Análise, com dashboards que mostram a produtividade e os gargalos.

Plataformas como o UiPath Orchestrator são essenciais para gerenciar a automação em escala, garantindo que o trabalho flua de maneira eficiente entre os colaboradores digitais e humanos.`,
        quiz: [
          { 
            question: 'Em uma força de trabalho híbrida, qual é o papel de um "Orquestrador de Processos"?', 
            options: [
                'Apenas construir novos robôs de software.', 
                'Gerenciar e coordenar a distribuição de tarefas entre robôs e humanos.', 
                'Treinar os funcionários humanos para serem mais rápidos.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
      {
        id: 'm7-l12',
        title: 'Lição 12: IDP (Intelligent Document Processing): A Próxima Geração',
        videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
        content: `O Processamento Inteligente de Documentos (IDP) é a evolução natural do OCR. Enquanto o OCR tradicional apenas extrai o texto bruto de uma imagem, o IDP vai muito além: ele entende e estrutura a informação contida no documento. Pense nele como uma combinação de OCR, Visão Computacional, PLN e Machine Learning.

O processo do IDP funciona em etapas. Primeiro, o Pré-processamento melhora a qualidade da imagem do documento. Em seguida, a Classificação identifica que tipo de documento é, como uma fatura ou um contrato. A etapa de Extração é onde a IA não apenas "lê" o texto, mas entende o que cada parte significa. Depois, a Validação cruza as informações com um banco de dados para verificar sua precisão. Por fim, a Integração envia os dados já estruturados e validados para o sistema de destino, como um ERP ou CRM.

O IDP permite a automação completa de fluxos de trabalho que dependem de documentos complexos e variados, como o processamento de sinistros em seguradoras ou a análise de contratos.`,
        quiz: [
          { 
            question: 'Qual a principal vantagem do IDP (Intelligent Document Processing) sobre o OCR tradicional?', 
            options: [
                'O IDP é mais rápido para converter uma imagem em texto simples.', 
                'O IDP não apenas extrai o texto, mas também entende, classifica e estrutura a informação contida no documento.', 
                'O IDP só funciona com documentos digitais, não com scans.'
            ], 
            correctAnswerIndex: 1 
          }
        ],
      },
    ],
};