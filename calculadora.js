function calcular(expressao) {
    const partes = expressao.split(' ');

    if (partes.length !== 3) {
        return "Expressão inválida. Use o formato: número operador número.";
    }

    const numero1 = parseFloat(partes[0]);
    const operador = partes[1];
    const numero2 = parseFloat(partes[2]);

    if (isNaN(numero1) || isNaN(numero2)) 
 {
        return "Entrada inválida: Os números devem ser válidos.";
    }

    if (!['+', '-', '*', '/'].includes(operador)) {
        return "Operador inválido. Use +, -, * ou /.";
    }

    switch (operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 === 0) {
                return  "Divisão por zero não permitida.";
            }
            return numero1 / numero2;
        default:
            return "Operador inválido.";
    }
}

while (true) {
    const expressao = prompt("Digite a expressão (ex: 5 + 3):");
    const resultado = calcular(expressao);

    if (typeof resultado === 'number') {
        console.log(`${expressao} = ${resultado}`);
    } else {
        console.log(resultado);
    }

    const continuar = prompt("Deseja continuar? (s/n): ");
    if (continuar.toLowerCase() !== 's') {
        break;
    }
}