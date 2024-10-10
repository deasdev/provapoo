class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) 
 {
        this.contatos.push(contato); 

    }

    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome === nome);
    }

    buscarContato(nome) {
        return this.contatos.find(contato => contato.nome === nome);
    }

    listarContatos() {
        console.log("Lista de Contatos:");
        this.contatos.forEach(contato => {
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        });
    }
}


const contato1 = new Contato("João Silva", "(11) 98765-4321", "joao@email.com");
const contato2 = new Contato("Maria Santos", "(21) 12345-6789", "maria@email.com");
const minhaAgenda = new Agenda();
minhaAgenda.adicionarContato(contato1);
minhaAgenda.adicionarContato(contato2);
minhaAgenda.listarContatos();

const contatoEncontrado = minhaAgenda.buscarContato("João Silva");
console.log(contatoEncontrado);

minhaAgenda.removerContato("Maria Santos");
minhaAgenda.listarContatos();