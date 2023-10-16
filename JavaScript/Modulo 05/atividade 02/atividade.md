# RESPOSTA
## Objetos Concretos: &nbsp

### Carro &nbsp
Atributos: Marca,Modelo, Ano de fabricação 
&nbsp;
Métodos: Ligarr(), Desligar(), Acelerar(valorAceleracao) 
&nbsp;

### Ar-condicionado
Atributos: Marca, Modelo &nbsp
Métodos: ligar(), desligar(), aumentarTemperatura(valor), diminuirTemperatura(valor) &nbsp

##Objetos Abstratos: &nbsp
###Casa &nbsp
Atributos: endereco, numeroDeQuartos, area &nbsp
Métodos: ativarJardim(), ativarPiscina(), ativarGaragem(); &nbsp

###Figura Geometrica &nbsp
Atributos: Nome da figura, cor, area &nbsp
Métodos: calcularArea(), desenhar(), CalcularNumeroLados() &nbsp

## CÓDIGO EM JS &nbsp

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