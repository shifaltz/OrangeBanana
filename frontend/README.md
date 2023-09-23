# Orange Juice Events - REACT JS

## Tecnologias utilizadas

Este é um projeto base que utiliza as seguintes tecnologias:

- [React](https://reactjs.org/): Biblioteca JavaScript de código aberto para construção de interfaces de usuário.
- [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript que adiciona tipagem estática opcional.
- [Vite](https://vitejs.dev/) ou Ferramentas de construção para projetos web com React.
- [TailwindCSS](https://tailwindcss.com/): Framework CSS utilitário para criação de designs personalizados.
- [Axios](https://axios-http.com/): Biblioteca para fazer requisições HTTP, utilizada para consumir APIs.

## Como rodar o projeto

Para rodar o projeto, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em: [https://nodejs.org/](https://nodejs.org/).

2. Clone o repositório do projeto:

   ```bash
   git clone url-do-projeto
   ```

3. Acesse o diretório do projeto:

   ```bash
   cd nome-do-projeto
   ```

4. Instale as dependências do projeto:

   ```bash
   npm install
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   Isso iniciará o servidor de desenvolvimento do Vite, que compilará o código e abrirá o aplicativo no seu navegador. Qualquer alteração que você fizer nos arquivos será refletida automaticamente no navegador.

## Estrutura de Pastas

- **node_modules**: <img src="src/assets/icons/node_modules.svg" alt="Alt text" width="30" height="20" >
  Pasta que contém as dependências do projeto instaladas pelo npm ou yarn. É uma pasta gerada automaticamente, não altere nenhum arquivo
- **public**: <img src="src/assets/icons/public.svg" alt="Alt text" width="30" height="20" > Pasta que contém arquivos públicos que serão copiados para a pasta de build final.
- **src**: <img src="src/assets/icons/src.svg" alt="Alt text" width="30" height="20" > Pasta raiz do código-fonte do projeto.
  - **api**: <img src="src/assets/icons/api.svg" alt="Alt text" width="30" height="20" > Pasta que contém os arquivos relacionados à comunicação com APIs externas.
  - **assets**: <img src="src/assets/icons/image.svg" alt="Alt text" width="30" height="20" > Pasta que contém arquivos estáticos, como imagens, icones, etc.
  - **components**: <img src="src/assets/icons/component.svg" alt="Alt text" width="30" height="20" > Pasta que contém componentes reutilizáveis.
  - **pages**: <img src="src/assets/icons/folder-react-components-open.svg" alt="Alt text" width="30" height="20" > Pasta que contém as páginas da aplicação.
  - **utils**: <img src="src/assets/icons/utils.svg" alt="Alt text" width="30" height="20" > Pasta que contém utilitários diversos.
  - **app.css**: <img src="src/assets/icons/css.svg" alt="Alt text" width="30" height="20" > Arquivo de estilo CSS específico para o componente raiz da aplicação.
  - **app.tsx**: <img src="src/assets/icons/react.svg" alt="Alt text" width="30" height="20" > Arquivo que contém o componente raiz da aplicação.
  - **index.css**: <img src="src/assets/icons/css.svg" alt="Alt text" width="30" height="20" > Arquivo de estilo CSS global.
  - **main.tsx**: <img src="src/assets/icons/react.svg" alt="Alt text" width="30" height="20" > Arquivo principal que renderiza o componente raiz da aplicação.
  - **routes.tsx**: <img src="src/assets/icons/routes.svg" alt="Alt text" width="30" height="20" > Arquivo que contém as definições de rotas da aplicação. Toda vez que uma página nova for criada é necessário que declare sua rota dentro desse arquivo

- **eslint.cjs**: <img src="src/assets/icons/lint.svg" alt="Alt text" width="30" height="20" > Arquivo de configuração do ESLint, uma ferramenta de formatação única de código.
- **gitignore**: <img src="src/assets/icons/git.svg" alt="Alt text" width="30" height="20" > Arquivo que lista os arquivos e pastas que devem ser ignorados pelo controle de versão do Git.
- **index.html**: <img src="src/assets/icons/html.svg" alt="Alt text" width="30" height="20" > Arquivo HTML principal da aplicação.
- **package.json**: <img src="src/assets/icons/nodejs.svg" alt="Alt text" width="30" height="20" > Arquivo de manifesto do projeto, que contém informações sobre as dependências e scripts de build, entre outros.
- **README.md**: <img src="src/assets/icons/markdown.svg" alt="Alt text" width="30" height="20" > Este arquivo, contendo informações sobre o projeto e sua estrutura.
- **tailwind.config.js**: <img src="src/assets/icons/tailwindcss.svg" alt="Alt text" width="30" height="20" > Arquivo de configuração do Tailwind CSS, um framework de estilos utilitários.
- **tsconfig.json**: <img src="src/assets/icons/nodejs.svg" alt="Alt text" width="30" height="20" > Arquivo de configuração do TypeScript, contendo opções de compilação e tipo.
- **vite.config.ts**: <img src="src/assets/icons/vite.svg" alt="Alt text" width="30" height="20" > Arquivo de configuração do Vite, um compilador e servidor de desenvolvimento rápido para projet
