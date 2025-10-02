# Como Adicionar um Novo Projeto

Adicionar um novo projeto ao seu portfólio envolve 2 passos principais:

1.  **Adicionar a Imagem de Capa**
2.  **Criar o Arquivo de Conteúdo do Projeto**

---

#### Passo 1: Adicionar a Imagem de Capa

1.  Prepare uma imagem de capa para o seu projeto (formato `.jpg` ou `.png` é ideal).
2.  Adicione essa imagem na pasta: `public/images/projects/`.

---

#### Passo 2: Criar o Arquivo de Conteúdo (`.mdx`)

1.  Vá até a pasta `src/content/projects/`.
2.  Crie um novo arquivo de texto lá dentro. O nome do arquivo deve ser simples e relacionado ao projeto, por exemplo: `meu-novo-projeto.mdx`.
3.  Copie e cole o template abaixo dentro do seu novo arquivo e preencha as informações.

**Template para usar (copie e cole):**

```markdown
---
title: 'Título do Seu Projeto'
slug: 'titulo-do-seu-projeto-para-url'
excerpt: 'Um resumo curto e impactante de uma linha que aparecerá no card do projeto.'
date: 'YYYY-MM-DD'
tags:
  - 'Tecnologia Principal'
  - 'Habilidade Chave'
  - 'Ferramenta'
status: 'completed'
coverImage: '/images/projects/nome-da-sua-imagem.jpg'
---

## Problema

Descreva aqui, de forma clara e direta, o desafio de negócio ou o problema que este projeto se propôs a resolver. Qual era a dor do cliente ou da operação?

## Papel e Responsabilidades

Qual foi o seu papel? (Ex: Líder Técnico, Arquiteto, Desenvolvedor Principal). Detalhe suas principais responsabilidades no projeto.

## Solução e Estratégia

Explique a solução que você e seu time implementaram. Qual foi a estratégia? Descreva as decisões de arquitetura, o processo de desenvolvimento e as fases da entrega.

## Impacto e Resultados

Quais foram os resultados concretos? Use métricas sempre que possível. (Ex: "Redução de 30% no tempo de processamento", "Aumento de 15% na satisfação do cliente", "Economia de R$ X mil por ano").

## Tecnologias Utilizadas

Liste as principais tecnologias, frameworks e ferramentas que foram usadas no projeto.
```

---

#### O Significado de Cada Campo

- **`title`**: O título principal que aparecerá na página do projeto.
- **`slug`**: A parte que irá na URL (ex: `/projetos/meu-projeto`). Use letras minúsculas e hífens.
- **`excerpt`**: O resumo que aparece na listagem de todos os projetos.
- **`date`**: A data de conclusão ou da última atualização importante do projeto.
- **`tags`**: Palavras-chave que descrevem o projeto. Elas aparecerão como "pílulas" na página.
- **`status`**: O estado atual do projeto. Use uma das três opções:
  - `completed`: Projeto concluído.
  - `active`: Projeto em andamento.
  - `prototype`: É um protótipo ou estudo.
- **`coverImage`**: O caminho para a imagem de capa que você adicionou na pasta `public/images/projects/`.

Depois de criar o arquivo, o Contentlayer (a ferramenta que lê esses arquivos) irá detectar as mudanças automaticamente quando você reiniciar o servidor de desenvolvimento.
