class ContaBancaria {
    constructor(titular) {
        this._titular = titular;
        this._saldo = 0;
    }

    get titular() {
        return this._titular;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this._saldo}`);
        } else {
            console.log("Valor  de depósito inválido.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado.  Saldo atual: R$ ${this._saldo}`);
        } else {
            console.log("Saldo insuficiente ou valor  de saque inválido.");
        }
    }
}

const minhaConta = new ContaBancaria("Andrea Souza");

minhaConta.depositar(1000);
minhaConta.sacar(500);
console.log("Saldo atual:", minhaConta.saldo);
console.log("Titular da conta:", minhaConta.titular);