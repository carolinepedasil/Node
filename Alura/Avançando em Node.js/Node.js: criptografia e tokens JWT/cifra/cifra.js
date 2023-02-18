const mensagemSecreta = "minhamensagemsecreta";
console.log(mensagemSecreta)

function cifraMensagem(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere + movimentos)
    })
    return mensagemCifrada.join('')
}

const mensagemCifrafa = cifraMensagem(mensagemSecreta, 3)
console.log(mensagemCifrafa)

function decifraMensagem(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere - movimentos)
    })
    return mensagemCifrada.join('')
}

const mensagemDecifrada = decifraMensagem(mensagemCifrafa, 3)
console.log(mensagemDecifrada)
