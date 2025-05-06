let numero = 0;
let x1 = 0;
let x2 = 0;
let x3 = 0;
let cont = 0;

function cadena(){
    numero = parseInt((document.getElementById("num_1").value));
    cont = 0;
    x2=x1 +1;
    document.getElementById("resultado").innerHTML = "Cadena de fibonacci  anterior a: " + numero + "<br>" ;
    document.getElementById("resultado").innerHTML += x1 + "<br>";
    document.getElementById("resultado").innerHTML += x2 + "<br>";
    if ( numero > 1) {
        while ((x2+x1) < numero) {
            x3 = x2;
            x2= x1 + x2;
            x1= x3;
            document.getElementById("resultado").innerHTML += x2 + "<br>";
        }
    } else {
        document.getElementById("resultado").innerHTML += "No hay numeros anteriores al ingresado para realizar la cadena" ;
    }
    
}


const BTN = document.getElementById("btn_submit");
BTN.addEventListener("click", cadena);