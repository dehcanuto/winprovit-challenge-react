# Winprovit Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Build Link
This project can be viewed by this link below, made by netlify.

```
https://winprovit-challenge-react.netlify.app/
```

## Available Scripts

In the project directory, you can run:

### `yarn install`
Install dependencies of the app.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Challenge

Deves ter em atenção que o código será analisado por duas vias:
• Manualmente, através da análise da elegância da solução (algoritmo), técnica, o estilo de
programação, consistência, documentação, entre outros.
• Pela execução automática de um conjunto de testes unitários de modo a aferir a eficácia e
eficiência da solução, assim como do seu comportamento em condições de erro.
A solução apresentada deve possuir obrigatoriamente testes unitários e deve ser adequada para
cenários de alta disponibilidade e utilização intensiva.

### Enunciado

Usando os seguintes end-points da API:
• https://jsonplaceholder.typicode.com/users
• https://jsonplaceholder.typicode.com/posts

Constrói um objeto Letter que possui um método denominado get e que internamente:
A) Coordene os pedidos à API;
B) Faça error handling dos mesmos pedidos;
C) E que com base nas respostas da API construa e devolva um array de objetos com a seguinte estrutura:

```json
[{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": "Kulas Light, Apt. 556 - 92998-3874 Gwenborough",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": "Romaguera-Crona",
    "posts": [
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
            molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    ]
}]
```