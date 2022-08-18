import express from "express"; 


const app = express();

// Configurando uma rota
app.get('/', (req, res) => {
    // res.send('Eu amo Justin r');
    res.render('paginas/index');
} ); 
// rest é apoiado em verbos https

// Executando o servidor 
app.listen(8080, () => {
    console.log('Servidor express rodando...')
});


app.get('/sobre', (req, res) => {
    // res.send('Sobre');
    res.render('páginas/sobre')
});

app.get('/contato', (req, res) => {
    res.render('páginas/contato')
});

// A porta mais comum de se utilizar com node é a 3000

// instalando o nodemon -> atualiza o servidor automaticamente 
// npm install -g nodemon
// nodemon app.js - para iniciar 



// Preparar para receber arquivos HTML 
// Instalação do Ejs - npm install ejs

