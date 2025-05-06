let numero = 0;
let acumulador= "";

function convertir_decabin(){
    numero = parseInt(document.getElementById("num_dec").value);
    acumulador="";
    while (numero > 0) {
        acumulador = (numero%2) + acumulador ;
        numero = parseInt(numero/2);
    }
    numero = parseInt(document.getElementById("num_dec").value);
    document.getElementById("resultado").innerHTML = numero + " a decimal es: " + acumulador;
}

const RESULT = document.getElementById("resultado");
const BTN = document.getElementById("btn_submit");
BTN.addEventListener("click", convertir_decabin);