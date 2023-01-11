const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornnar um array com resultados', async () => {
        const resultado = await pegaArquivo('/Users/Caroline/lib-markdown/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('/Users/Caroline/lib-markdown/test/arquivos/texto1_semlinks.md')
        expect(resultado).toBe('não há links')
    })
})
