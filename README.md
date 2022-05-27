# IK Solution - Backend

---

Este repositório contém o teste prático "_IK Solution - Backend_", desafio técnico para a vaga de desenvolvedor Full Stack. Este projeto consiste na construção de uma agenda eletrônica, seguindo os requisitos abaixo.

---

### Requisitos: 
-  Acessar uma tela com uma relação de compromissos com Nome, Data, Hora e o Título da Atividade agendada. A sequência das colunas pode ser trabalhada livremente.
- Desenvolver uma tela de cadastro que permita a inclusão.
- Desenvolver a tela o fluxo de alteração dos dados vinculados ao registro selecionado.
- Criar a exclusão do registro.

---
### Profissional executor:

- _[Flávio Bianchetti](https://www.linkedin.com/in/flaviobianchetti/)_

---
### Tecnologias utilizadas na construção desta aplicação backend:

<section>
  <a href="https://docs.docker.com/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/Docker-018bff?style=for-the-badge&logo=docker&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
      target="_blank"
    />
  </a>
  <a href="https://www.typescriptlang.org/docs/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://sequelize.org/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/Sequelize-915f91?style=for-the-badge&logo=sequelize&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://www.mysql.com/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/MySQL-02569B?style=for-the-badge&logo=mysql&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://devcenter.heroku.com/categories/reference" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/Heroku-663399?style=for-the-badge&logo=heroku&logoColor=white"
      target="_blank"
    />
  </a>
</section>

---

### Instalação

1. Abra o terminal, em um diretório de sua preferência, e faça o clone do projeto:
```bash
  git clone git@github.com:flavio-bianchetti/ik-backend.git
```

2. Entre no diretório do projeto:
```bash
  cd ik-backend
```
3. Instale as dependências:
```bash
  npm install
```
4. A API utiliza o banco de dados MySQL para armazenar as informações. Caso não tenha o MySQL instalado, consulte a documentação disponível _[aqui](https://dev.mysql.com/doc/)_ ou altere o arquivo "_src/config/database.ts_" para o banco de dados de sua preferência.

5. A aplicação faz utilização da dependência _[Sequelize](https://sequelize.org/)_ que permite a crição do banco de dados automaticamente durante a inicialização e outras funcionalidades.

6. Renomeie o arquivo _[dotenv](https://www.npmjs.com/package/dotenv)_ _".env-example"_ que se encontra na pasta principal e configure-o com as suas informações:
```javascript
  // exemplo de preenchimento:
  DB_HOSTNAME=localhost
  DB_USERNAME=root
  DB_PASSWORD=minhaSenhaDoBanco
  DB_DATABASE=ik_solution
  DB_PORT=3306
  APP_PORT=3002
```
7. Inicie a aplicação:
```bash
  npm start 
```

### Testando da API:

1. Para os testes utilize o _[Postman](https://www.postman.com/)_ ou _[Insomnia](https://insomnia.rest/download)_, nas rotas abaixo discriminadas.

### Recursos disponíveis:

- **Schedule:**
  - **POST /schedule**
    - **request:** necessita de que sejam passadas através do body as informações da tarefa, conforme o exemplo abaixo.
    ```bash
      {
        "name": "Segunda tarefa",
        "date": "2022-05-27T12:20:05.315Z",
        "time": "12:20",
        "description": "Minha segunda tarefa"
      }
    ```
    - **response:** em caso de sucesso retorna um objeto similar ao exibido abaixo.
    ```bash
      {
        "id": 2,
        "name": "Segunda tarefa",
        "date": "2022-05-27T12:20:05.315Z",
        "time": "12:20",
        "description": "Minha segunda tarefa"
    }
    ```
  - **GET /schedule**
    - **request:** necessita de que seja passado o link, conforme o exemplo abaixo.
    ```http
      http://localhost:3002/schedule
    ```
    - **response:** em caso de sucesso retorna um array com todas as tarefas cadastradas.
    ```bash
      [
        {
          "id": 2,
          "name": "Segunda tarefa",
          "date": "2022-05-27T12:20:05.315Z",
          "time": "12:20",
          "description": "Minha segunda tarefa"
        }
      ]
    ```
  - **GET /schedule/:id**
    - **request:** necessita de que seja passado através do link o id da tarefa, conforme o exemplo abaixo.
    ```http
      http://localhost:3002/schedule/2
    ```
    - **response:** em caso de sucesso retorna a tarefa cadastrada.
    ```bash
      [
        {
          "id": 2,
          "name": "Segunda tarefa",
          "date": "2022-05-27T12:20:05.315Z",
          "time": "12:20",
          "description": "Minha segunda tarefa"
        }
      ]
    ```
  - **PUT /schedule/task/:id**
    - **request:**
      - necessita de que seja passado através do link o id da tarefa a ser alterada, conforme o exemplo abaixo.
        ```http
          http://localhost:3002/schedule/task/4
        ```
      - necessita também de que sejam passadas através do body as informações para alteração da tarefa.
        ```bash
          {
            "name": "Quinta tarefa",
            "date": "2022-05-27T12:20:05.315Z",
            "time": "12:20",
            "description": "Minha quinta tarefa"
          }
        ```
    - **response:**  em caso de sucesso retorna um objeto similar ao exibido abaixo.
    ```bash
      {
        "id": 4,
        "name": "Quinta tarefa",
        "date": "2022-05-27T12:20:05.315Z",
        "time": "12:20",
        "description": "Minha quinta tarefa"
      }
    ```
  - **DELETE /schedule/task/:id**
    - **request:** necessita de que seja passado através do link o id da tarefa a ser excluída, conforme o exemplo abaixo.
        ```http
          http://localhost:3002/schedule/task/4
        ```
    - **response:**  em caso de sucesso é retornada uma resposta com o status 200, com o corpo da mensagem vazio.

---
<!-- ### Problemas conhecidos não resolvidos:

### Desafios e Aprendizados: -->


### Considerações finais:
- Gostaria de agradecer à _[IK Solution](https://www.ik.com.br/)_ e a toda a equipe pela oportunidade e pelo tempo dispensado na elaboração e avaliação deste teste técnico.

---

por _[Flávio Bianchetti - 2022](https://github.com/flavio-bianchetti)_.