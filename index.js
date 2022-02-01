// ===========> Criando com moldes / classes
// ===========> classe tem atributos / propriedades / campo
// ===========> objetos filhos das classes são chamados de instâncias


// =========================> Classes

class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

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
}


// ========> Processamento

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 13652698769;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 20066688896;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
//Depósito
contaCorrenteRicardo.depositar(200);
//Saque
const valorSacado = contaCorrenteRicardo.sacar(50);
//log

console.log(valorSacado);
console.log(contaCorrenteRicardo)




const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.saldo = 1;
contaCorrenteAlice.agencia = 1002;


