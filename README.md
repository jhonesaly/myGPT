# myGPT - ChatGPT Clone

Este é um projeto de clone do ChatGPT que utiliza a API da OpenAI no back-end, feito com node, e front-end feito com react.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes para Node.js)
- [API Key da OpenAI](https://beta.openai.com/signup/) (necessária para acessar a API)

## Estrutura do Projeto

O projeto é dividido em duas pastas principais:

- **web**: Front-end com React.
- **server**: Back-end com Node.js.

A raiz do projeto contém apenas este README.md, .gitignore e as pastas web e server.

## Instalação e Uso

1. Clone este repositório:

   ```bash
   git clone https://github.com/jhonesaly/myGPT.git
   ```

2. Instale as dependências para cada pasta:

   ```bash
   # Front-end (web)
   cd web
   npm install

   # Back-end (server)
   cd ../server
   npm install
   ```

3. Configure a API Key da OpenAI. Edite o arquivo `.env` dentro da pasta `server` e insira sua chave:

   ```env
   OPENAI_API_KEY=SuaChaveAqui
   ```

4. Inicie cada parte do projeto:

   ```bash
   # Dentro da pasta web
   npm start

   # Dentro da pasta server
   npm start
   ```

Acesse o front-end em [http://localhost:3000](http://localhost:3000) e o back-end em [http://localhost:5000](http://localhost:5000).

## Próximos passos

- Refazer o back-end em python utilizando django REST framework ou fastAPI
- Fazer uma API para acessar o bard do Google
- Implementar testes automatizados

## Contribuindo

Se quiser contribuir para o projeto, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).