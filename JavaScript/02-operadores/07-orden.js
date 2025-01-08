let resultado = 8/2(2+2);
console.log(resultado);
// Esto nos saldra error, siempte que haya un numero delante de un parentesis tendremos que poner el signo de la multiplicacion

// Esta es la correcta
let resultado2 = 8/2*(2+2);
console.log(resultado2);

// Si por un casual me gustaria cambiar el orden de la operacion para que me de otro resultado hay que añadir parentesis
let resultado3 = 8/(2*(2+2));
console.log(resultado3);