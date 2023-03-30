import fs, { fdatasyncSync } from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório!'));
}

// Assync/Await
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro);
    } 
}

// Promises com then ()
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)
// }

// Função que não envolve promessas
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     });
// }

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');
