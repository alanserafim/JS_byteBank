import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaRicardo = new ContaPoupanca(0, cliente1, 1001);
contaPoupancaRicardo.depositar(500)
contaPoupancaRicardo.sacar(100)

console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);
