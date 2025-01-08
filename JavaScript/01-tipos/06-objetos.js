// Juego, variable para cosas de juego
let nombre = "Red Dead Redemption 2";
let genero = "Accion";
let año = "2018";

// Un objeto que utilizare para poner datos de las variables que se llamaran "Propiedades"
let juego = {
   // Para darle un valor a una caracteristica de un objeto hay que poner un nombre a la caracteristica (Llave), poner ":" y luego la caracteristica (Valor)
   // Se pone coma al final para añadir mas caracteristicas
    nombre: "Red Dead Redemption 2", 
    genero: "Accion",
    año: "2018",
};
console.log(juego);
// Sirve para ver solo una propiedad del objeto
console.log(juego.nombre);
console.log(juego['nombre']);

// Para modificar propiedades
juego.año = 2017;
juego ['año'] = 2019;

// Para eliminar propiedades
delete juego.genero;
