
/*
Ser autentical significa ter a método autenticar;
*/
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}