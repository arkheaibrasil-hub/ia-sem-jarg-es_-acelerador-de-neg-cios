import { Module } from '../../types';
import { Blocks } from '../../components/icons';

export const M14: Module = {
    id: 'm14',
    title: 'Módulo 14: A Revolução Low-Code com IA',
    subtitle: 'Capacitando sua equipe a criar ferramentas e automações de forma ágil.',
    icon: Blocks,
    lessons: [
        {
            id: 'm14-l1',
            title: 'Lição 1: O que é Low-Code/No-Code (LCNC)?',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `As plataformas Low-Code/No-Code, ou LCNC, são ambientes de desenvolvimento que usam uma interface visual com componentes de "arrastar e soltar" para criar aplicativos e automações, em vez de depender da escrita de código tradicional.

A abordagem No-Code é focada em usuários de negócio, os chamados "citizen developers". Ela permite criar aplicativos simples e fluxos de trabalho sem escrever nenhuma linha de código. Já a abordagem Low-Code é mais voltada para desenvolvedores profissionais. Ela acelera o desenvolvimento ao automatizar a criação da estrutura básica do aplicativo, mas permite que os desenvolvedores adicionem código customizado para funcionalidades mais complexas.

Uma boa analogia é a criação de sites: o No-Code é como usar o Squarespace, o Low-Code é como usar o Webflow, e o desenvolvimento tradicional é como escrever todo o HTML, CSS e JavaScript do zero.`,
            quiz: [
                { question: 'Qual é o principal objetivo das plataformas LCNC?', options: ['Ensinar as pessoas a programar do zero.', 'Permitir a criação de aplicativos e automações através de uma interface visual, com pouca ou nenhuma programação.', 'Substituir completamente a necessidade de planilhas.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm14-l2',
            title: 'Lição 2: Como a IA Potencializa o LCNC',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A Inteligência Artificial está transformando as plataformas LCNC de simples ferramentas de construção em verdadeiros parceiros de desenvolvimento. A integração acontece em três níveis.

O primeiro nível é a IA como Componente. As plataformas estão adicionando componentes de IA pré-construídos que você pode simplesmente "arrastar e soltar" no seu aplicativo, como um componente de "Analisar Sentimento de Texto" ou "Extrair Dados de Fatura".

O segundo nível é a IA na Experiência de Desenvolvimento. Aqui, a IA ajuda o próprio criador do aplicativo. Por exemplo, você pode descrever o formulário que deseja em linguagem natural, e a IA o constrói para você.

O terceiro nível é a IA para Conectar Dados, onde a tecnologia ajuda a mapear e conectar dados de diferentes fontes de forma mais inteligente. Essa fusão permite que usuários de negócio criem aplicativos não apenas funcionais, mas também inteligentes.`,
            quiz: [
                { question: 'O que significa "IA como Componente" em uma plataforma LCNC?', options: ['A plataforma inteira é uma única IA.', 'A capacidade de arrastar e soltar funcionalidades de IA pré-construídas, como análise de sentimento, em seu aplicativo.', 'Que a IA escreve todo o código para você.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm14-l3',
            title: 'Lição 3: Ferramentas Populares de LCNC',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `O ecossistema LCNC é vasto e cresce a cada dia, com ferramentas para diferentes finalidades. Na categoria de Automação de Fluxos de Trabalho, ou iPaaS, temos ferramentas como Zapier, Make.com e n8n, que são excelentes para conectar diferentes aplicativos em nuvem.

Para a Criação de Ferramentas Internas, como dashboards e painéis de administração, plataformas como Retool, Appsmith e Budibase se destacam. Elas são ótimas para dar uma interface amigável aos seus bancos de dados.

Na categoria de Criação de Aplicativos Web e Mobile, ferramentas como Bubble, Glide e Adalo permitem criar aplicativos mais complexos, com lógica de negócio e banco de dados próprio. E na categoria de Bancos de Dados Inteligentes, temos o Airtable e o Notion, que combinam a simplicidade de uma planilha com a robustez de um banco de dados, incluindo automações e integrações.`,
            quiz: [
                { 
                    question: 'Para qual finalidade ferramentas como Retool e Appsmith são mais adequadas?', 
                    options: [
                        'Conectar diferentes aplicativos em nuvem (Automação de Fluxos de Trabalho).',
                        'Criação de Ferramentas Internas (dashboards, painéis de administração).',
                        'Criação de Aplicativos Web e Mobile complexos.'
                    ],
                    correctAnswerIndex: 1 
                }
            ],
        },
        {
            id: 'm14-l4',
            title: 'Lição 4: Estudo de Caso: App de Onboarding de RH',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Vamos a um exemplo prático de como uma ferramenta interna pode ser criada com No-Code. O processo de onboarding de um novo funcionário geralmente envolve um checklist de tarefas espalhadas em diferentes lugares. Com uma ferramenta como o Glide ou o Airtable, a equipe de RH pode criar um aplicativo simples em poucas horas.

Esse aplicativo pode ter um formulário para o novo funcionário preencher seus dados, que automaticamente cria seu perfil. Em seguida, o app pode apresentar um checklist de tarefas para o funcionário, como "Assistir ao vídeo de boas-vindas" e "Configurar o e-mail", e para o gestor, como "Agendar reunião de alinhamento". O app pode até enviar notificações automáticas para lembrar a todos de suas tarefas pendentes.

O resultado é um processo centralizado, transparente e muito mais profissional, criado sem a necessidade de envolver a equipe de TI.`,
            quiz: [
                { question: 'Qual o principal benefício de criar um app de onboarding de RH com LCNC?', options: ['É a única maneira de contratar funcionários.', 'Centraliza e automatiza o processo, melhorando a experiência e liberando a equipe de RH.', 'O app pode substituir o gestor do novo funcionário.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm14-l5',
            title: 'Lição 5: Estudo de Caso: Portal de Clientes Simples',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Muitas empresas B2B precisam de um portal simples para que seus clientes possam acompanhar o status de seus projetos ou pedidos. Construir isso do zero pode ser um projeto caro. Com ferramentas LCNC como o Softr ou o Glide, é possível criar um portal em um fim de semana.

A base de dados pode ser uma simples planilha do Google Sheets ou um Airtable, onde você lista os clientes e seus projetos. A ferramenta LCNC se conecta a essa base de dados e cria uma interface web segura. Cada cliente pode fazer login com seu e-mail e ver apenas os seus próprios projetos.

Neste portal, o cliente pode ver o status, os prazos e os arquivos de cada projeto. A equipe interna, por sua vez, atualiza a planilha, e o portal reflete as mudanças em tempo real. Isso melhora drasticamente a comunicação com o cliente e reduz o número de e-mails e chamadas para saber sobre o andamento dos projetos.`,
            quiz: [
                { question: 'No estudo de caso do portal de clientes, onde os dados dos projetos são armazenados?', options: ['Em um sistema de programação complexo.', 'Em uma simples planilha ou base de dados como Airtable, que é conectada à ferramenta LCNC.', 'Os dados ficam apenas no portal e não são armazenados.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm14-l6',
            title: 'Lição 6: Conectando a APIs sem Código',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Uma API (Application Programming Interface) é como um "garçom" que permite que diferentes sistemas de software conversem entre si. As plataformas LCNC modernas tornam o consumo de APIs muito mais fácil, mesmo para quem não é desenvolvedor.

Vamos a um exemplo. Imagine que você está construindo um aplicativo interno de vendas e quer exibir os dados do seu CRM, como o HubSpot, que possui uma API. Em uma plataforma Low-Code como o Retool, você pode configurar essa conexão de forma visual. Você informa o endereço da API, fornece suas credenciais de autenticação e a plataforma o guia para buscar os dados que precisa.

Com a conexão estabelecida, você pode "arrastar" uma tabela para a tela do seu aplicativo e vinculá-la aos dados da API do HubSpot. Isso permite criar ferramentas internas que consolidam informações de múltiplas fontes, sem a necessidade de escrever código complexo para a integração.`,
            quiz: [
                { question: 'O que uma API permite que você faça em uma plataforma LCNC?', options: ['Mudar a cor dos botões.', 'Conectar seu aplicativo a outros sistemas de software para buscar ou enviar dados.', 'Apenas criar formulários.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm14-l7',
            title: 'Lição 7: O "Citizen Developer": O Novo Perfil Profissional',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A ascensão das plataformas LCNC deu origem a um novo perfil profissional: o "Citizen Developer". Este não é um programador profissional, mas sim um usuário de negócio — como um analista de marketing ou um gerente de operações — que entende profundamente os problemas de sua área e usa as ferramentas LCNC para construir as soluções.

O Citizen Developer é a ponte entre o negócio e a tecnologia. Ele não substitui a equipe de TI, que continua focada em sistemas críticos e na infraestrutura, mas a complementa. Ele pode resolver problemas departamentais e criar automações de forma muito mais rápida do que o processo tradicional de solicitar um projeto para a equipe de TI.

Capacitar e incentivar o surgimento de Citizen Developers é uma estratégia poderosa para aumentar a agilidade e a capacidade de inovação de uma empresa, permitindo que as soluções sejam criadas por quem mais entende da dor.`,
            quiz: [
                { question: 'Quem é o "Citizen Developer"?', options: ['Um programador profissional sênior.', 'Um usuário de negócio que usa ferramentas LCNC para criar suas próprias soluções e automações.', 'Um consultor de TI externo.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm14-l8',
            title: 'Lição 8: Governança na Era do Low-Code',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Embora capacitar Citizen Developers seja poderoso, também traz um risco: o "Shadow IT", ou TI Fantasma, onde múltiplos aplicativos são criados sem supervisão, padrões ou segurança. A solução para isso é criar uma boa governança para o LCNC.

Uma boa governança se baseia em alguns pilares. O primeiro é a Escolha da Plataforma, onde a equipe de TI centraliza e aprova um conjunto de ferramentas LCNC seguras e que se integram bem com os sistemas da empresa. O segundo é o Treinamento, capacitando os Citizen Developers nas melhores práticas. O terceiro é a Definição de Limites, deixando claro que tipo de aplicativo pode ser criado (ferramentas departamentais) e que tipo deve ser deixado para a TI (sistemas críticos com dados sensíveis).

Por fim, um Centro de Excelência (CoE) em LCNC, uma parceria entre TI e negócio, pode ajudar a guiar, apoiar e garantir a qualidade das soluções criadas.`,
            quiz: [
                { question: 'Qual é o principal objetivo da governança de LCNC?', options: ['Proibir o uso de ferramentas LCNC.', 'Garantir que os aplicativos sejam criados de forma segura, padronizada e alinhada com a estratégia, evitando o caos.', 'Tornar a criação de aplicativos mais lenta.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm14-l9',
            title: 'Lição 9: Limitações do LCNC: Quando NÃO Usar',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `As plataformas LCNC são incrivelmente poderosas, mas não são a solução para todos os problemas. É crucial entender suas limitações para saber quando o desenvolvimento tradicional ainda é a melhor escolha.

O LCNC geralmente não é adequado para aplicações com Requisitos de Escalabilidade Extrema, como uma rede social com milhões de usuários. Também não é a melhor opção para sistemas com Lógica de Negócio Muito Complexa e Única, que não se encaixa nos componentes pré-construídos da plataforma. Outra limitação são as Integrações com Sistemas Legados muito antigos, que podem não ter APIs modernas. Por fim, para aplicações que precisam de um controle total sobre a performance e a experiência do usuário, o código tradicional ainda oferece mais flexibilidade.

As plataformas LCNC são perfeitas para 80% das necessidades de aplicativos internos e de negócio, mas para os 20% de casos mais complexos e de missão crítica, o desenvolvimento customizado continua sendo essencial.`,
            quiz: [
                { question: 'Qual dos seguintes cenários é MENOS adequado para uma solução LCNC?', options: ['Um formulário de cadastro de clientes.', 'Um aplicativo para gerenciar as tarefas de uma equipe.', 'Um sistema de negociação de ações de alta frequência que precisa de performance extrema.'], correctAnswerIndex: 2 }
            ],
        },
        {
            id: 'm14-l10',
            title: 'Lição 10: O Futuro: Construindo Apps com Linguagem Natural',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `A fusão da IA Generativa com as plataformas LCNC está nos levando a um futuro onde a criação de software será uma conversa. A próxima geração de ferramentas LCNC está se movendo para uma experiência de desenvolvimento baseada em linguagem natural.

Em vez de arrastar e soltar componentes, você poderá simplesmente descrever o aplicativo que deseja. Por exemplo: "Crie um aplicativo para gerenciar o feedback dos clientes. Ele precisa de um formulário com campos para nome, e-mail e feedback, e uma tabela que exiba todos os envios, com um filtro por status."

A IA, então, gerará a primeira versão funcional do aplicativo. O papel do criador mudará de "construtor" para "diretor". Ele continuará a refinar e a ajustar o aplicativo, mas o trabalho pesado inicial será feito pela IA. Isso irá democratizar ainda mais a criação de software, permitindo que qualquer pessoa com uma boa ideia possa dar vida a ela.`,
            quiz: [
                { question: 'Qual é a principal mudança na experiência de desenvolvimento LCNC com a IA Generativa?', options: ['A necessidade de aprender mais linguagens de programação.', 'A mudança de uma interface de "arrastar e soltar" para uma interface conversacional, onde se descreve o aplicativo em linguagem natural.', 'As ferramentas se tornarão mais difíceis de usar.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm14-l11',
            title: 'Lição 11: A "Composability": Montando Soluções como Lego',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Um conceito poderoso no mundo LCNC e da automação é a "Composability", ou a capacidade de montar soluções de negócio complexas combinando diferentes ferramentas e componentes pré-construídos, como se fossem peças de Lego.

Em vez de construir um sistema monolítico que tenta fazer tudo, a abordagem "composable" foca em usar a melhor ferramenta para cada parte do trabalho e conectá-las de forma inteligente.

Por exemplo, você pode usar o Airtable como seu banco de dados, o Softr para construir a interface do portal do cliente, o Zapier para automatizar o envio de notificações, e o Stripe para processar pagamentos. Cada uma dessas ferramentas é excelente em sua função, e juntas elas formam uma solução de negócio robusta. A IA atua como um catalisador nesse ecossistema, facilitando a conexão e a orquestração entre esses diferentes "blocos de Lego".`,
            quiz: [
                { question: 'O que significa a abordagem "composable" para a criação de soluções de negócio?', options: ['Construir um único software que faz tudo.', 'Combinar diferentes ferramentas especializadas, como peças de Lego, para montar uma solução completa.', 'Usar apenas ferramentas de uma única empresa.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm14-l12',
            title: 'Lição 12: Workshop: Desenhando sua Primeira Ferramenta Interna',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Vamos aplicar o que aprendemos para desenhar sua primeira ferramenta interna. O processo é simples e focado no problema.

Primeiro, identifique um Processo "Quebrado". Pense em um processo no seu departamento que dependa de planilhas complexas, e-mails para frente e para trás e que seja uma fonte de frustração. Um exemplo pode ser a "aprovação de pedidos de compra".

Em seguida, defina a Função Principal da Ferramenta. O que ela precisa fazer? No nosso exemplo, seria "Permitir que os funcionários enviem um pedido de compra, que os gestores possam aprovar ou negar com um clique, e que todos possam ver o status do pedido em tempo real".

Depois, desenhe o Fluxo de Dados. Onde os dados vão viver? Pode ser em um Airtable ou Google Sheets. Quais são os campos necessários? (Ex: Solicitante, Item, Valor, Status).

Por fim, escolha a Ferramenta LCNC. Com base no que vimos, uma ferramenta como o Glide seria perfeita para criar um aplicativo simples a partir de uma planilha. Este exercício transforma um problema de negócio em um esboço claro para uma solução LCNC.`,
            quiz: [
                { question: 'Qual é o primeiro passo para desenhar uma ferramenta interna com LCNC?', options: ['Escolher a ferramenta LCNC mais cara.', 'Identificar um processo de negócio que está "quebrado" ou é ineficiente.', 'Contratar um programador.'], correctAnswerIndex: 1 }
            ],
        },
    ],
};
