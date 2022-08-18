import fetch from 'node-fetch';
// Devemos instalar o node-fetch via NPM porque ele não é nativo do back end js
// fetch(url).then - o fetch é padrão do javascript mas não é padrão no front-end

const url = `https://viacep.com.br/ws/07956010/json/`;

// Conectando com o endpoint da api(final da url)

fetch(url)
    //Retornar resposta como JSON(formato de dados para troca de dados)
    .then(resposta => resposta.json())

    // Exibir a resposta no console.
    .then(dados => console.log(dados));


    // fetch(url).then(resposta => resposta.json()).then(dados => console.log(dados));
    // pego a url - então pego a resposta e transformo em dados .json / pego esses dados e exibo no console.log