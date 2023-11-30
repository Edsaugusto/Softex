const prompt = require("prompt-sync")();

class EstrategiaOperacional {
  executar(num1, num2) {}
}

class OperacaoSoma extends EstrategiaOperacional {
  executar(num1, num2) {
    return num1 + num2;
  }
}

class OperacaoSubtracao extends EstrategiaOperacional {
  executar(num1, num2) {
    return num1 - num2;
  }
}

class OperacaoMultiplicacao extends EstrategiaOperacional {
  executar(num1, num2) {
    return num1 * num2;
  }
}

class Calculadora {
  constructor(estrategiaOperacional) {
    this.estrategiaOperacional = estrategiaOperacional;
  }

  setEstrategiaOperacional(estrategiaOperacional) {
    this.estrategiaOperacional = estrategiaOperacional;
  }

  calcular(num1, num2) {
    return this.estrategiaOperacional.executar(num1, num2);
  }
}

function obterEntradaUsuario(mensagem) {
  return parseInt(prompt(mensagem));
}

function obterEstrategiaOperacional(operador) {
  const operacoes = {
    '+': new OperacaoSoma(),
    '-': new OperacaoSubtracao(),
    '*': new OperacaoMultiplicacao(),
  };

  return operacoes[operador];
}

async function principal() {
  const primeiroNumero = obterEntradaUsuario("Digite o primeiro número:");
  const segundoNumero = obterEntradaUsuario("Digite o segundo número:");
  const operador = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");

  const estrategia = obterEstrategiaOperacional(operador);

  if (!estrategia) {
    console.log("Operação inválida");
    process.exit(1);
  }

  const calculadora = new Calculadora(estrategia);
  const resultado = calculadora.calcular(primeiroNumero, segundoNumero);

  console.log(`Resultado da operação: ${resultado}`);
}

principal();
