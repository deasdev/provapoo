class Produto {
    constructor(nome, preco, categoria = "Indefinido") {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
}
const produto1 = new Produto("Smartphone", 2000, "Eletrônicos");

const produto2 = new Produto("Livro", 50);

console.log(produto2); 