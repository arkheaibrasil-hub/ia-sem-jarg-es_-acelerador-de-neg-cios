import { Module } from '../../types';
import { Repeat } from '../../components/icons';

export const M13: Module = {
    id: 'm13',
    title: 'Módulo 13: Automação Total: Rumo à Hiperautomação',
    subtitle: 'Combinando RPA, IA e Orquestração para transformar processos.',
    icon: Repeat,
    lessons: [
        {
            id: 'm13-l1',
            title: 'Lição 1: Da Automação à Hiperautomação',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A Hiperautomação não é apenas uma palavra da moda, mas uma abordagem de negócio estratégica que busca automatizar o máximo de processos possível, de ponta a ponta. Ela vai além do RPA tradicional, combinando um conjunto de tecnologias para criar um sistema de automação muito mais poderoso.

Essa abordagem integra o RPA, que funciona como os "braços e pernas" que executam as tarefas, com a Inteligência Artificial, que atua como o "cérebro" que lida com dados não estruturados e toma decisões. Além disso, utiliza o Process Mining como um "raio-x" para descobrir e monitorar os processos, e a Orquestração como o "maestro" que gerencia o trabalho entre robôs e humanos.

O objetivo da Hiperautomação não é apenas economizar custos, mas criar operações de negócio mais ágeis, resilientes e inteligentes, capazes de se adaptar rapidamente às mudanças do mercado.`,
            quiz: [
                { question: 'O que diferencia a Hiperautomação do RPA tradicional?', options: ['Hiperautomação é apenas um nome mais novo para RPA.', 'Hiperautomação combina RPA com outras tecnologias como IA e Process Mining para automatizar processos de ponta a ponta.', 'Hiperautomação só funciona na nuvem.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l2',
            title: 'Lição 2: Orquestração de Processos: O Maestro da Automação',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Quando uma empresa começa a ter múltiplos robôs e humanos trabalhando juntos em um mesmo processo, é necessário um "maestro" para garantir que tudo funcione em harmonia. A Orquestração de Processos é a tecnologia que desempenha esse papel, gerenciando e coordenando o trabalho entre essa força de trabalho híbrida.

Um orquestrador tem várias funções cruciais. Ele gerencia uma fila de trabalho central, distribuindo as tarefas para o próximo robô ou humano disponível. Ele também cuida da priorização, decidindo quais tarefas são mais urgentes com base em regras de negócio. Além disso, é fundamental para o tratamento de exceções; se um robô falha em uma tarefa, o orquestrador pode automaticamente encaminhá-la para um humano resolver. Por fim, ele oferece ferramentas de monitoramento e análise, com dashboards que mostram a produtividade e os gargalos do processo.`,
            quiz: [
                { question: 'Em uma força de trabalho híbrida, qual é o papel de um "Orquestrador de Processos"?', options: ['Apenas construir novos robôs de software.', 'Gerenciar e coordenar a distribuição de tarefas entre robôs e humanos.', 'Treinar os funcionários humanos para serem mais rápidos.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l3',
            title: 'Lição 3: IDP (Intelligent Document Processing) em Ação',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `O Processamento Inteligente de Documentos, ou IDP, é a evolução natural do OCR. Enquanto o OCR tradicional apenas extrai o texto bruto de uma imagem, o IDP vai muito além: ele entende e estrutura a informação contida no documento. Pense nele como uma combinação poderosa de OCR, Visão Computacional, PLN e Machine Learning.

O processo do IDP funciona em etapas. Primeiro, a Classificação identifica que tipo de documento é, como uma fatura ou um contrato. Em seguida, a Extração utiliza PLN e Visão Computacional para não apenas "ler" o texto, mas também entender o que cada parte significa, como identificar o CNPJ de um fornecedor. Depois, a Validação pode cruzar as informações com um banco de dados para verificar sua precisão. Por fim, a Integração envia os dados já estruturados e validados para o sistema de destino, como um ERP ou CRM. O IDP permite a automação completa de fluxos de trabalho que dependem de documentos complexos e variados.`,
            quiz: [
                { question: 'Qual a principal vantagem do IDP (Intelligent Document Processing) sobre o OCR tradicional?', options: ['O IDP é mais rápido para converter uma imagem em texto simples.', 'O IDP não apenas extrai o texto, mas também entende, classifica e estrutura a informação contida no documento.', 'O IDP só funciona com documentos digitais, não com scans.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l4',
            title: 'Lição 4: Process Mining vs. Task Mining',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Tanto o Process Mining quanto o Task Mining são usados para descobrir oportunidades de automação, mas eles operam em níveis diferentes de análise.

O Process Mining funciona em um nível macro. Ele analisa os logs de sistemas, como o ERP e o CRM, para mapear o fluxo de trabalho de ponta a ponta entre diferentes sistemas, mostrando como os processos realmente acontecem na prática.

O Task Mining, por outro lado, funciona em um nível micro. Ele usa um software instalado no computador do usuário para entender como ele executa uma tarefa específica. Ele registra cliques, digitações e interações entre diferentes aplicativos, como copiar dados do Excel e colar no SAP.

Quando combinados, o Process Mining e o Task Mining fornecem um mapa completo das ineficiências, desde a visão geral do processo até a execução da tarefa individual, revelando os melhores candidatos para automação com uma precisão muito maior.`,
            quiz: [
                { question: 'Qual tecnologia é mais adequada para entender como um funcionário copia e cola dados entre três aplicativos diferentes para completar uma tarefa?', options: ['Process Mining', 'Task Mining', 'Ambas são idênticas'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l5',
            title: 'Lição 5: Agentes de IA na Automação de Processos',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Os Agentes de IA representam um salto significativo na automação de processos. Em vez de um robô de RPA que segue um script fixo e rígido, um agente recebe um objetivo e pode usar sua capacidade de raciocínio para decidir os passos necessários para alcançá-lo.

Vamos a um exemplo de aprovação de despesa. Um robô de RPA seguiria regras fixas, como "Se a despesa for menor que R$100 e a categoria for 'viagem', aprove; caso contrário, envie para o gerente". Um Agente de IA, por sua vez, recebe o objetivo de "analisar e aprovar esta despesa". Para isso, ele pode ler a política de despesas da empresa, verificar se o valor está dentro da média e, se houver algo incomum, decidir enviar um e-mail para o gerente pedindo mais contexto, em vez de simplesmente seguir uma regra. Os agentes movem a automação de simplesmente "fazer" para "pensar e fazer".`,
            quiz: [
                { question: 'Qual a principal vantagem de um Agente de IA sobre um robô de RPA tradicional?', options: ['O agente é mais rápido na execução de cliques.', 'O agente pode usar raciocínio para lidar com situações que não estão em um script fixo.', 'O agente não precisa de software para rodar.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l6',
            title: 'Lição 6: Estudo de Caso: Onboarding de Clientes de ponta a ponta',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Vamos analisar um caso de Hiperautomação para o onboarding de um novo cliente B2B, um processo que antes era manual e levava dois dias. O processo começa quando o cliente envia os documentos por e-mail, e um robô RPA baixa os anexos. Em seguida, uma solução de IDP lê os documentos e extrai os dados, como CNPJ e endereço. A IA então valida o CNPJ em um site do governo.

Com os dados validados, o RPA cria a conta do cliente no CRM, no sistema financeiro e na plataforma do produto. Em paralelo, uma IA Generativa cria uma série de e-mails de boas-vindas personalizados, que o RPA agenda e envia ao longo da primeira semana. Um orquestrador gerencia todo o processo e alerta um humano se ocorrer qualquer exceção.

O resultado é uma transformação completa: o tempo de onboarding é reduzido de dois dias para apenas 15 minutos, eliminando erros e melhorando a experiência do novo cliente.`,
            quiz: [
                { question: 'No estudo de caso, qual tecnologia foi usada para ler e extrair os dados dos documentos enviados pelo cliente?', options: ['RPA', 'IDP (Intelligent Document Processing)', 'Process Mining'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l7',
            title: 'Lição 7: Gerenciando Exceções com IA',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Nenhum processo automatizado é perfeito, e a automação tradicional geralmente falha quando encontra uma exceção, ou seja, uma situação não prevista no script. A Inteligência Artificial pode ajudar a gerenciar essas exceções de forma muito mais inteligente.

Quando um robô de RPA encontra um erro, em vez de simplesmente parar, ele pode enviar os detalhes do problema, como uma captura de tela e os dados da transação, para um modelo de IA. A IA, que foi treinada com exceções passadas, pode então analisar o problema. Ela pode classificar o tipo de erro, como "sistema fora do ar" ou "dados inválidos". Para erros conhecidos, a IA pode até sugerir a solução para o analista humano. Com o tempo, a IA pode aprender a resolver certos tipos de exceções sozinha, tornando a automação cada vez mais resiliente e autônoma.`,
            quiz: [
                { question: 'Como a IA pode ajudar a gerenciar exceções em processos automatizados?', options: ['Ignorando todos os erros.', 'Classificando o tipo de erro e, com o tempo, aprendendo a resolver exceções comuns de forma autônoma.', 'Desligando o robô sempre que um erro ocorre.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l8',
            title: 'Lição 8: Automação Preditiva: Agindo Antes do Problema',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A automação tradicional é, por natureza, reativa. Ela age depois que um evento acontece. A Automação Preditiva, por outro lado, combina Machine Learning com automação para ser proativa, agindo antes que um problema ocorra.

Vamos a um exemplo de manutenção de equipamentos. Na automação reativa, um sensor detecta que a máquina superaqueceu e um robô envia um alerta. Na automação preditiva, um modelo de Machine Learning analisa os dados dos sensores ao longo do tempo e prevê que a "Máquina 3 tem 95% de chance de falhar nas próximas 72 horas". Com base nessa previsão, um robô pode automaticamente abrir uma ordem de serviço, agendar um técnico e encomendar a peça necessária, tudo antes que a máquina quebre.

Esse mesmo conceito se aplica a muitos outros cenários de negócio, como prever a falta de estoque e acionar uma automação para fazer um novo pedido.`,
            quiz: [
                { question: 'Qual o objetivo da Automação Preditiva?', options: ['Reagir rapidamente a um problema que já aconteceu.', 'Usar previsões de Machine Learning para acionar automações que evitem que um problema aconteça.', 'Prever o futuro sem agir.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l9',
            title: 'Lição 9: O Papel Humano na Era da Hiperautomação',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A Hiperautomação não elimina os humanos do processo; pelo contrário, ela eleva o seu papel. Conforme as tarefas repetitivas e baseadas em regras são automatizadas, o trabalho humano se concentra em áreas que a IA ainda não domina e que exigem habilidades unicamente humanas.

Uma dessas áreas é o "Human-in-the-loop", onde os humanos supervisionam a automação, lidam com as exceções complexas e tomam as decisões críticas que os robôs escalam. Outra área é a Estratégia e Otimização, analisando os dados gerados pela automação para redesenhar e melhorar os processos de negócio. Além disso, a Criatividade e a Inovação se tornam ainda mais importantes, focando em criar novos produtos e melhorar a experiência do cliente. Por fim, a Governança, definindo as regras, a ética e a estratégia para a força de trabalho digital. O futuro do trabalho é uma colaboração estratégica entre humanos e máquinas.`,
            quiz: [
                { question: 'Na era da Hiperautomação, qual se torna uma das principais responsabilidades do profissional humano?', options: ['Executar mais tarefas de copiar e colar.', 'Supervisionar a automação, lidar com exceções complexas e focar em tarefas estratégicas.', 'Competir com os robôs para ver quem é mais rápido.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l10',
            title: 'Lição 10: Medindo o ROI da Automação Total',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `O ROI da Hiperautomação vai muito além da simples redução de custos com mão de obra. Ao construir o seu business case para um projeto de automação, é importante considerar um espectro mais amplo de valor para justificar o investimento.

As métricas de valor podem ser agrupadas em várias categorias. A primeira é a Eficiência, que inclui as horas de trabalho economizadas e a redução do tempo de ciclo de um processo. A segunda é a Qualidade, que se reflete na redução da taxa de erros e no aumento da conformidade com as regulações. A terceira é a Experiência do Cliente, medida pelo aumento da satisfação e pela redução do tempo de resposta. Outras métricas importantes são a Resiliência, que é a capacidade de escalar as operações rapidamente, e a Satisfação do Funcionário, que aumenta quando as tarefas tediosas são eliminadas. Quantificar esses benefícios cria um caso de negócio muito mais poderoso.`,
            quiz: [
                { question: 'Além da economia de custos, qual é um benefício importante da Hiperautomação a ser incluído no cálculo do ROI?', options: ['O custo de licença do software.', 'A redução da taxa de erros e o aumento da satisfação do cliente.', 'A quantidade de robôs criados.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l11',
            title: 'Lição 11: Construindo um Centro de Excelência em Automação (CoE)',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Para escalar a Hiperautomação de forma sustentável e evitar o caos, é essencial criar um Centro de Excelência (CoE) em Automação. Esta é uma equipe central que governa e apoia as iniciativas de automação em toda a empresa, garantindo que elas sejam bem-sucedidas e alinhadas com a estratégia.

Um CoE de Automação se baseia em alguns pilares. O pilar da Estratégia é responsável por identificar e priorizar as oportunidades de automação. A Governança define os padrões para o desenvolvimento e a implantação de automações, garantindo segurança e qualidade. A Tecnologia gerencia a plataforma de automação e explora novas ferramentas. A Gestão de Mudança comunica os benefícios e capacita os funcionários. Por fim, a Medição de Valor rastreia e reporta o ROI gerado. Um CoE transforma a automação de uma série de projetos táticos em uma capacidade estratégica da organização.`,
            quiz: [
                { question: 'Qual é uma das responsabilidades de um Centro de Excelência em Automação?', options: ['Apenas pagar as licenças de software.', 'Definir padrões de desenvolvimento, governança e medir o valor gerado pelas automações.', 'Executar todas as automações manualmente.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm13-l12',
            title: 'Lição 12: O Futuro: A Empresa Autônoma',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A Hiperautomação é o caminho para um conceito ainda mais avançado: a Empresa Autônoma. Esta é uma visão de futuro onde os processos de negócio centrais são não apenas automatizados, mas também auto-otimizáveis, com mínima intervenção humana.

Vamos imaginar como seria um processo de "pedido ao pagamento" em uma empresa autônoma. Agentes de IA poderiam negociar com clientes e fornecedores. Processos automatizados cuidariam da logística e do faturamento. Modelos de Machine Learning preveriam a demanda e ajustariam os preços dinamicamente. E o Process Mining monitoraria a performance, com um Agente de IA sugerindo ou até mesmo implementando melhorias no próprio processo.

Neste modelo, o papel dos humanos é elevado. Eles atuam como designers e supervisores do ecossistema de automação, focando em estratégia, inovação e no tratamento das exceções mais complexas. É a aplicação máxima da colaboração homem-máquina.`,
            quiz: [
                { question: 'O que caracteriza a visão de uma "Empresa Autônoma"?', options: ['Uma empresa sem funcionários humanos.', 'Uma empresa onde os processos de negócio centrais são automatizados e auto-otimizáveis, com supervisão humana estratégica.', 'Uma empresa que só usa robôs físicos.'], correctAnswerIndex: 1 }
            ],
        },
    ],
};