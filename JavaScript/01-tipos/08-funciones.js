// Procedimientos o ordenes de ejeccuciones
// Se crea la funcion poniendo "function", el nombre de ella, "()" y por ultimo "{}", ahi dentro pondremos el codigo de nuestra funcion
function saludar() {
    console.log('Hola mundo');
}

// Para que se ejecute una funcion hay que llamarla, esto se hace poniendo el nombre de la funcion y ()
saludar();

// Utilizamos el return para poder reutilizar el codigo, me devolvera el valor
function suma(){
    return 2 + 2;
}

let resultado = suma();
console.log(resultado)

// Tambein se puede nostrar una funcion de esta manera
console.log(suma());