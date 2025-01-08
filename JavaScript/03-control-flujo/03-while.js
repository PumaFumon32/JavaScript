// Cuales son Nº pares

// while(Condicion) { // Aqui es una condicion, se ejecutara el while hasta que dicha condicion se cumpla
//   Codigo         // Este sera el codigo que se ejecutara hasta que la condicion se cumpla
//}

// let i = 0;          // El valor inicial es 0
// while (i < 10){     // Esto especifica que mientras i sea menor a 10 hara lo escrito en el codigo
//    console.log(i); // Imprime el valor inicial (0)
//    i++;            // Antes de volver al inicio incrementara el valor de i, 
                      // Esto lo hara hasta que el valor de i llegue a 10, en ese momento parara
// }

// console.log('Fuera del while');

let a = 0;          
while (a < 10) {   
    if (a % 2 == 0) {
    console.log(a, 'Es par');
    }
    a++;  
} 
console.log('Fuera del while');  

// Es lo mismo que antes pero con un if, que imprimira el numero con un texto si es par