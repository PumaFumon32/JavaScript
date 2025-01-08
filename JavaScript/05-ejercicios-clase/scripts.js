function ejercicio1() {

    let a = 10;
    while (a <= 20) {
        document.getElementById("resp1").innerHTML += a + " " + '<br>';
        a++;
    }
}

function ejercicio2() {
    let b = 2;
    while (b <= 20) {
        if (b % 2 == 0) {
            document.getElementById("resp2").innerHTML += b + '' + ' Es par. ' + '<br>';
        }
        b++;
    }
}

function ejercicio3() {
    console.log("inicio");
    let c = document.getElementById("number3").value;
    let c2 = 1;
    while (c2 <= 10) {
        document.getElementById("resp3").innerHTML += (c * c2) + "<br>";
        c2++;

    }

}