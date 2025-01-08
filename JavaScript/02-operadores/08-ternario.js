// Vamos a tener una expresion, por ejemplo evaluar si un numero es mayor que otro
// Tenemos dos partes, si la expresion da true devolvera el valor de la 1º parte si da false devolvera el valor de la 2º
// Expresion ? 'Si es true' : 'Si es false'

let edad = 16;
let acceso = edad => 18 ? 'Ingreso Permitido' : 'Ingreso Denegado';
console.log(acceso);

// Hemos hecho la variable de edad en la que habra un valor, luego otra variable que comprobara si ese valor es mayor o igual a 18, si es el caso (True), te saldra el 1º mensaje si es incorrecto (False) te saldra el 2º mensaje
// Es muy parecido al If