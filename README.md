# Adashmin

## Como iniciar

Após iniciar o projeto, execute o comando `npm install` para instalar as dependências do projeto.

### MongoDB

A versão em produção está acessando um servidor hospedado pelo MongoDB Atlas, por motivos de segurança o repositório não contém as variáveis para acesso.

Em vista de testes locais, assegure-se de que tenha uma instância do MongoDB sendo executada, caso não houver, o [site oficial](https://www.mongodb.com/pt-br) oferece algumas opções, escolha a que melhor te atende, crie no projeto um arquivo `.env` ou `.env.development.local` com as seguintes variáveis, substituindo com os seus valores:

```Basic
DB_SERVER="mongodb ou mongodb+srv"
DB_USER="usuario"
DB_PASS="senha"
DB_URL="127.0.0.1 ou cluster*.*******.mongodb.net"
DB_NAME="adashmin"
```

### Pronto para rodar

Comandos disponíveis:

- `npm run dev`: inicia o servidor em modo **desenvolvedor**, reinicia ao aplicar alterações no código.
- `npm run build`: compila o projeto em JavaScript na pasta **dist**.
- `npm start`: inicia o servidor em modo **produção** a partir do projeto compilado na pasta **dist**.

## Endpoints disponíveis

- `/api/funcionarios`: Retorna todos os funcionários cadastrados.
- `/api/funcionarios/:id`: Retorna as informações de um funcionário específico com base no ID fornecido.
- `/api/funcionarios`: Cria um novo funcionário com base nos dados fornecidos no corpo da requisição.
- `/api/funcionarios/:id`: Atualiza as informações de um funcionário específico com base no ID fornecido e nos dados fornecidos no corpo da requisição.
- `/api/funcionarios/:id`: Exclui um funcionário específico com base no ID fornecido.
