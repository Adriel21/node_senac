// Lidando com módulos nativos do próprio Node
import http from 'http';
// Permite que faça ou manipule requisições http

import fs from 'fs/promises'; // JS Assíncrono (operações independentes, ocorrem em paralelo). FS = File System.

// http.createServer(function(req, res){
// req = request, res = response. O front end faz um request e o back end devolve um response para o front end
    // res.end('Devpleno.com');
// }).listen(3000);
// Essa função é uma função anônima e executada de forma assíncrona, ou seja, só será executada quando um evento acontecer - quando um cliente, browser ou front end gerar requisição. 

// ip <<<< as portas diferenciam quem irá receber as requisições - que uma máquina tenha mais de um serviço

// require e response, parâmetros obrigatórios
const monitorRequisicao = (requisicao, resposta) => { //Arrow Function
    resposta.writeHead(200, {"Content-Type":"text/html; charset=utf8"} );

    switch(requisicao.url) {
            case '/':
            fs.readFile("paginas/index.html").then(conteudo => resposta.end(conteudo) );
            break;

            case '/sobre':
                fs.readFile("paginas/sobre.html").then(conteudo => resposta.end(conteudo));
            break;

            default:
                resposta.writeHead(404);
                fs.readFile("paginas/404.html").then(conteudo => resposta.end(conteudo));
            break;
    }
}
  /* Criando um servidor baseado no módulo HTTP que importamos e monitorando ele */

const servidor = http.createServer(monitorRequisicao);

//iniciando o servidor

servidor.listen(8080, ()=>{
    console.log("Servidor ta jóia...");
});

// Anotações: Rotas: são o http e endepoints são o final da URL