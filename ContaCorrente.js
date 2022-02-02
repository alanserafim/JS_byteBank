export class ContaCorrente {
    //public attributes
    agencia;
    cliente;

    //private attributes
    _saldo = 0;

    //methods
    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        // early return
        if (valor < 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}
