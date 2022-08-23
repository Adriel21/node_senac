import express from "express"; 


const app = express();
app.set('view engine', 'ejs'); // configurando o renderizador a view engine com EJS

// Configurando uma rota
app.get('/', (req, res) => {
    // res.send('Eu amo Justin r');
    const bandas = ["alo", "Zimbra", "Justim Timberlake"];
    res.render('paginas/index', {bandas});
} ); 
// rest é apoiado em verbos https

// Executando o servidor 
app.listen(3000, () => {
    console.log('Servidor express rodando...')
});


app.get('/sobre', (req, res) => {
    // res.send('Sobre');
    res.render('paginas/sobre')
});

app.get('/contato', (req, res) => {
    res.render('paginas/contato')
});

// A porta mais comum de se utilizar com node é a 3000

// instalando o nodemon -> atualiza o servidor automaticamente 
// npm install -g nodemon
// nodemon app.js - para iniciar 



// Preparar para receber arquivos HTML 
// Instalação do Ejs - npm install ejs

