# API do projeto Luppa

Projeto criado para o desafio da empresa Luppa, a arquitetura utilizada foi pensada no conceito SOLID com a utilização da estrutura de pastas seguindo o modelo package-by-feature.
Este repositório contém a API REST deste projeto.


## :rocket: Ferramentas
As tecnologias listadas abaixo foram utilizadas no projeto.
- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](http://knexjs.org)
- [Postgresql](https://www.postgresql.org)

## :information_source: Instruções para clone
### Configuração da API
```git
$ git clone https://github.com/GuiGonzalezv/luppa.git

$ npm install

$ Configure o arquivo `ormconfig.json` com as espeficações da sua conexão com o banco de dados

$ npm start
```
### Rotas base
#### Analise
- (GET) /analysis/  - Retorna todas análises disponiveis no banco
```
(JSON RETORNO)

[ 
    {
        "analysisId": 2,
        "fullName": "Teste23232",
        "cpf": "000.111.222-00",
        "analyzedAt": null,
        "documentos": [
            {
                "id": 5,
                "status": null,
                "src": "http://..."
            },
            {
                "id": 6,
                "status": null,
                "src": "http://..."
            },
            {
                "id": 7,
                "status": null,
                "src": "http://..."
            },
            {
                "id": 8,
                "status": null,
                "src": "http://..."
            }
        ]
    }
]
```

- (GET) /analysis/{id} - Retorna uma análise pelo id
```
(JSON RETORNO) 

{
    "analysisId": 1,
    "fullName": "Teste",
    "cpf": "000.111.222-00",
    "analyzedAt": "2021-03-08T04:30:00.136Z",
    "documentos": [
        {
            "id": 1,
            "status": "error",
            "src": "http://..."
        },
        {
            "id": 2,
            "status": "fraud",
            "src": "http://..."
        },
        {
            "id": 3,
            "status": "fraud",
            "src": "http://..."
        },
        {
            "id": 4,
            "status": "valid",
            "src": "http://..."
        }
    ]
}
```
- (POST) /analysis - Insere uma nova análise (Por não compreender as regras de negócio, fiquei com duvida se a aplicação fazia a busca pelo documento, ou se o mesmo era inserido para ser analisado, então optei por deixar como obrigatório a inserção de ao menos um documento)
```
(JSON ENTRADA)

{
  "fullName": "Teste23232",
  "cpf": "000.111.222-00",
  "documentos": [
      {
        "src": "http://..."
      }
    ]
}


(JSON SAÍDA)

{
    "analysisId": 2
}
``` 

- Por padrão o job assincrono é executado a cada um minuto na aplicação, varrendo o banco verificando quais documentos não tem verificação, e inserindo aleatoriamente

- Made by Guilherme Gonzalez Vieira

