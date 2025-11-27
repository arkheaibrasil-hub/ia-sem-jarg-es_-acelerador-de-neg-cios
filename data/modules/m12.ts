import { Module } from '../../types';
import { Agent } from '../../components/icons';

export const M12: Module = {
    id: 'm12',
    title: 'Módulo 12: IA Agêntica: O Futuro é Autônomo',
    subtitle: 'Uma introdução aos Agentes de IA e sistemas autônomos.',
    icon: Agent,
    lessons: [
        {
            id: 'm12-l1',
            title: 'Lição 1: O que é um Agente de IA?',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Um Agente de IA é a evolução natural de um modelo de linguagem. Enquanto um LLM como o ChatGPT é reativo, ou seja, ele recebe um prompt e responde, um agente é proativo. Ele recebe um objetivo e pode, de forma autônoma, criar e executar um plano com múltiplos passos para alcançá-lo.

A estrutura de um agente é composta por três componentes principais. O primeiro é o Cérebro, que é um modelo de linguagem poderoso usado para raciocinar, planejar e decompor tarefas. O segundo é a Percepção, que é a capacidade de coletar informações do ambiente, como acessar a internet ou ler arquivos. O terceiro é a Ação, que é a capacidade de agir nesse ambiente, seja enviando um e-mail, executando código ou interagindo com uma API.

Uma boa analogia é que um LLM é como um estagiário que espera por instruções detalhadas, enquanto um Agente de IA é como um analista júnior a quem você pode delegar um projeto e confiar que ele tomará os passos necessários para concluí-lo.`,
            quiz: [
                { question: 'Qual a principal diferença entre um LLM e um Agente de IA?', options: ['Não há diferença.', 'Um LLM reage a um comando, enquanto um Agente pode executar múltiplos passos de forma proativa para atingir um objetivo.', 'Agentes de IA não usam LLMs.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm12-l2',
            title: 'Lição 2: A Arquitetura de um Agente (ReAct)',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Uma das arquiteturas mais comuns para a construção de agentes é a ReAct, um acrônimo para "Reason + Act" (Raciocinar + Agir). Ela instrui o LLM a operar em um ciclo contínuo de "pensar, agir, observar", que simula a forma como os humanos resolvem problemas.

O ciclo ReAct funciona em três etapas. A primeira é o Pensamento (Reason), onde o agente avalia o objetivo e seu estado atual para decidir qual é a próxima melhor ação a ser tomada. A segunda é a Ação (Act), onde o agente usa uma de suas ferramentas disponíveis, como fazer uma busca na web ou consultar um banco de dados. A terceira etapa é a Observação, onde o agente analisa o resultado de sua ação e usa essa nova informação para iniciar o próximo ciclo de pensamento.

Este loop continua, com o agente pensando, agindo e observando, até que ele determine que o objetivo inicial foi alcançado.`,
            quiz: [
                { question: 'O que significa o ciclo "ReAct"?', options: ['Apenas reagir a um evento.', 'Um ciclo contínuo de Raciocinar (pensar), Agir (usar uma ferramenta) e Observar (analisar o resultado).', 'Uma marca de software.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm12-l3',
            title: 'Lição 3: Ferramentas (Tools): Dando Superpoderes aos Agentes',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Um agente de IA é tão poderoso quanto as ferramentas que ele tem à sua disposição. As "ferramentas", no contexto de um agente, são funções ou APIs que o LLM pode decidir chamar para obter informações ou executar uma ação no mundo real.

Existem vários exemplos de ferramentas que podem ser dadas a um agente. Uma ferramenta de Busca na Web permite que ele obtenha informações atualizadas da internet. Uma Calculadora o capacita a realizar cálculos precisos, algo que os LLMs puros têm dificuldade em fazer. Um Executor de Código permite que ele rode scripts em Python ou SQL para analisar dados.

O mais poderoso é a capacidade de conectar o agente a APIs internas da sua empresa, dando a ele acesso ao seu CRM, ERP ou qualquer outro sistema. Além disso, uma API de envio de e-mail pode permitir que ele comunique resultados ou peça aprovação para um humano. O desenvolvedor do agente define quais ferramentas estão disponíveis, e o LLM aprende a usá-las de forma inteligente para resolver problemas.`,
            quiz: [
                { question: 'O que são "ferramentas" no contexto de um Agente de IA?', options: ['Programas de software que o usuário precisa instalar.', 'Funções ou APIs que o agente pode chamar para obter informações ou executar ações.', 'Aparatos físicos, como braços robóticos.'], correctAnswerIndex: 1 }
            ],
        },
        {
            id: 'm12-l4',
            title: 'Lição 4: Estudo de Caso: Agente de Pesquisa de Mercado',
            videoUrl: 'https://www.youtube.com/embed/videoseries?list=PLtpXSFEo_122c4L92-j_Uv4-zcF2xIZR6',
            content: `Vamos simular como um agente de IA executaria uma tarefa de pesquisa de mercado com o objetivo de "criar um relatório sobre as últimas tendências no mercado de café funcional no Brasil".

O ciclo de execução começaria com o agente pensando: "O objetivo é um relatório sobre tendências. Preciso de informações atuais, então a melhor ferramenta é a busca na web." A primeira ação seria executar essa busca. Como observação, ele receberia uma lista de links para artigos e relatórios de mercado.

No próximo ciclo, o pensamento seria: "Tenho várias fontes. Preciso ler os artigos mais relevantes, extrair os pontos chave e sintetizá-los." As ações seguintes seriam ler o conteúdo de cada link. Após obter a informação, o agente pensaria: "Agora tenho o que preciso. Vou estruturar em um relatório com introdução, principais tendências e conclusão. Não preciso de mais ferramentas." A ação final seria escrever o relatório e apresentá-lo como resultado.`,
            quiz: [
                {
                    question: 'No exemplo do agente de pesquisa, qual é a primeira "Ação" que o agente toma após raciocinar sobre o objetivo?',
                    options: [
                        'Escrever o relatório final.',
                        'Fazer uma busca na web para coletar informações.',
                        'Ligar para um especialista.'
                    ],
                    correctAnswerIndex: 1
                }
            ],
        },
    ],
};