class Funcionario {
    constructor(id, nome, alocacao) {
      this.id = id;
      this.nome = nome;
      this.alocacao = alocacao;
    }
  
    calculaSalario() {
      return 2000;
    }
  
    info() {
      return `Funcionário: ${this.nome} (ID: ${this.id}) - Alocação: ${this.alocacao} - Salário: R$ ${this.calculaSalario()}`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(id, nome, alocacao, quantidadeDeSubordinados) {
      super(id, nome, alocacao);
      this.quantidadeDeSubordinados = quantidadeDeSubordinados;
    }
  
    calculaSalario() {
      return super.calculaSalario() * 1.4; 
    }
  }
  
  
  const funcionario1 = new Funcionario(1, "João Silva", "TI");
  const gerente1 = new Gerente(2, "Maria Santos", "RH", 10);
  
  console.log(funcionario1.info());
  console.log(gerente1.info());
  