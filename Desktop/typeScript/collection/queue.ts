import ler = require("readline-sync");

import { Queue } from "./queueMetodos";
import { Stack } from "./stackMetodos";

const fila = new Queue<string>();

let continua: string = "";

do {
  console.log("####### Fila de atendimento ###############");
  console.log("### Digite 1 cadastrar usuario ############");
  console.log("### Digite 2 finalizar atendimento ########");
  console.log("### Digite 3 ver lista de usuario #########");
  console.log("### Digite 4 próximo da fila #########");

  let opcao = ler.questionInt(" -> ");

  switch (opcao) {
    case 1:
      fila.enqueue(ler.question("Nome: "));
      break;

    case 2:
      fila.dequeue();

      break;

    case 3:
      fila.printQueue();

      break;

    case 4:
      console.log(fila.peek());

      break;
    default:
      console.log("Opção inválida!");
  }

  continua = ler.question("Diga 's' para continuar: ").toLowerCase();
} while (continua === "s");
