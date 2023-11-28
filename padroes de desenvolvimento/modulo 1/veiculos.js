class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {
        console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de rodas: ${this.numeroRodas}`);
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    // O método clone é herdado de Veiculo e não precisa ser redefinido aqui
}

class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, partidaEletrica) {
        super(modelo, marca, cor, numeroRodas);
        this.partidaEletrica = partidaEletrica;
    }

    // O método clone é herdado de Veiculo e não precisa ser redefinido aqui
}

class Aplicacao {
    constructor() {
        this.veiculos = [];
    }

    criarVeiculos() {
        this.veiculos.push(
            new Carro('Sedan', 'Sandero', 'Azul', 4, 4),
            new Moto('Street', 'Yamaha', 'Preto', 2, true),
            new Carro('SUV', 'Honda', 'Prata', 4, 5),
            new Moto('Custom', 'Harley-Davidson', 'Cinza', 2, false),
            new Carro('Esportivo', 'Honda', 'Vermelho', 4, 2),
            new Moto('Esportiva', 'Honda', 'Laranja', 2, true)
        );
    }

    clonarVeiculos() {
        return this.veiculos.map(veiculo => veiculo.clone());
    }
}

const app = new Aplicacao();
app.criarVeiculos();

const veiculosClonados = app.clonarVeiculos();

console.log('Veículos originais:');
app.veiculos.forEach(veiculo => veiculo.represent());
console.log('\nVeículos clonados:');
veiculosClonados.forEach(veiculo => veiculo.represent());
