import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaRicardo = new ContaPoupanca(0, cliente1, 1001);
contaPoupancaRicardo.depositar(500)
contaPoupancaRicardo.sacar(100)

const contaSalarioRicardo = new ContaSalario (cliente1)

//console.log(contaSalarioRicardo);
//console.log(contaCorrenteRicardo);
//console.log(contaPoupancaRicardo);
