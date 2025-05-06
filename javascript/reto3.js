let x, y, z = 0;
let cont = 0;

function buscar_primos(){
    x = parseInt(document.getElementById("num_1").value);
    y = parseInt(document.getElementById("num_2").value);
    document.getElementById("resultado").innerHTML = "Numeros primos entre " + x + " y " + y + "<br>";
    if (x > y) {
        for (let i = (y + 1); i < x; i++) {
            cont = 0;
            for (let j = 1; j < i; j++) {
                if ((i%j) == 0) {
                    cont++;
                }
            }
            if (cont == 1) {
                document.getElementById("resultado").innerHTML += i + "<br>";
            }
            if (cont == 1) {
                z++;
            }
        }
        if (z == 0 ) {
            document.getElementById("resultado").innerHTML +=  "No hay numeros primos entre los numeros seleccionados" + "<br>";
        }
        z = 0;
    } else {
        for (let i = (x + 1); i < y; i++) {
            cont = 0;
            if (i == 1) {
                cont = 0;
            } else {
                for (let j = 1; j < i; j++) {
                    if ((i%j) == 0) {
                        cont++;
                    }
                }
            }
            
            if (cont == 1) {
                document.getElementById("resultado").innerHTML += i + "<br>";
            }
            if (cont == 1) {
                z++;
            }
        }
        if (z == 0 ) {
            document.getElementById("resultado").innerHTML +=  "No hay numeros primos entre los numeros seleccionados" + "<br>";
        }
        z = 0;
    }
}


const btn = document.getElementById("btn_submit");
btn.addEventListener("click", buscar_primos);