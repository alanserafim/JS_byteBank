import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 13652698769;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 20066688896;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente= cliente1;
//Depósito
contaCorrenteRicardo.depositar(200);
//Saque
const valorSacado = contaCorrenteRicardo.sacar(50);
//log
/* console.log(valorSacado);
console.log(contaCorrenteRicardo) */

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;


console.log("Antes da Operação:");
console.log("\n\n");
console.log(contaCorrenteRicardo);
console.log(conta2);

contaCorrenteRicardo.transferir(100, conta2)

console.log("\n\n");
console.log("Depois da Operação:");
console.log("\n\n");
console.log(contaCorrenteRicardo);
console.log(conta2);



