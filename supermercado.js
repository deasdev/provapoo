class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

class ItemPedido {
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
}

class Pedido {
    constructor(data,formaPagamento) {
        this.data = data;
        this.formaPagamento = formaPagamento;
        this.itens = [];
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    calcularTotal() {
        let total = 0;
        this.itens.forEach(item => {
            total += item.produto.preco * item.quantidade;
        });
        return total;
    }
}

class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
}
const maça = new Produto("Maçã", 2.50, 100);
const banana = new Produto("Banana", 1.99, 50);
const itemMaça = new ItemPedido(banana,10);
const pedido1 = new Pedido(new Date(), "dinheiro");
pedido1.adicionarItem(itemMaça);
const cliente1 = new Cliente("João Silva", "Rua dos Bobos, 0");

console.log("Total do pedido:", pedido1.calcularTotal());