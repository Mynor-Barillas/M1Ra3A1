let numero = 0;
let suma = 0;

function perfecto(){
    numero = parseInt((document.getElementById("num_1").value));
    suma = 0;
    for (let index = 1; index < numero; index++) {
        if ((numero%index) == 0) {
            suma = suma + index;
        }
    }
    if ( suma == numero) {
        document.getElementById("resultado").innerHTML = "El numero " + numero +" es un numero perfecto";
    } else {
        document.getElementById("resultado").innerHTML = "El numero " + numero +" NO es un numero perfecto" ;
    }
    
}


const BTN = document.getElementById("btn_submit");
BTN.addEventListener("click", perfecto);