/*Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. O programa deverá 
solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste 
número na Collection. Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!*/

import readlinesync = require("readline-sync");

console.log("Diga o número a ser verificado.");

const num: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

let index: number = 1;
let selecao = readlinesync.questionInt("Digite um numero de 1 a 10: ");

num.forEach((numeros) => {
  if (numeros == selecao) {
    index = num.indexOf(numeros);
  }
});
if (index > 0) {
  console.clear();
  console.log(`O número ${selecao} esta localizado na posição: ${index}`);
} else {
  console.clear;
  console.log(`O número ${selecao} foi encontrado não tá!`);
}
