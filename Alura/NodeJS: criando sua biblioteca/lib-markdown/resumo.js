const chalk = require('chalk');
const fs = require('fs');

console.log(chalk.blue('vamos começar!'));

//encadear métodos para colorir texto, cor de fundo e texto em negrito
console.log(chalk.blue.bgWhite.bold('Alura'));

//receber múltiplos argumentos
console.log(chalk.blue('curso', 'de', 'NodeJS'));

//métodos aninhados
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

// uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => { // _ -> ignora o primeiro parâmetro
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto1.md');

const paragrafo = 'Texto retornado por uma função';

function texto(string) {
    return string;
}

console.log(texto(paragrafo));

// Promises
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => chalk.green(console.log(texto)))
    .catch((erro) => trataErro(erro))
}

// Outra Forma:
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    // const linksExtraidos = texto.match(regex); // match -> string
    const linksExtraidos = regex.exec(texto); // exec -> regex
    console.log(linksExtraidos);
}

/*
    - As dependências (também chamadas de libs ou bibliotecas) são pacotes de código pronto que outras pessoas da comunidade disponibilizam, e nós as utilizamos para executar tarefas específicas no código sem termos que reescrever do zero;
    - Para deixar o código mais organizado podemos usar ferramentas de linting, além da importância delas para reforçar estilo e também para prever possíveis bugs.
    - Podemos utilizar a lib fs (File System, ou sistema de arquivos) nativa do JavaScript para que o programa consiga acessar e ler arquivos do computador;
    - Conseguimos capturar mensagens de erro enviadas pelo NodeJS quando algo no programa não sai como o esperado utilizando a palavra-chave throw, ou lançar;
    - As “promessas” são a forma que o JavaScript utiliza para trabalhar com código assíncrono e que podemos resolvê-las utilizando em conjunto as palavras-chave async e await ou o método .then().
    - Como utilizamos classes e grupos de expressões regulares para refinar a busca por estes padrões, além dos métodos que o JavaScript tem (por exemplo match e exec) para trazer os resultados e trabalhar com eles;
    - Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com module.exports e require();
    - Scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração package.json e utilizá-los para executar comandos no terminal.
*/
