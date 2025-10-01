# Curriculo Digital - Danilo Pinto

Portfolio em Next.js (App Router com TypeScript) para apresentar experiencias corporativas, projetos e canais de contato do Danilo Pinto.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS 3
- **next-themes** (gerenciamento de tema dark/light)
- **nodemailer** (envio de e-mail pelo formulário de contato)
- Contentlayer 2 (MDX)
- React Hook Form + Zod
- PNPM

## Pré-requisitos

- Node.js 18 ou 20
- PNPM 8+

## Instalação

```bash
pnpm install
```

## Comandos Principais

```bash
pnpm contentlayer:build   # gera tipagens a partir dos MDX
pnpm dev                  # ambiente de desenvolvimento
pnpm build                # build de producao
pnpm start                # executa build gerado
pnpm lint                 # checagem ESLint
pnpm format               # ajusta codigo com Prettier
```

### Portas e processos

- Servidor local usa porta `3000`.
- Porta alternativa (PowerShell): `$env:PORT=3001; pnpm dev`
- Inspecionar uso da porta: `netstat -ano | findstr :3000`
- Para encerrar (somente se autorizado): `taskkill /PID <PID> /F`

## Estrutura Resumida

```env
src/
  app/
    projetos/[slug]/page.tsx    # project detail via Contentlayer
    contato/page.tsx            # formulario de contato
    cv/page.tsx                 # call-to-action CV
    layout.tsx                  # shell + JSON-LD Person
    page.tsx                    # home
  components/                   # Header, Footer, CTA, galerias
  config/                       # dados parametrizaveis (experiencia, skills)
  content/projects/             # MDX dos projetos
  lib/fonts.ts                  # fontes Geist
  styles/globals.css            # tokens de cor e resets
  utils/contact.ts              # helpers de contato
public/
  cv/cv.pdf                     # CV (placeholder)
  images/                       # headshot e capas temporarias
```

## Configuração do Ambiente

Para que o formulário de contato envie e-mails, é necessário configurar as credenciais do seu servidor de e-mail. Crie um arquivo chamado `.env.local` na raiz do projeto e adicione as seguintes variáveis:

```env
# Configuração do Servidor de Email (SMTP)
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=seu-email@example.com
EMAIL_SERVER_PASSWORD=sua-senha-de-email-ou-app

# E-mail que receberá as mensagens do formulário
EMAIL_TO=email-onde-voce-quer-receber@example.com
```

**Nota:** Se você usa Gmail ou Outlook com verificação em duas etapas, precisa gerar uma **"Senha de App"** e usá-la no campo `EMAIL_SERVER_PASSWORD`.

Após salvar o arquivo, reinicie o servidor de desenvolvimento.

## Funcionalidades e Decisões

- **Theming:** O sistema de temas (dark/light) é gerenciado pelo `next-themes` e as cores são aplicadas globalmente via variáveis CSS em `src/styles/globals.css`.
- **Componentes de Botão:** O `CTAButton` foi refatorado para suportar variantes de marca (WhatsApp, LinkedIn) e renderizar botões apenas com ícones de forma inteligente.
- **Envio de E-mail:** O formulário de contato utiliza uma rota de API (`/api/contact`) que valida os dados no servidor e usa o `nodemailer` para enviar o e-mail de forma segura.

## Conteudo Dinamico (Contentlayer)

- Projetos ficam em `src/content/projects/*.mdx` com campos `title`, `slug`, `excerpt`, `date`, `tags`, `status`, `coverImage`.
- Status aceitos: `active`, `completed`, `prototype`.
- Rode `pnpm contentlayer:build` sempre que criar ou editar MDX.

## Customizacao Rapida

- Ajuste dados em `src/config/site.ts` (hero, timeline, skills, canais).
- Substitua imagens em `public/images/**` por assets reais.
- Troque `public/cv/cv.pdf` pelo curriculum oficial.
- Atualize timeline conforme CV definitivo.

## Checklist de QA

- [ ] `pnpm install` sem erros
- [ ] `pnpm contentlayer:build` gera `.contentlayer`
- [ ] `pnpm dev` em `http://localhost:3000`
- [ ] Home mostra hero, timeline, skills e projetos agrupados (Ativos/Concluidos/Prototipos)
- [ ] Rotas `/contato` e `/cv` respondem
- [ ] Formulario valida campos (nome >= 2 caracteres, email valido, mensagem >= 10)
- [ ] JSON-LD `Person` presente no HTML
- [ ] `pnpm lint` e `pnpm build` finalizam sem erros

## Deploy na Vercel

1. Conecte o repositorio.
2. Build command: `pnpm install && pnpm contentlayer:build && pnpm build`
3. Output: `.next`
4. Variaveis opcionais: `NEXT_PUBLIC_ANALYTICS_ID` (GA4) ou `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`

### Anotacoes sobre Analytics

- GA4: inserir script global ou usar biblioteca oficial quando for homologado.
- Plausible: incluir `<script data-domain="seu-dominio" src="https://plausible.io/js/script.js" defer></script>` no layout.

## SEO e Indexacao

- Metadata padrao configurada via `siteConfig.seo` (consumida em `src/lib/seo.ts`).
- Rotas principais expostas em `src/app/robots.ts` e `src/app/sitemap.ts` (inclui projetos dinamicos).
- Paginas (`/`, `/contato`, `/cv`, `/projetos/[slug]`) possuem metadados dedicados, Open Graph e Twitter Cards.
- JSON-LD:
  - `Person` global no layout.
  - `BreadcrumbList` em cada projeto.
- Ajuste `siteConfig.website` para o dominio publico antes do deploy.
- Novos MDX devem preencher `excerpt`, `date`, `status` e `coverImage` para alimentar SEO automaticamente.
