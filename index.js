import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor ("Rodrigo", 10000, 12345678910);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Alan", 2500, 12345678911);
gerente.cadastrarSenha("123456");

const cliente = new Cliente("Lais", 78945612379, "123456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123456")

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);