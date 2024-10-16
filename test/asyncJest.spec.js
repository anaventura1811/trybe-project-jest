// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    await answerPhone(true).then((data) => expect(data).toBe('Oi!'));
  });

  test('ocupado', async () => {
    await expect(answerPhone(false))
      .rejects.toThrowError(new Error('Infelizmente não podemos atender...'));
  });
});

// Link para documentação do Jest sobre testes assíncronos: https://jestjs.io/pt-BR/docs/asynchronous
// Link para documentação do toThrowError/ toThrow: https://jestjs.io/pt-BR/docs/expect#tothrowerror
