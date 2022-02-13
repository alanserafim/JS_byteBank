
/*
Ser autentical significa ter a método autenticar;
a.k.a
Duck Type
*/
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

}