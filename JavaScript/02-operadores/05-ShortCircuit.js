// Falsos o falsy
    // false
    // 0
    // ''
    // null
    // undefined
    // NaN
let nombre = '';
let userName = nombre || 'Invitado';
console.log(username);
// Esto es algo parecido a una pagina web en la que te puedes registrar con usuario, con la variable 'nombre' y la de 'userName'
// En la pagina web hara que si no estas registrado salga tu nombre como 'invitado', si lo estas, usara la de la variable 'nombre'
// Como la variable 'Nombre' esta vacia lo detecta como false, al usar el OR, como sale falso usara la otra opcion que es verdadero

// Como las 2 funciones salen true salen ambas, si hubiera una false, solo saldria 1
function fn1(){
    console.log('Soy la funcion 1');
    return true;
}

function fn2(){
    console.log('Soy la funcion 2');
    return true;
}

let x = fn1() && fn2();