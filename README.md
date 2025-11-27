<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# IA Sem Jargões: Acelerador de Negócios

Uma plataforma educacional interativa que desmistifica a Inteligência Artificial e ensina empresários a aplicá-la de forma prática em seus negócios.

## 📋 Sobre o Projeto

Este é um curso completo e gamificado sobre IA, desenvolvido para empresários que querem entender e aplicar IA sem se perder em jargões técnicos. A plataforma oferece:

- **15 módulos estruturados** cobrindo desde fundamentos até aplicações avançadas
- **Sistema de gamificação** com XP, níveis e conquistas
- **Quizzes interativos** para fixação do conteúdo
- **AI Tutor** integrado com Google Gemini para suporte personalizado
- **Certificado digital** ao completar o curso
- **Glossário interativo** com analogias práticas
- **Painel administrativo** para acompanhamento de alunos

## 🚀 Funcionalidades Principais

### Para Estudantes
- ✅ Sistema de autenticação (login/cadastro)
- ✅ Progresso individual salvo localmente
- ✅ Visualização de módulos e lições
- ✅ Vídeos educacionais e conteúdo textual
- ✅ Quizzes com feedback imediato
- ✅ Sistema de XP e progressão de níveis
- ✅ Badges/Conquistas desbloqueáveis
- ✅ Download de conteúdo em PDF
- ✅ Certificado de conclusão
- ✅ Tutor de IA para dúvidas

### Para Administradores
- ✅ Dashboard administrativo
- ✅ Visualização de todos os usuários
- ✅ Acompanhamento de progresso individual
- ✅ Estatísticas de conclusão por módulo

## 🏗️ Estrutura do Projeto

```
copy-of-ia-sem-jargões_-acelerador-de-negócios/
├── components/          # Componentes React reutilizáveis
│   ├── AITutor.tsx     # Chatbot de IA integrado
│   ├── Certificate.tsx  # Componente de certificado
│   ├── Header.tsx      # Cabeçalho da aplicação
│   ├── Quiz.tsx        # Sistema de quizzes
│   └── ...
├── context/            # Contextos React
│   ├── AuthContext.tsx      # Gerenciamento de autenticação
│   └── ProgressContext.tsx  # Gerenciamento de progresso
├── data/               # Dados do curso
│   ├── courseData.ts        # Dados principais
│   ├── glossaryData.ts      # Glossário de termos
│   ├── gamificationData.ts  # Badges e conquistas
│   └── modules/             # Conteúdo dos 15 módulos
├── pages/              # Páginas da aplicação
│   ├── CourseDashboard.tsx  # Dashboard principal
│   ├── LessonView.tsx       # Visualização de lições
│   ├── LoginPage.tsx        # Página de login
│   ├── SignUpPage.tsx       # Página de cadastro
│   └── AdminDashboard.tsx   # Painel administrativo
├── App.tsx             # Componente principal
├── index.tsx           # Ponto de entrada
├── index.html          # HTML base
├── index.css           # Estilos globais
├── types.ts            # TypeScript types
├── vite.config.ts      # Configuração do Vite
└── package.json        # Dependências
```

## 🛠️ Tecnologias Utilizadas

- **React 19.1** - Biblioteca UI
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server
- **React Router** - Roteamento
- **Tailwind CSS** - Framework CSS (via CDN)
- **Google Gemini AI** - AI Tutor
- **jsPDF** - Geração de PDFs
- **LocalStorage** - Persistência de dados

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

1. **Clone ou baixe o projeto**

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a chave da API do Gemini**
   
   Crie ou edite o arquivo `.env.local` na raiz do projeto:
   ```env
   GEMINI_API_KEY=sua_chave_api_aqui
   ```

   Para obter uma chave API do Gemini:
   - Acesse https://ai.google.dev/
   - Faça login com sua conta Google
   - Crie uma nova API key

4. **Execute em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em `http://localhost:3000`

5. **Build para produção (opcional)**
   ```bash
   npm run build
   ```

   Os arquivos otimizados serão gerados na pasta `dist/`

## 🚀 Deploy para Produção

O projeto está otimizado e pronto para deploy. Consulte o **[Guia de Deploy (DEPLOY.md)](DEPLOY.md)** para instruções detalhadas de deployment em:
- **Vercel** (Recomendado)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

**Deploy rápido com Vercel:**
```bash
npm install -g vercel
vercel
```

## 👤 Credenciais de Acesso

### Conta Administrador (Pré-configurada)
- **Email**: admin@iasemjargoes.com
- **Senha**: adminpassword

### Criar Nova Conta de Estudante
- Use a página de cadastro para criar contas de estudantes
- Não é necessário email real (sistema local)

## 📚 Módulos do Curso

1. **Introdução à IA** - Fundamentos e conceitos básicos
2. **IA Generativa** - ChatGPT e similares
3. **Prompt Engineering** - Arte de fazer perguntas
4. **IA no Marketing** - Aplicações práticas
5. **IA em Vendas** - Automação e otimização
6. **IA no Atendimento** - Chatbots e suporte
7. **IA em RH** - Recrutamento e gestão
8. **IA Financeira** - Análises e previsões
9. **IA em Operações** - Eficiência operacional
10. **IA para Criação** - Conteúdo e design
11. **Análise de Dados** - Insights com IA
12. **Ética e Responsabilidade** - Uso consciente
13. **Ferramentas de IA** - Stack tecnológica
14. **Implementação** - Como começar
15. **Módulo Bônus** - Estratégias avançadas

## 🎮 Sistema de Gamificação

- **100 XP** por lição completada (módulos 1-14)
- **150 XP** por lição do módulo bônus
- **Sistema de níveis** com progressão exponencial
- **Badges por módulo** - Uma conquista ao completar cada módulo
- **Badge de curso** - Conquista especial ao completar 100%

## 🔧 Problemas Comuns

### O AI Tutor não funciona
- Verifique se a chave API do Gemini está configurada corretamente no `.env.local`
- Certifique-se de que a chave é válida e tem quota disponível

### Progresso não está salvando
- Verifique se o localStorage está habilitado no navegador
- Certifique-se de estar logado com um usuário

### Estilos não aparecem corretamente
- Limpe o cache do navegador
- Verifique se o Tailwind CDN está carregando (conexão com internet necessária)

## 📄 Licença

Este projeto foi criado via AI Studio: https://ai.studio/apps/drive/1iJUZbPfIcBIX5FaqkRaZBAb_H4ZhS8mU

## 🤝 Suporte

Para dúvidas ou problemas, consulte a documentação ou entre em contato com o suporte.

---

**Desenvolvido com ❤️ para empresários que querem transformar seus negócios com IA**
