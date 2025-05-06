let x, y, z = 0;

function buscar_pares(){
    x = parseInt(document.getElementById("num_1").value);
    y = parseInt(document.getElementById("num_2").value);
    document.getElementById("resultado").innerHTML = "Numeros pares entre " + x + " y " + y + "<br>";
    if (x > y) {
        for (let index = (y + 1); index < x; index++) {
            if ((index % 2) == 0) {
                z = z + 1;
                document.getElementById("resultado").innerHTML +=  index + "<br>";   
            }
        }
        if (z == 0) {
            document.getElementById("resultado").innerHTML +=  "No hay numeros pares entre los numeros seleccionados" + "<br>";
        }
    } else {
        for (let index = (x + 1); index < y; index++) {
            if ((index % 2) == 0) {
                z = z + 1;
                document.getElementById("resultado").innerHTML += index + "<br>";   
            }
        }
        if (z == 0) {
            document.getElementById("resultado").innerHTML +=  "No hay numeros pares entre los numeros seleccionados" + "<br>";
        }
    }
}


const btn = document.getElementById("btn_submit");
btn.addEventListener("click", buscar_pares);