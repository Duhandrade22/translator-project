# 🌐 Translator App

> Aplicação web moderna de tradução de textos com síntese de voz e interface intuitiva

![Banner do Projeto](./.github/images/banner.png)

## 📋 Sobre o Projeto

O **Translator App** é uma aplicação web desenvolvida em React com TypeScript que permite traduzir textos entre diferentes idiomas de forma rápida e intuitiva. O projeto oferece recursos avançados como síntese de voz (Text-to-Speech), cópia de textos e inversão de idiomas com um único clique.

### ✨ Funcionalidades Principais

- ✅ **Tradução em tempo real** entre 3 idiomas (Inglês, Francês e Português)
- 🔊 **Síntese de voz** para ouvir a pronúncia dos textos original e traduzido
- 📋 **Copiar texto** para a área de transferência com feedback visual
- 🔄 **Inversão de idiomas** (swap) instantânea entre origem e destino
- ⚡ **Interface responsiva** e moderna com animações suaves
- 🌙 **Design dark mode** elegante e confortável para os olhos
- 📊 **Contador de caracteres** com limite de 500 caracteres
- ⚠️ **Tratamento de erros** com mensagens amigáveis ao usuário

![Tela Principal](./.github/images/main-screen.png)

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e ferramentas:

### Core
- **[React](https://react.dev/)** (v19.2.0) - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** (v5.9.3) - Superset tipado do JavaScript
- **[Vite](https://vite.dev/)** (v7.2.4) - Build tool e dev server ultra-rápido

### Estilização
- **[TailwindCSS](https://tailwindcss.com/)** (v3.4.1) - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** (v8.5.6) - Ferramenta para transformar CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** (v10.4.22) - Plugin PostCSS para adicionar prefixos de navegadores

### Qualidade de Código
- **[ESLint](https://eslint.org/)** (v9.39.1) - Linter para JavaScript/TypeScript
- **[TypeScript ESLint](https://typescript-eslint.io/)** (v8.46.4) - Plugin ESLint para TypeScript

### APIs e Recursos
- **[MyMemory Translation API](https://mymemory.translated.net/)** - API gratuita para traduções
- **[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)** - API nativa do navegador para síntese de voz
- **[Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)** - API nativa para copiar textos

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **pnpm** (gerenciador de pacotes recomendado)
  - Instalação: `npm install -g pnpm`

## 🔧 Instalação e Execução

### 1️⃣ Clone o repositório

git clone https://github.com/seu-usuario/translator.git
cd translator### 2️⃣ Instale as dependências

pnpm install### 3️⃣ Execute o projeto em modo de desenvolvimento

pnpm devA aplicação estará disponível em: **http://localhost:5173**

### 4️⃣ Build para produção

pnpm build### 5️⃣ Preview da build de produção

pnpm preview## 📁 Estrutura do Projeto
