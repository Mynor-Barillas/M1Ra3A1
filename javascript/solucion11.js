let txt;

function cadena(){
    txt = parseInt((document.getElementById("text_1").value));
    document.getElementById("resultado").innerHTML = "Cadena de numeros anteriores a: " + txt + "<br>" ;
    if ( txt > 1) {
        for (let index = 1; index < txt; index++) {
            if (index < (txt - 1)) {
                document.getElementById("resultado").innerHTML += index + ", " ;    
            } else {
                document.getElementById("resultado").innerHTML += index  ;
            }
        }
    } else {
        document.getElementById("resultado").innerHTML += "No hay numeros anteriores al ingresado para realizar la cadena" ;
    }
    
}


const BTN = document.getElementById("btn_submit");
BTN.addEventListener("click", cadena);