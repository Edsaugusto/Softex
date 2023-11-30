class ObservadorEditorTexto {
    update(evento, dados) {}
}

class EditorTexto {
    constructor() {
        this.linhas = [];
        this.observadores = [];
    }

    adicionarObservador(observador) {
        this.observadores.push(observador);
    }

    removerObservador(observador) {
        const indice = this.observadores.indexOf(observador);
        if (indice !== -1) {
            this.observadores.splice(indice, 1);
        }
    }

    notificar(evento, dados) {
        for (const observador of this.observadores) {
            observador.update(evento, dados);
        }
    }

    inserirLinha(numeroLinha, texto) {
        this.linhas.splice(numeroLinha, 0, texto);
        this.notificar('inserir', { numeroLinha, texto });
    }

    removerLinha(numeroLinha) {
        if (numeroLinha >= 0 && numeroLinha < this.linhas.length) {
            const linhaRemovida = this.linhas.splice(numeroLinha, 1);
            this.notificar('remover', { numeroLinha, texto: linhaRemovida[0] });
        }
    }

    iniciarEdicao() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log('Comece a editar o texto. Digite EOF para salvar e sair.');

        rl.on('line', (entrada) => {
            if (entrada.trim().toLowerCase() === 'eof') {
                rl.close();
                this.salvarEmArquivo();
            } else {
                this.inserirLinha(this.linhas.length, entrada);
            }
        });
    }

    salvarEmArquivo() {
        console.log('Salvando arquivo...');
        console.log('Conteúdo do arquivo:');
        console.log(this.linhas.join('\n'));
        this.notificar('salvar', this.linhas.join('\n'));
    }
}

const editorTexto = new EditorTexto();
const observadorEditor = new ObservadorEditorTexto();

editorTexto.adicionarObservador(observadorEditor);
editorTexto.iniciarEdicao();
