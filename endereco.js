class Endereco {
    constructor(rua, numero) {
      this.rua = rua;
      this.numero = numero;
    }
  }
  
  class Pessoa {
    constructor(nome, endereco) {
      this.nome = nome;
      this.endereco = endereco;
    }
  
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Endereço: ${this.endereco.rua}, ${this.endereco.numero}`);
    }
  }
const meuEndereco = new Endereco("Esperança", 35);
const minhaPessoa = new Pessoa("Linky Taurus", meuEndereco);

minhaPessoa.exibirInformacoes(); 
