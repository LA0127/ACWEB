/*/*
Las variables que se ocupan dentro de js son 3

VAR - variable que esta siendo sustituida
LET - variable protegida que solo funciona dentro de una funcion o declaracion o fragmento de codigo
CONST - variable constante en todo el documento 
*/
/*
if (true) {
    const x = "x";
    console.log(x);
}

var x ="Z";
console.log(x);

function suma(n1,n2){
    return n1 + n2;
}

console.log(`suma(n1,n2): ${suma(3,4)}` );



const sumaF = (n1, n2) => n1+n2;

const cFFlecha = n1 =>n1**2;

console.log(`cFFlecha(2): ${cFFlecha(7)}`);
*/



const RPerros = [
    "G Danes",
    "P Aleman",
    "Chihuahua",
    "Dalmata"
];
/*
for (let indice = 0; indice < RPerros.length; indice++) {
    console.log(RPerros[indice]);
    
}

for (const raza of RPerros) {
    console.log(raza);
}
*/

for (const indice in RPerros) {
    if (Object.hasOwnProperty.call(RPerros, indice)) {
        const element = RPerros[indice];
        
    }
}
RPerros.forEach((raza, indice, arregloOr) => console.log(raza));