//1


class Cronometro {
    segundos: number;

    constructor () {
        this.segundos = 0;

    }

    avancar(valor: number): void {
        if (valor >= 0) {
            this.segundos += valor;
        }

    } 

    zerar(): void {
        this.segundos = 0;
    }

    emMinutos(): number {
        return this.segundos / 60;
    }

}

const c1: Cronometro = new Cronometro();

// console.log(c1.segundos); 
// console.log( c1.emMinutos()); 

// c1.avancar(-20);
// console.log(c1.segundos);

// c1.zerar();
// console.log(c1.segundos); 

// const c2: Cronometro= new Cronometro();
// c2.avancar(45);
// console.log(c1.segundos);
// console.log(c2.segundos);


//2
 
class Estacionamento {
    placa: string;
    horas: number;

    constructor (placa: string) {
        this.placa = placa;
        this.horas = 0;

    }

    registrarPermanencia(valor: number): void {
        if (valor >= 0) {
            this.horas += valor;
        }

    }

    calcularHorasCobradas(): number {

        if (this.horas === 0) {
            return 0;
        }
        // Math.ceil arredonda fração para próximo número inteiro
        return Math.ceil(this.horas);

    }

    calcularValor(): number {
        //salvar horas
        const horasCobradas = this.calcularHorasCobradas();
        
        if (horasCobradas === 0) {
            return 0;
        }
        
        //hora 1 + 5 a cada hora
        return 8.00 + (horasCobradas - 1) * 5.00;
    }

    emitirTicket(): string {

        const horasCobradas = this.calcularHorasCobradas();

        const valor = this.calcularValor();

        return `Placa: ${this.placa} | Horas cobradas: ${horasCobradas}h | Valor: R$ ${valor.toFixed(2)}`;
    }
}

// let carro1: Estacionamento = new Estacionamento("placa1");
// carro1.registrarPermanencia(0)
// console.log(carro1.calcularValor());

// carro1.registrarPermanencia(1)
// console.log(carro1.calcularValor());

// carro1.registrarPermanencia(1.2)
// console.log(carro1.calcularValor());

// carro1.registrarPermanencia(3.5)
// console.log(carro1.calcularValor());

// carro1.registrarPermanencia(-2);
// console.log(carro1.emitirTicket());

//3

// class Impressora {
//     paginas: number;
//     colorida: boolean;
//     totalPaginasImpressas: number;
//     valorTotalImpresso: number;

//     constructor() {
//         this.paginas = 0;
//         this.colorida = false;
//         this.totalPaginasImpressas = 0;
//         this.valorTotalImpresso = 0;
//     }

//     inicializarPedido(paginas: number, colorida: boolean): void {
//         // Aceita apenas páginas não negativas e inteiras
//         if (paginas >= 0) {
//             this.paginas = Math.floor(paginas);
//             this.colorida = colorida;
//         }
//     }

//     calcularValor(): number {
//         const precoPorPagina = this.colorida ? 0.80 : 0.25;
//         return this.paginas * precoPorPagina;
//     }

//     imprimir(): void {
//         const valorDoPedido = this.calcularValor();
//         this.totalPaginasImpressas += this.paginas;
//         this.valorTotalImpresso += valorDoPedido;
//     }
// }





//3

class Impressora {
    paginas: number;
    colorida: boolean;
    totalPaginasImpressas: number;
    valorTotalImpresso: number;

    constructor () {
        this.paginas = 0;
        this.colorida = false;
        this.totalPaginasImpressas = 0;
        this.valorTotalImpresso = 0;

    }

    inicializarPedido(pagina: number, colorida: boolean): void {
        if (pagina >= 0) {
            //arredonda
            this.paginas = Math.floor(pagina);
            this.colorida = colorida;
        }
    }

    calcularValor(): number {
        const precoPorPagina = this.colorida ? 0.80 : 0.25; //condicao ternaria
        return this.paginas * precoPorPagina;
    }

    imprimir(): void {
        //cria const
        const valorDoPedido = this.calcularValor();

        //adiciona
        this.totalPaginasImpressas += this.paginas;
        this.valorTotalImpresso += valorDoPedido;
    }
}

// const impressora1 = new Impressora();

// impressora1.inicializarPedido(10, false);
// impressora1.imprimir();

// impressora1.inicializarPedido(10, true);
// impressora1.imprimir();

// console.log(impressora1.totalPaginasImpressas);
// console.log(impressora1.valorTotalImpresso.toFixed(2));





//4

class ColecaoNumeros {
    numeros: number[];

    constructor () {
        this.numeros = [];

    }

    adicionar(numero: number): void {
      this.numeros.push(numero);

    }

    limpar(): void {
      this.numeros = []
    }

    quantidade(): number {
        //qtd
      return this.numeros.length;
    }

    somar(): number {
        if (this.numeros.length === 0) return 0;
        //.reduce((x, a) => x + a, 0)
        return this.numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    }


    calcularMedia(): number {
      const qtd = this.quantidade();
        if (qtd === 0) return 0;
        return this.somar() / qtd;
    }

    maior(): number | undefined {
        if (this.numeros.length === 0) return undefined;
        //max
        return Math.max(...this.numeros);
    }

    menor(): number | undefined {
        if (this.numeros.length === 0) return undefined;
        //min
        return Math.min(...this.numeros);
    }
}

const col = new ColecaoNumeros();

// Adicionar 10, 20 e 30
col.adicionar(10);
col.adicionar(20);
col.adicionar(30);


// console.log(col.quantidade()); 
// console.log(col.somar()); 
// console.log(col.calcularMedia()); 
// console.log(col.maior());
// console.log(col.menor()); 

col.limpar();
col.adicionar(-8);
col.adicionar(-3);
col.adicionar(-12);

// console.log("Novo Maior (-3):", col.maior());
// console.log("Novo Menor (-12):", col.menor());

// col.limpar();
// console.log(col.calcularMedia()); 
// console.log(col.maior()); 
// console.log(col.menor()); 


//5
class RegistroTemperaturas {
    temperaturas: number[];
    limiteAlerta: number;

    constructor () {
        this.temperaturas = [];
        this.limiteAlerta = 30;
    }

    adicionar(temperatura: number): void {
        this.temperaturas.push(temperatura);
    }

    alterarLimite(limite: number): void {
        this.limiteAlerta = limite;
    }

    listar(): string {
        let texto = "";
        this.temperaturas.forEach((temp, index) => {
            texto += `Dia ${index + 1}: ${temp}°C\n`;
        });
        return texto.trim();
    }

    acimaDoLimite(): number[] {
        //filter > condicao
        return this.temperaturas.filter(temp => temp > this.limiteAlerta);
    }

    converterParaFahrenheit(): number[] {
        return this.temperaturas.map(temp => temp * 1.8 + 32);
    }

    calcularMedia(): number {
        if (this.temperaturas.length === 0) return 0;
        // reduce > inicia-se com 0
        const soma = this.temperaturas.reduce((acc, curr) => acc + curr, 0);
        //somatorio dividido pelo tamanho
        return soma / this.temperaturas.length;
    }


}

const reg = new RegistroTemperaturas();
const dados = [28, 31, 29, 35, 32, 27, 30];


//para cada dado> adicionar
dados.forEach(t => reg.adicionar(t));


// console.log(reg.calcularMedia().toFixed(2) + "°C"); 
// console.log(reg.acimaDoLimite()); 
// console.log(reg.converterParaFahrenheit()[0] + "°F");

reg.alterarLimite(32);
// console.log(reg.acimaDoLimite()); 

// const regVazio = new RegistroTemperaturas();
// console.log(regVazio.listar() + '"');
// console.log(regVazio.acimaDoLimite()); 
// console.log(regVazio.converterParaFahrenheit());