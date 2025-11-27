# 🚀 Guia Rápido: Deploy na Vercel

Este guia mostra como fazer deploy **sem precisar instalar Node.js ou npm** localmente. A Vercel fará todo o build na nuvem!

---

## 📋 Pré-requisitos

- ✅ Conta no GitHub (gratuita)
- ✅ Chave de API do Google Gemini ([obtenha aqui](https://ai.google.dev/))
- ⏱️ Tempo estimado: **10-15 minutos**

---

## Passo 1: Criar Repositório no GitHub

### 1.1 Acesse GitHub
- Vá para https://github.com
- Faça login (ou crie uma conta gratuita)

### 1.2 Criar Novo Repositório
- Clique no **+** no canto superior direito
- Selecione **"New repository"**
- Preencha:
  - **Repository name**: `ia-sem-jargoes-curso`
  - **Description**: `Curso de IA para Empresários`
  - **Public** ou **Private** (sua escolha)
  - ❌ **NÃO** marque "Initialize with README" (já temos arquivos)
- Clique em **"Create repository"**

### 1.3 Subir os Arquivos

Você tem 2 opções:

#### **Opção A: Via GitHub Web (Mais Fácil)**

1. Na página do repositório criado, clique em **"uploading an existing file"**
2. Arraste TODOS os arquivos da pasta:
   ```
   c:\Users\maria_rkmkuvn\Downloads\copy-of-ia-sem-jargões_-acelerador-de-negócios\
   ```
   
   **⚠️ IMPORTANTE**: 
   - **NÃO suba** o arquivo `.env.local` (contém chaves secretas)
   - Suba todos os outros arquivos incluindo `.env.example`

3. Escreva uma mensagem de commit: `Initial commit - Projeto otimizado`
4. Clique em **"Commit changes"**

#### **Opção B: Via GitHub Desktop (Alternativa)**

1. Baixe e instale GitHub Desktop: https://desktop.github.com/
2. Clone o repositório criado
3. Copie os arquivos do projeto para a pasta clonada
4. Commit e push

---

## Passo 2: Conectar com Vercel

### 2.1 Criar Conta na Vercel
- Acesse https://vercel.com
- Clique em **"Sign Up"**
- Escolha **"Continue with GitHub"**
- Autorize a conexão Vercel ↔ GitHub

### 2.2 Importar Projeto
- No dashboard da Vercel, clique em **"Add New..."** → **"Project"**
- Você verá seus repositórios do GitHub
- Encontre **`ia-sem-jargoes-curso`** e clique em **"Import"**

### 2.3 Configurar Projeto

**Framework Preset**: Vite (Vercel detectará automaticamente ✅)

**Root Directory**: `./` (padrão)

**Build Settings** (já detectados automaticamente):
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

✅ **Não precisa mudar nada, Vercel já reconheceu tudo!**

### 2.4 Configurar Variável de Ambiente (CRÍTICO)

1. Expanda **"Environment Variables"**
2. Adicione:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: `sua_chave_api_do_gemini_aqui`
   - Deixe marcado para **Production**, **Preview** e **Development**
3. Clique em **"Add"**

### 2.5 Deploy!
- Clique no botão azul **"Deploy"**
- Aguarde 2-3 minutos enquanto a Vercel:
  - ✅ Instala dependências
  - ✅ Processa Tailwind CSS
  - ✅ Compila TypeScript
  - ✅ Otimiza assets
  - ✅ Faz deploy

---

## Passo 3: Testar o Deploy

### 3.1 Acessar URL
- Quando o deploy terminar, você verá: **"🎉 Congratulations!"**
- Clique em **"Visit"** ou copie a URL
- Formato: `https://ia-sem-jargoes-curso.vercel.app`

### 3.2 Testar Funcionalidades

Teste no site publicado:
- ✅ Login com credenciais admin:
  - Email: `admin@iasemjargoes.com`
  - Senha: `adminpassword`
- ✅ Criar nova conta de estudante
- ✅ Navegar pelos módulos
- ✅ Fazer um quiz
- ✅ Testar o AI Tutor (requer chave do Gemini válida)
- ✅ Completar uma lição e ganhar XP

---

## 🎯 URLs do Projeto

Após o deploy, você terá:

- **URL de Produção**: `https://seu-projeto.vercel.app`
- **Dashboard**: https://vercel.com/dashboard
- **Domain personalizado** (opcional): Configure em Project Settings

---

## 🔄 Atualizações Futuras

Para atualizar o site depois:

1. Faça mudanças nos arquivos locais
2. Suba para GitHub (commit + push)
3. **Vercel fará deploy automático** dos novos commits! 🎉

---

## ⚙️ Configurações Avançadas (Opcional)

### Domínio Personalizado
- Dashboard → Seu projeto → Settings → Domains
- Adicione seu domínio customizado
- Configure DNS conforme instruções

### Preview Deployments
- Cada branch/PR terá URL de preview única
- Teste mudanças antes de ir para produção

### Analytics
- Settings → Analytics
- Monitore visitantes e performance

---

## 🆘 Troubleshooting

### Build Falha
**Erro**: "Build failed"
- Verifique logs no dashboard da Vercel
- Geralmente é dependência faltando (mas não deveria acontecer)

### Página em Branco
**Sintoma**: Site carrega mas fica branco
- Abra console do navegador (F12)
- Veja se há erros JavaScript
- Verifique se `GEMINI_API_KEY` está configurada

### AI Tutor Não Funciona
**Sintoma**: Erro ao usar o tutor
- Confirme que `GEMINI_API_KEY` está correta
- Verifique quota da API do Gemini
- Teste a chave em: https://ai.google.dev/

### Estilos Estranhos
**Sintoma**: Layout quebrado
- Limpe cache do navegador (Ctrl + Shift + R)
- Verifique se Tailwind CSS foi processado no build
- Veja logs de build na Vercel

---

## ✅ Checklist Final

Antes de compartilhar o site:

- [ ] Site carrega corretamente
- [ ] Login funciona
- [ ] Módulos aparecem
- [ ] Quizzes funcionam
- [ ] XP e badges funcionam
- [ ] AI Tutor responde (se chave configurada)
- [ ] Responsivo em mobile
- [ ] Performance boa (teste no mobile também)

---

## 🎉 Parabéns!

Seu curso de IA está no ar! 🚀

**Próximos passos:**
1. Compartilhe a URL com alunos
2. Monitore uso via Vercel Analytics
3. Acompanhe quota da API do Gemini
4. Continue melhorando o conteúdo

---

## 📞 Links Úteis

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Gemini API**: https://ai.google.dev/
- **Seu Dashboard**: https://vercel.com/dashboard

---

**Criado com ❤️ - Bom deploy! 🚀**
