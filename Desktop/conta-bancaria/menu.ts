import readlinesync = require("readline-sync");

import { colors } from "./src/util/colorS";

export function main() {

    let opcao: number;

    while (true) {
        console.log(colors.bg.black, colors.fg.yellow, "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DA PERIFERIA              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Número              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);

        console.log(colors.fg.greenstrong,"Escolha uma opção: ", colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,"\nBanco Da Periferia - De Nós Pra Nós!");
            sobre();
            console.log(colors.reset, "")
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.bluestrong,"\n\nCriar Conta\n\n", colors.reset);

                break;
            case 2:
                console.log(colors.fg.bluestrong,"\n\nListar todas as Contas\n\n", colors.reset);

                break;
            case 3:
                console.log(colors.fg.bluestrong,"\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                break;
            case 4:
                console.log(colors.fg.bluestrong,"\n\nAtualizar dados da Conta\n\n", colors.reset);

                break;
            case 5:
                console.log(colors.fg.bluestrong,"\n\nApagar uma Conta\n\n", colors.reset);

                break;
            case 6:
                console.log(colors.fg.bluestrong,"\n\nSaque\n\n", colors.reset);

                break;
            case 7:
                console.log(colors.fg.bluestrong,"\n\nDepósito\n\n", colors.reset);

                break;
            case 8:
                console.log(colors.fg.bluestrong,"\n\nTransferência entre Contas\n\n", colors.reset);

                break;
            default:
                console.log(colors.fg.bluestrong,"\nOpção Inválida!\n", colors.reset);

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Generation Brasil - generation@generation.org ");
    console.log("Karpa Tech - karpatech2025@gmail.com");
    console.log("https://github.com/KarpaTech");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nEntrar.");
    readlinesync.prompt();
}
main();
