# RESPOSTA
##Objetos Concretos:

###Carro
Atributos: Marca,Modelo, Ano de fabricação
Métodos: Ligarr(), Desligar(), Acelerar(valorAceleracao)

###Ar-condicionado
Atributos: Marca, Modelo
Métodos: ligar(), desligar(), aumentarTemperatura(valor), diminuirTemperatura(valor)

##Objetos Abstratos:
###Casa
Atributos: endereco, numeroDeQuartos, area
Métodos: ativarJardim(), ativarPiscina(), ativarGaragem();

###Figura Geometrica
Atributos: Nome da figura, cor, area
Métodos: calcularArea(), desenhar(), CalcularNumeroLados()

## CÓDIGO EM JS

```JS
function ArCondicionado(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
  this.ligado = false;
  this.temperatura = 25;

  this.ligar = function() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`O ar-condicionado ${this.marca} ${this.modelo} foi ligado.`);
    } else {
      console.log("O ar-condicionado já está ligado.");
    }
  };

  this.desligar = function() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`O ar-condicionado ${this.marca} ${this.modelo} foi desligado.`);
    } else {
      console.log("O ar-condicionado já está desligado.");
    }
  };

  this.aumentarTemperatura = function(valor) {
    this.temperatura += valor;
    console.log(`Aumentando a temperatura para ${this.temperatura}°C.`);
  };

  this.diminuirTemperatura = function(valor) {
    this.temperatura -= valor;
    console.log(`Diminuindo a temperatura para ${this.temperatura}°C.`);
  };
}

// Criando uma instância de Ar-condicionado
const meuArCondicionado = new ArCondicionado("LG", "Inverter");

// Testando os métodos do Ar-condicionado
meuArCondicionado.ligar();
meuArCondicionado.aumentarTemperatura(3);
meuArCondicionado.diminuirTemperatura(2);
meuArCondicionado.desligar();
Neste código, criamos duas classes, uma para Carro e outra para ArCondicionado, cada uma com seus atributos e métodos. Em seguida, criamos instâncias dessas classes e testamos os métodos associados a cada objeto.


  },
};


//classe abstrata Casa
class Casa {
  constructor(endereco, numeroDeQuartos, area) {
    this.endereco = endereco;
    this.numeroDeQuartos = numeroDeQuartos;
    this.area = area;
    this.temJardim = false;
    this.temPiscina = false;
    this.temGaragem = false;

    this.ativarJardim = function() {
      this.temJardim = true;
      console.log("Jardim ativado.");
    };

    this.ativarPiscina = function() {
      this.temPiscina = true;
      console.log("Piscina ativada.");
    };

    this.ativarGaragem = function() {
      this.temGaragem = true;
      console.log("Garagem ativada.");
    };
  }
}

// Criando uma instância da classe Casa
const minhaCasa = new Casa("123 Main St", 4, 200);

// Ativando alguns recursos da casa
minhaCasa.ativarJardim();
minhaCasa.ativarPiscina();
minhaCasa.ativarGaragem();
```