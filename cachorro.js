class Animal {
    fazerSom() {
        console.log("Som genérico de um animal");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Au Au");
    }
}

const meuCachorro = new Cachorro();

meuCachorro.fazerSom();