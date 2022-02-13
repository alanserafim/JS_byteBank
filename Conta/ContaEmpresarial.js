import { Conta } from "./Conta.js"

export class ContaEmpresarial extends Conta{
        constructor(cliente){
        super(0, cliente, 2500)
    }
}