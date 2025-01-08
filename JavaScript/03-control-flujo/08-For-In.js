// Sirve para iterar las propiedades de un objeto

let usuario = {
    Id: 1,
    Nombre: 'Adrian',
    Edad: 21,
};

for(let propiedad in usuario) {
    console.log(propiedad, usuario[propiedad] );
}