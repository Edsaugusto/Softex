class Computer {
    getRAM() {}
    getHDD() {}
    getCPU() {}
    getType() {}
    toString() {}
}

class PC extends Computer {
    getRAM() {
        return 'RAM: 8GB';
    }
    getHDD() {
        return 'HDD: 1000GB';
    }
    getCPU() {
        return 'CPU: 2.4GHz';
    }
    getType() {
        return 'PC';
    }
    toString() {
        return this.getType() + ' -> ' + this.getRAM() + ', ' + this.getHDD() + ', ' + this.getCPU();
    }
}

class Server extends Computer {
    getRAM() {
        return 'RAM: 32GB';
    }
    getHDD() {
        return 'HDD: 10000GB';
    }
    getCPU() {
        return 'CPU: 3.4GHz';
    }
    getType() {
        return 'Server';
    }
    toString() {
        return this.getType() + ' -> ' + this.getRAM() + ', ' + this.getHDD() + ', ' + this.getCPU();
    }
}

class ComputerFactory {
    createComputer(type) {
        switch (type) {
            case 'PC':
                const pc = new PC();
                console.log(pc.toString());
                break;
            case 'Server':
                const server = new Server();
                console.log(server.toString())
                break;
            default:
                console.log('Invalid type of computer');
        }
    }
}

const computerFactory = new ComputerFactory();

computerFactory.createComputer('PC');
computerFactory.createComputer('Server');
computerFactory.createComputer('Notebook');