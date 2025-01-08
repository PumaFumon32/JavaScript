// Le podemos dar un argumento a una funcion para que sea mas flexible
function suma(a, b){
    console.log(arguments); //Sirve para aplicar todos los argumentos en la funcion
    return a + b;

}
// Tienes que hacer una variable y poner el nombre de la funcion y dentro los valores para asignarlos como argumentos
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);

