class Pessoa {
    constructor(nome, idade, pai = null, mae = null) {
        this.nome = nome;
        this.idade = idade;
        this.pai = pai;
        this.mae = mae;
    }
    
    imprimirInformacoes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
        if (this.pai) {
            console.log(`Pai: ${this.pai.nome}`);
        }
        if (this.mae) {
            console.log(`Mãe: ${this.mae.nome}`);
        }
    }
}


const avô = new Pessoa("Jaime", 70);
const avó = new Pessoa("Maria", 68);
const pai = new Pessoa("Pedro", 45, avô, avó);
const mãe = new Pessoa("Andrea", 42, avô, avó);
const filho = new Pessoa("Yuri", 20, pai, mãe);

filho.imprimirInformacoes();