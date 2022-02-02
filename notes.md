# Orientação a Objeto em JavaScript

## Classes em JS

Criação de classes através da palavra reservada class:

    class Cliente{
        propriedade1;
        propriedade2;
        propriedade3;
    }

    const cliente1 = new Cliente();

    cliente1.propriedade1 = "string";
    cliente1.propriedade2 = numero;
    cliente1.propriedade3 = boleano;

## Funções dentro das classes são conhecidas como métodos

    class ContaCorrente {
        agencia;
        saldo;
       sacar(valor){
            if (this.saldo >= valor) {
                this.saldo -= valor;
            }
    }


Chamando o método:

    contaCorrenteRicardo.sacar(50);


## Atributos e metódos privados

**Padrão da comunidade JavaScript:** declarar a "variável" com underline no início.

    class AlgumaCoisa{
        _variavel;
    }

Toda vez que encontrarmos atributos e métodos declarados dessa forma, não devemos alterá-los.<br><br>


**Sugestão em implementação:** declarar a "variável" com hashtag no início.
    
     class AlgumaCoisa{
        #variavel = 0;
    }

O método/atributo fica inacessível fora da classe.



## Return e early return

Atribuimos o return para retornar um valor do método.

Caso queira adicionar o valor de um parâmetro/variável do método a outra variável é retornando algum deles.

    const valorSacado = contaCorrenteRicardo.sacar(50);

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

O early return é uma estratégia de verificação do que não queremos logo no início do código. Dessa forma evitamos entrar em if encadeados para verificação de multiplos condicionais. 

    depositar(valor){
        if (valor < 0) return;
        this._saldo += valor;
    }


## Modularizando o código

Criando Classes em arquivos separados, e código centralizado na index.js

* Criar arquivo com nome da classe com letra Maiuscula.

* Colocar a palavra export antes do nome da Classe.
    
    export class Cliente{
        nome;
        cpf;
    }

* Importar a classe na index.js

    import {Cliente} from "./Cliente.js"
    import {ContaCorrente} from "./ContaCorrente.js"

* Criar o package.json com as configuração do workspace

        No terminal: npm init

* adicionar o type: module no package.json

        {
        "name": "bytebank",
        "version": "1.0.0",
        "description": "Projeto do bytebank",
        "main": "index.js",
        "type": "module"
        }

Atribuindo um objeto como atributo de outro objeto. 

    É possível, porém deve ser evitado porque as alterações na classe refletirão no objeto. 

 Recapitulando: quando passamos como parâmetro de um método os tipos primitivos, também chamados de tipos de valor, estamos na verdade copiando aquela informação para utilizá-la; já com tipos de referência, como objetos de classes, estamos trabalhando com a informação direta, e todas as alterações serão refletidas no objeto original.


<a href="https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239#:~:text=JavaScript's%20memory%20model%3A%20the%20call%20stack%20and%20the%20heap,-For%20the%20purposes&text=The%20call%20stack%20is%20where,in%20addition%20to%20function%20calls).&text=The%20heap%20is%20where%20non,perfect%20for%20arrays%20and%20objects.">Gerenciamento de memória no JS - LINK</a>

