const c1: Cronometro = new Cronometro();

console.log(c1.segundos); 
console.log( c1.emMinutos()); 

c1.avancar(-20);
console.log(c1.segundos);

c1.zerar();
console.log(c1.segundos); 

const c2: Cronometro= new Cronometro();
c2.avancar(45);
console.log(c1.segundos);
console.log(c2.segundos);