const prompt = require("prompt-sync")();

class Sanduiche {
  calcularCusto() {
    throw new Error('Método não implementado');
  }

  obterDescricao() {
    throw new Error('Método não implementado');
  }
}

class FrangoAssado extends Sanduiche {
  calcularCusto() {
    return 4.50;
  }

  obterDescricao() {
    return 'Sanduíche de Frango Assado';
  }
}

class ComPepperoni extends Sanduiche {
  constructor(sanduiche) {
    super();
    this._sanduiche = sanduiche;
  }

  calcularCusto() {
    return this._sanduiche.calcularCusto() + 0.99;
  }

  obterDescricao() {
    return this._sanduiche.obterDescricao() + ', Pepperoni';
  }
}

class ComQueijoMussarelaRalado extends Sanduiche {
  constructor(sanduiche) {
    super();
    this._sanduiche = sanduiche;
  }

  calcularCusto() {
    return this._sanduiche.calcularCusto() + 2.00;
  }

  obterDescricao() {
    return this._sanduiche.obterDescricao() + ', Queijo Mussarela Ralado';
  }
}

const sanduicheFrangoAssado = new FrangoAssado();

const sanduicheComPepperoni = new ComPepperoni(sanduicheFrangoAssado);

const sanduicheFinal = new ComQueijoMussarelaRalado(sanduicheComPepperoni);

console.log(`${sanduicheFinal.obterDescricao()} custa $${sanduicheFinal.calcularCusto().toFixed(2)}.`);
