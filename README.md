# Adashmin

### Boas vindas ao Adashmin!

Projeto fullstack de gerenciamento de funcionários usando NestJs como framework NodeJs no backend, e NextJs como framework React no frontend.

# Como iniciar

## Backend:

Após clonar o projeto, acesse pelo terminal a pasta `./adashmin-api` e execute o comando `npm install` para instalar as dependências do projeto.

### MongoDB

A versão em produção está acessando um servidor hospedado pelo MongoDB Atlas, por motivos de segurança o repositório não contém as variáveis para acesso.

Em vista de testes locais, assegure-se de que tenha uma instância do MongoDB sendo executada, caso não houver, o [site oficial](https://www.mongodb.com/pt-br) oferece algumas opções, escolha a que melhor te atender, crie no projeto um arquivo `.env` ou `.env.development.local` com as seguintes variáveis, substituindo com os seus valores:

```Basic
MONGODB_URI="[mongodb ou mongodb+srv]/[usuario]:[senha]@[127.0.0.1 ou cluster*.*******.mongodb.net]/[adashmin]"
```

### Pronto para rodar

Comandos disponíveis:

- `dev`: inicia o servidor em modo **desenvolvedor**, reinicia ao aplicar alterações no código.
- `build`: compila o projeto em JavaScript na pasta **dist**.
- `start`: inicia o servidor em modo **produção** a partir do projeto compilado na pasta **dist**.

Uso:

```bash
npm run [comando]
# or
yarn [comando]
# or
pnpm [comando]
# or
bun [comando]
```

## Endpoints disponíveis

- **GET:** `/api/funcionarios`: Retorna todos os funcionários cadastrados.
- **GET:** `/api/funcionarios/:id`: Retorna as informações de um funcionário específico com base no ID fornecido.
- **POST:** `/api/funcionarios`: Cria um novo funcionário com base nos dados fornecidos no corpo da requisição.
- **PATCH:** `/api/funcionarios/:id`: Atualiza as informações de um funcionário específico com base no ID fornecido e nos dados fornecidos no corpo da requisição.
- **DELETE:** `/api/funcionarios/:id`: Exclui um funcionário específico com base no ID fornecido.

# Frontend:

## Como iniciar

Após clonar o projeto, execute o comando `npm install` para instalar as dependências do projeto.

### Pronto para rodar

Comandos disponíveis:

- `dev`: inicia o servidor em modo **desenvolvedor**, reinicia ao aplicar alterações no código.
- `build`: compila o projeto em JavaScript na pasta **dist**.
- `start`: inicia o servidor em modo **produção** a partir do projeto compilado na pasta **dist**.

Uso:

```bash
npm run [comando]
# or
yarn [comando]
# or
pnpm [comando]
# or
bun [comando]
```

### Acesso

Após iniciar o projeto acesse seu [ambiente local](http://localhost:3000) para visualizar.

# Ambientes em produção

> **AVISO:** Os ambientes foram desativados e não estão mais disponíveis. Essa sessão foi mantida apenas para informar como foi feito.

Ambos ambientes se encontram hospedados em núvem, usando planos gratuitos.

O backend se encontra hospedado na [Render](https://render.com/) e ouvindo requisições através do endereço:

[`https://adashmin.onrender.com`](https://adashmin.onrender.com)

> **AVISO:** Por se tratar de uma instancia gratuita, ela ficará inativa quando não houver requisições, o que pode atrasar as solicitações em 50 segundos ou mais.

Quanto ao frontend, está hospedado na [Vercel](https://vercel.com/) e pode ser visualizado no endereço:

[`https://adashmin.vercel.app/`](https://adashmin.vercel.app/)
