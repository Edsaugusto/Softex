const prompt = require("prompt-sync")();

class Pato {
  quack() {
    console.log("Qua! Qua!");
  }

  voar() {
    console.log("Voando");
  }
}

class Galinha {
  cacarejar() {
    console.log("Cocoricó!");
  }

  voarCurto() {
    console.log("Voando em curtos impulsos");
  }
}

class AdaptadorPatoParaGalinha extends Galinha {
  constructor(pato) {
    super();
    this._pato = pato;
  }

  cacarejar() {
    this._pato.quack();
  }

  voarCurto() {
    this._pato.voar();
  }
}

class AdaptadorPatoDemo {
  static main() {
    const patoOriginal = new Pato();
    const adaptadorPatoParaGalinha = new AdaptadorPatoParaGalinha(patoOriginal);

    console.log("Pato fazendo qua e voando:");
    patoOriginal.quack();
    patoOriginal.voar();

    console.log("\nAdaptador permitindo que o pato seja usado como galinha:");
    adaptadorPatoParaGalinha.cacarejar();
    adaptadorPatoParaGalinha.voarCurto();
  }
}

AdaptadorPatoDemo.main();
