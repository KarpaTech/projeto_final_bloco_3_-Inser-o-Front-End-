/*Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado
 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set */

import readlinesync = require("readline-sync");

const nuM: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

for (let i = 0; i < 10; i++) {
  nuM.add(readlinesync.questionInt("Diga um número inteiro: "));
}
nuM.forEach((numero) => console.log(numero));
