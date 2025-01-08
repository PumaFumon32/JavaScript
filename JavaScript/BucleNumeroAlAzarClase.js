// Obtener número al azar
const MAX = 100;
let numeroAlazar = Math.floor(Math.random() * MAX);

let intentos = 0;
let numeroElegido = false;

for (let adivina = 0; adivina <= MAX; adivina++) {
    intentos++;
    
    if (adivina === numeroAlazar) {
        numeroElegido = true;  
        console.log("El número es " + numeroAlazar);
        console.log("Lo has adivinado en " + intentos + " intentos");
        break;
    }
}

