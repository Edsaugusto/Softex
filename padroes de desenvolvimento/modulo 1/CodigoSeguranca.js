class SistemaSeguranca {
    constructor() {
      this.senhaBaseSecreta = "senhaSuperSecreta";
    }
  
    static getInstance() {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    acessarBaseSecreta(senhaInserida) {
      if (this.verificarSenha(senhaInserida)) {
        console.log("Acesso concedido à Base Secreta. Bem-vindo, agente secreto!");
      } else {
        console.log("Acesso negado. Senha incorreta. Intruso detectado!");
      }
    }
  
    verificarSenha(senhaInserida) {
      return senhaInserida === this.senhaBaseSecreta;
    }
  }
  
  SistemaSeguranca.instancia = null;
  
  const sistemaSeguranca = SistemaSeguranca.getInstance();
  
  sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); // Acesso negado
  sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta"); // Acesso concedido
  