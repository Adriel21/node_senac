import { render } from "ejs";
import express  from "express";

const app = express();

//Configurando as views/ Motor de visualização com EJS
app.set('view engine', 'ejs'); // Para renderizar o ejs que 

// Configurando as rotas

app.get('/', (req, res) => {
    // res.send('Transformar em Nodemon')
    let bandas = ['Nirvana', 'Guns', 'Justin Bieber'];
    res.render('index', {bandas});
})

app.get('/sobre', (req, res) => {
    res.render('sobre');
})

app.get('/contato', (req, res) => {
    res.render('contato');
})



// Configurando Servidor
app.listen(8080, () => {
    console.log('Servidor Express rodando...') // Arrow function para exibir mensagem no console sobre a disponibilidade do servidor
})
