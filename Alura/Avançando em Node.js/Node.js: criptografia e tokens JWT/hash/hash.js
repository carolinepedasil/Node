import { createHash } from 'crypto';

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash("Uma string qualquer."));

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuário autenticado com sucesso!");
            return true;
        }
        console.log("Usuário ou senha incorretos.");
        return false;
    }
}

const usuario = new Usuario('Caroline', '12345');
console.log(usuario);

// Caso de sucesso
usuario.autentica('Caroline', '12345');

// Caso de insucesso
usuario.autentica('Carol', '12345');
usuario.autentica('Caroline', 'XXXXX');
