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

## Null e Undefined

Undefined: Variável / atributo sem nenhum valor inicializdo/atribuido
Null: valor intencionalmente atribuido a uma variável/atributo

## Encapsulando com assessores com Getters e Setters

São **Assessores de acesso?**. Usados em conjunto com atribuitos privados, permitindo o acesso de entrada e/ou saída e impedindo a atribuição direta pelo atributo.

Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura.

ex: permite a atribuição de acordo com determinada condição e permite o acesso ao retorno como atributo de saída.

    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }


ex: permite somente o acesso a saída do saldo.

    _saldo = 0;

    get saldo(){
        return this._saldo;
    }


## Constructor / Construtores

Os construtores são utilizados para inicializar os atributo e junto com o encapsulamente não permitem a atribuição direta de valores.

EX:

    class Cliente{
        nome;
        _cpf;

        get cpf(){
            return this._cpf;
        }

        constructor(nome, cpf){
            this.nome = nome;
            this._cpf = cpf;
        }

    }

    const cliente2 = new Cliente("Alice", 88822266698);


Obs: para maiores informações pesquisar sobre gerenciadores de estado.


## Atributos Estáticos

Atributos que funcionam para toda a classe ao invés de funcionar para os atributos daquela classe.

EX: 

    
    class ContaCorrente {
    
    static numeroDeContas = 0;
    
    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    const cliente1 = new Cliente("Ricardo", 13652698769);
    const cliente2 = new Cliente("Alice", 88822266698);
    const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
    const conta2 = new ContaCorrente(cliente2, 102)

    console.log(ContaCorrente.numeroDeContas);


## Boas práticas OO

    Atributos devem ser inicializados dentro do construtor.


## Herança

Você pode reutilizar (para evitar repetição de código) os atributos e métodos de uma classe "mãe" em uma classe "filha" através das palavras reservadas extends e super.

        import { Conta } from "./Conta.js";

        export class ContaPoupanca extends Conta{

        constructor(saldoInicial, cliente, agencia){
            // super chama o construtor da classe mãe
            // super.metodo() -> chama o metodo da classe mãe
            super(saldoInicial, cliente, agencia);
        }


## Sobrescrever métodos / especializar código

Ao criar um método na classe filho com o mesmo nome da classe pai o método é sobrescrito.


## Classe abstrata

Classe pensada para não ser instanciada diretamente, e sim herdada por outras classes. 

    //Classe abstrata
    export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta){
           throw new Error("Você não deveria instaciar um objeto do tipo conta diretamente");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

Lançamos um erro, através do throw new Error() que para a execução do código na tentatica de instanciar um objeto da classe abstrata.


## Método abstrato

Quando o design do código entende que um método deve ser obrigatoriamente sobrescrito. Podemos criar um método abstrato na classe mãe.

Classe Mãe:

     sacar(valor){
        throw new Error("O método sacar da classe Conta é abstrato.")
    }

Classe filha

    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }

Caso o método seja chamado sem ser sobrescrito, lançamos um erro de execução.

## Polimorfismo

Podemos ter diferentes classes tratadas da mesma forma.

Criamos o método de autenticação e onseguimos verificar vários tipos de objetos diferentes, conseguimos fazer a autenticação de um diretor, de um gerente, de um cliente, tanto de classes que estão dentro de uma árvore de herança, onde todas elas têm o método autenticar, quanto de um objeto que não tem herança nenhuma, que é um objeto solto, que também tem o método autenticar().

SistemaAutenticacao.js

    export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (SistemaAutenticacao.EhAutenticavel(autenticavel)){
        return autenticavel.autenticar(senha);
        }
        return false;
    }

    static EhAutenticavel(autenticavel){
        //verifica se chave autenticar existe dentro do objeto autenticavel e se é uma função
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }

Funcionario.js (Classe mãe)

        autenticar(senha){
        return senha == this._senha;
    }

Cliente.js (Classe não relacionada a funcionario)

    Não possui método de autenticar, nem provaca erro de execução na tentativa do mesmo.


## Duck typing 

    "se anda como pato, nada como um pato e faz quack como um pato, então provavelmente é um pato"


Utilizado em liguagens dinamicamente tipadas o Duck typing (em português literal tipagem pato) é um estilo de tipagem em  que os métodos e propriedades de um objeto determinam a semântica válida, em vez de sua herança de uma classe particular ou implementação de uma interface explicita. O nome do conceito refere-se ao teste do pato, atribuído à James Whitcomb Riley, que pode ser expressa como se segue:


Quando eu vejo um pássaro que caminha como um pato, nada como um pato e grasna como um pato, eu chamo aquele pássaro de pato.

