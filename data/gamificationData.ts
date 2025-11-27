import { Badge } from '../types';
import { BrainCircuit, BookOpen, MessageSquare, BrainCog, Eye, Sparkles, Bot, Database, Wrench, FileText, Award, Trophy, Agent, Repeat, Blocks, BrainLightbulb } from '../components/icons';

export const ALL_BADGES: Badge[] = [
    {
        id: 'badge-m1',
        name: 'Sócio Estratégico',
        description: 'Concluiu o módulo sobre como usar a IA como um parceiro estratégico.',
        icon: BrainCircuit,
        type: 'module',
        moduleId: 'm1'
    },
    {
        id: 'badge-m2',
        name: 'Mestre Preditivo',
        description: 'Concluiu o módulo sobre Machine Learning e análise preditiva.',
        icon: BookOpen,
        type: 'module',
        moduleId: 'm2'
    },
    {
        id: 'badge-m3',
        name: 'Especialista em PLN',
        description: 'Concluiu o módulo sobre Processamento de Linguagem Natural.',
        icon: MessageSquare,
        type: 'module',
        moduleId: 'm3'
    },
    {
        id: 'badge-m4',
        name: 'Arquiteto de Padrões',
        description: 'Concluiu o módulo sobre Redes Neurais e Deep Learning.',
        icon: BrainCog,
        type: 'module',
        moduleId: 'm4'
    },
    {
        id: 'badge-m5',
        name: 'Visionário Computacional',
        description: 'Concluiu o módulo sobre Visão Computacional.',
        icon: Eye,
        type: 'module',
        moduleId: 'm5'
    },
    {
        id: 'badge-m6',
        name: 'Inovador Generativo',
        description: 'Concluiu o módulo sobre o poder da IA Generativa.',
        icon: Sparkles,
        type: 'module',
        moduleId: 'm6'
    },
    {
        id: 'badge-m7',
        name: 'Mestre da Automação',
        description: 'Concluiu o módulo sobre Automação Inteligente de Processos.',
        icon: Bot,
        type: 'module',
        moduleId: 'm7'
    },
    {
        id: 'badge-m8',
        name: 'Estrategista de Dados',
        description: 'Concluiu o módulo sobre como construir uma estratégia de dados para IA.',
        icon: Database,
        type: 'module',
        moduleId: 'm8'
    },
    {
        id: 'badge-m9',
        name: 'Mestre de Ferramentas',
        description: 'Concluiu o módulo sobre as principais ferramentas de IA do mercado.',
        icon: Wrench,
        type: 'module',
        moduleId: 'm9'
    },
    {
        id: 'badge-m10',
        name: 'Construtor de Planos',
        description: 'Concluiu o módulo sobre como criar seu plano de ação em IA.',
        icon: FileText,
        type: 'module',
        moduleId: 'm10'
    },
    {
        id: 'badge-m11',
        name: 'Mestre dos Prompts',
        description: 'Concluiu o módulo avançado sobre Engenharia de Prompt.',
        icon: Trophy,
        type: 'module',
        moduleId: 'm11'
    },
    {
        id: 'badge-m12',
        name: 'Arquiteto Autônomo',
        description: 'Concluiu o módulo sobre IA Agêntica e sistemas autônomos.',
        icon: Agent,
        type: 'module',
        moduleId: 'm12'
    },
    {
        id: 'badge-m13',
        name: 'Imperador da Eficiência',
        description: 'Concluiu o módulo sobre Automação Total e Hiperautomação.',
        icon: Repeat,
        type: 'module',
        moduleId: 'm13'
    },
    {
        id: 'badge-m14',
        name: 'Construtor Ágil',
        description: 'Concluiu o módulo sobre a revolução do Low-Code com IA.',
        icon: Blocks,
        type: 'module',
        moduleId: 'm14'
    },
    {
        id: 'badge-m15',
        name: 'Mestre do Conhecimento',
        description: 'Concluiu o módulo bônus sobre como construir seu "Segundo Cérebro".',
        icon: BrainLightbulb,
        type: 'module',
        moduleId: 'm15'
    },
    {
        id: 'badge-course-completion',
        name: 'Acelerador de Negócios',
        description: 'Concluiu com sucesso todas as lições do curso IA Sem Jargões!',
        icon: Award,
        type: 'course',
    }
];
