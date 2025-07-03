/*Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário,
 que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

import readlinesync = require("readline-sync");

// Cria um array, do tipo string, chamado notas e inicializa
const cores: Array<string> = new Array<string>();
for (let i = 0; i < 5; i++){
    let cor = readlinesync.question ("Diga uma cor: ");
    // inseri o nome do array e 'push'para encrementar um ou mais elementos
        cores.push(cor);
    cores.sort();
}
    console.log('A ordem das cores é:');

    cores.forEach(cor => console.log(cor));

    //console.table(cores);
