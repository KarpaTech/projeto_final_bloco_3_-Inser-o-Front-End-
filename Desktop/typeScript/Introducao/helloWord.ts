//console.log("Hello Word!")

//metodo: readlinesync.question('Pergunta')
//Faz a leitura, via teclado, de uma cadeia de caracteres simples ou composta, ou seja, string.
//A pergunta será a mensagem que será exibida para o usuário, informando qual a informação ele deve digitar.

/*metodo: readlinesync.keyIn('Pergunta')
Faz a leitura, via teclado, de um único caractere simples, exceto o caractere espaço em branco.
A pergunta será a mensagem que será exibida para o usuário, informando qual a informação ele deve digitar.

metodo: readlinesync.questionInt('Pergunta')
Faz a leitura, via teclado, de um número inteiro.
A pergunta será a mensagem que será exibida para o usuário, informando qual a informação ele deve digitar.

metodo:readlinesync.questionFloat('Pergunta')
Faz a leitura, via teclado, de um número em notação de ponto flutuante (usado para receber valores reais).
A pergunta será a mensagem que será exibida para o usuário, informando qual a informação ele deve digitar.

metodo:readlinesync.keyInYNStrict('Pergunta')
Faz a leitura, via teclado, de um valor boolean, representado pelos valores y e n, onde true é equivalente a y e false é equivalente a n.
A pergunta será a mensagem que será exibida para o usuário, informando qual a informação ele deve digitar.

*/

import readlinesync = require("readline-sync");

let quantidade: number;
let altura: number;
let tipo: string;
let resposta: boolean;
let palavra: string;

quantidade = readlinesync.questionInt("\nDigite um valor do tipo Inteiro: ", {limitMessage: 'Digite um numero inteiro'});
console.log("O valor inteiro digitado foi: " + quantidade);

altura = readlinesync.questionFloat("\nDigite um valor do tipo decimal: ", {limitMessage: 'Digite um numero decimal'});
console.log("O valor decimal digitado foi: " + altura);

tipo = readlinesync.keyIn("\nDigite um valor do tipo Char - um único caractere: ");
console.log("\nO valor char digitado foi: " + tipo);

resposta = readlinesync.keyInYNStrict("\nDigite um valor do tipo Boolean: ");
console.log("O valor boolean digitado foi: " + resposta);

palavra = readlinesync.question("\nDigite um valor do tipo string: ");
console.log("O valor string digitado foi: " + palavra);
