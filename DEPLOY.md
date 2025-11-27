# Guia de Deploy - IA Sem Jargões: Acelerador de Negócios

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de que:
- ✅ Node.js está instalado (versão 16+)
- ✅ npm está funcionando corretamente
- ✅ Você tem uma chave de API do Google Gemini

## 🚀 Opções de Deploy

### Opção 1: Vercel (Recomendado) ⭐

**Por que Vercel?**
- Deploy automático via Git
- HTTPS gratuito
- Globalmente distribuído (CDN)
- Configuração zero para Vite
- Variáveis de ambiente fáceis

**Passos:**

1. **Instale as dependências localmente (teste)**
   ```bash
   cd "c:\Users\maria_rkmkuvn\Downloads\copy-of-ia-sem-jargões_-acelerador-de-negócios"
   npm install
   ```

2. **Crie uma conta no Vercel**
   - Acesse https://vercel.com
   - Faça signup (pode usar GitHub, GitLab ou email)

3. **Opção A: Deploy via CLI**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```
   
   Siga as instruções:
   - Setup and deploy? `Y`
   - Which scope? Selecione sua conta
   - Link to existing project? `N`
   - What's your project's name? `ia-sem-jargoes`
   - In which directory? `./`
   - Want to override settings? `N`

4. **Opção B: Deploy via Dashboard**
   - Primeiro, suba o código para GitHub/GitLab
   - No dashboard da Vercel, clique em "New Project"
   - Importe o repositório
   - Vercel detectará Vite automaticamente

5. **Configure Variáveis de Ambiente**
   - No dashboard do projeto, vá em Settings → Environment Variables
   - Adicione:
     ```
     GEMINI_API_KEY=sua_chave_api_aqui
     ```

6. **Deploy!**
   - Vercel fará deploy automaticamente
   - Você receberá uma URL: `https://ia-sem-jargoes.vercel.app`

---

### Opção 2: Netlify

**Passos:**

1. **Instale dependências**
   ```bash
   npm install
   ```

2. **Crie `netlify.toml` na raiz do projeto**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

4. **Configure Variáveis de Ambiente**
   - Site settings → Build & deploy → Environment
   - Adicione `GEMINI_API_KEY`

---

### Opção 3: GitHub Pages

**Limitações**: Requer ajustes no routing (HashRouter já está configurado ✅)

1. **Instale gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Adicione scripts no package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Configure base no vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/nome-do-repositorio/',
     // ... resto da config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure no GitHub**
   - Repository → Settings → Pages
   - Source: `gh-pages` branch

**⚠️ Limitação**: GitHub Pages não suporta variáveis de ambiente do backend. A chave do Gemini precisará ser hardcoded (NÃO RECOMENDADO para produção real).

---

### Opção 4: Firebase Hosting

1. **Instale Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Inicialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub automatic deploys: `No` (ou Yes se preferir)

3. **Build e Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

4. **Variáveis de Ambiente**
   - Use Firebase Functions para proteger a API key
   - Ou use Firebase Remote Config

---

## 🔧 Configuração de Variáveis de Ambiente

### Para Desenvolvimento Local

1. Copie o arquivo de exemplo:
   ```bash
   copy .env.example .env.local
   ```

2. Edite `.env.local` e adicione sua chave:
   ```env
   GEMINI_API_KEY=sua_chave_api_real_aqui
   ```

### Para Produção

**Vercel/Netlify/Firebase:**
- Configure via dashboard da plataforma
- Nunca commite a chave no Git

**GitHub Pages:**
- ⚠️ NÃO É SEGURO expor chaves de API
- Considere criar um backend simples (Vercel Functions, Netlify Functions, Firebase Functions) para proteger a chave

---

## 📦 Build Local (Teste antes do Deploy)

```bash
# 1. Instalar dependências
npm install

# 2. Criar build de produção
npm run build

# 3. Testar build localmente
npm run preview
```

Acesse `http://localhost:4173` para testar a versão de produção localmente.

---

## ✅ Checklist Pré-Deploy

- [ ] Todas as dependências instaladas (`npm install`)
- [ ] Build funciona sem erros (`npm run build`)
- [ ] Preview local funciona (`npm run preview`)
- [ ] Variáveis de ambiente configuradas
- [ ] Chave do Gemini válida e com quota
- [ ] README.md atualizado com URL de produção
- [ ] `.gitignore` inclui `.env.local`

---

## 🎯 Recomendação Final

**Para este projeto, recomendo Vercel:**
1. ✅ Mais fácil para iniciantes
2. ✅ Deploy em segundos
3. ✅ HTTPS automático
4. ✅ Variáveis de ambiente seguras
5. ✅ Preview deploys para cada commit
6. ✅ Totalmente gratuito para projetos pessoais

---

## 🔒 Segurança

### Importante: Proteção da API Key

O projeto atual expõe a chave do Gemini no frontend. Para produção real com múltiplos usuários, considere:

1. **Criar um backend simples** (Vercel/Netlify Functions)
   ```javascript
   // api/chat.js (Vercel Function)
   export default async function handler(req, res) {
     const { GoogleGenAI } = require('@google/genai');
     const genai = new GoogleGenAI(process.env.GEMINI_API_KEY);
     
     // Processar requisição...
     // Retornar resposta
   }
   ```

2. **Rate limiting** para prevenir abuso
3. **Autenticação real** (Firebase Auth, Auth0, etc.)

Para este projeto educacional/demo, a configuração atual é aceitável.

---

## 📞 Troubleshooting

### Build falha
- Verifique se todas as dependências estão instaladas
- Rode `npm install` novamente
- Limpe cache: `npm cache clean --force`

### Página em branco após deploy
- Verifique se `base` está correto no vite.config.ts
- Confirme que está usando HashRouter (já está ✅)
- Veja console do navegador para erros

### AI Tutor não funciona
- Verifique se GEMINI_API_KEY está configurada
- Confirme que a chave é válida
- Verifique quota da API

### Estilos não aparecem
- Build incluiu os arquivos CSS? Verifique pasta `dist/`
- Tailwind foi processado? Rode `npm run build` novamente

---

## 🎉 Após o Deploy

1. Teste todas as funcionalidades:
   - Login/Cadastro
   - Navegação entre módulos
   - Quizzes
   - AI Tutor
   - Download de certificado

2. Compartilhe a URL!

3. Monitore uso da API do Gemini

---

**Criado com ❤️ - Pronto para o mundo! 🚀**
