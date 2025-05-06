let numero = 0;
let cont = 0;

function cadena(){
    numero = parseInt((document.getElementById("num_1").value));
    cont = 0;
    document.getElementById("resultado").innerHTML = "Cadena de numeros primos anteriores a: " + numero + "<br>" ;
    if ( numero > 1) {
        for (let index = 1; index < numero; index++) {
            cont = 0;
            if (index < (numero - 1)) {
                for (let j = 1; j < index; j++) {
                    if ((index%j) == 0) {
                        cont++;
                    }
                }
                if (cont == 1) {
                    document.getElementById("resultado").innerHTML += index + " ";
                }
            } 
        }
    } else {
        document.getElementById("resultado").innerHTML += "No hay numeros anteriores al ingresado para realizar la cadena" ;
    }
    
}


const BTN = document.getElementById("btn_submit");
BTN.addEventListener("click", cadena);