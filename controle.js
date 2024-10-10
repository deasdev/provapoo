class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = true;
    }
  }
  
  class Pessoa {
    constructor(nome, matricula) {
      this.nome = nome;
      this.matricula = matricula;
    }
  }
  
  class Emprestimo {
    constructor(livro, pessoa, dataEmprestimo) {
      this.livro = livro;
      this.pessoa = pessoa;
      this.dataEmprestimo = dataEmprestimo;
      this.dataDevolucao = null; 
  
      this.livro.disponivel = false;
    }
  
    devolverLivro() {
      this.livro.disponivel = true;
      this.dataDevolucao = new Date();
    }
  }
  
    function gerarDataDevolucao(dias) {
    const data = new Date();
    data.setDate(data.getDate() + dias);
    return data;
  }
  
  const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");
  const pessoa1 = new Pessoa("João Silva", "123456");
  const emprestimo1 = new Emprestimo(livro1, pessoa1, new Date());
  emprestimo1.dataDevolucao = gerarDataDevolucao(10); 
  
  console.log (emprestimo1);