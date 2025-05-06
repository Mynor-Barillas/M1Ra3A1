let num;
let cont = 0;

function evaluar_primo() {
    num = parseInt(document.getElementById("primos").value);
    cont = 0;
    for (let index = 1; index < num; index++) {
        if ((num%index) == 0) {
            cont++;
        }
    }
    if (cont == 1) {
        document.getElementById("resultado").innerHTML = "El numero es primo";
    } else {
        document.getElementById("resultado").innerHTML = "El numero no es primo";
    }
}

const EVL = document.getElementById("generar");
EVL.addEventListener("click", evaluar_primo)