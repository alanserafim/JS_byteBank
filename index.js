import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente("Ricardo", 13652698769);
const cliente2 = new Cliente("Alice", 88822266698);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 102)

contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.transferir(100, conta2)
contaCorrenteRicardo.sacar(50);

console.log(cliente1, contaCorrenteRicardo);
console.log(cliente2, conta2);
console.log(ContaCorrente.numeroDeContas);
