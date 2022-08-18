import chalk from 'chalk';

console.log(chalk.hex('#g4fa54').bgWhite('Trabalhando com NPM'));

let aluno = "Binho";
let idade = 20;

if (idade >= 18) {
    console.log(`${aluno} ${chalk.blue.bgWhite('está aprovado!')}`)
}else {
    console.log(`${aluno} ${chalk.white.bgRed ('está reprovado!')}`)
}

//para instalar o chalk utilizamos o npm install chalk

// Chalk é um dos muitos pacotes disponíveis no repositório npmjs.com