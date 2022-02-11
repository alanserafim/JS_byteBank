import { Conta } from "./Conta.js"

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100)
    }
}