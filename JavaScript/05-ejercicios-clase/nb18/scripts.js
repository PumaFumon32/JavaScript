function ej1_while() {
    let numero = -10;
    let res = "Con do while:" + "<br>";
    do{
       res = res + numero + " ";
        numero++;
    }while(numero<11);
    document.getElementById("resp1").innerHTML = res;
}

 function ej1_for(){
   let res = "Con for:" + "<br>";
   for(let numero2=-10; numero2<=10; numero2++){
    res= res + numero2 + " ";
    document.getElementById("resp1").innerHTML = res;
   }}

function ej2_dowhile(){
    let numero = 10;
    let res = "Con do while:" + "<br>";
    do{
        res = res + numero + " ";
        numero--;
    }while(numero>=0)
        document.getElementById("resp2").innerHTML = res;
}

function ej2_for(){
   let res = "Con for:" + "<br>"
    for(numero2 = 10; numero2 >= 0; numero2--){
        res = res + numero2 + " ";
        document.getElementById("resp2").innerHTML = res;
    }
}

function ej3(){
    let multiplo = 0;
    let suma = 0;
    document.getElementById("resp3").innerHTML = "";
    for(let numero = 1 ; (numero * 3)<=20; numero++){
        multiplo = numero * 3;
        document.getElementById("resp3").innerHTML += multiplo + " ";
        suma = suma + multiplo;
    }
    document.getElementById("resp3").innerHTML += "<br> La suma de los multiplos es: " + suma;
}

function ej4(){
    let numero1 = parseInt(document.getElementById("n1"));
    let numero2 = parseInt(document.getElementById("n2"));
do {
    
     
}
}