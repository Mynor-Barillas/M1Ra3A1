let x, y, z = 0;

function mcd(){
    x = parseInt(document.getElementById("num_1").value);
    y = parseInt(document.getElementById("num_2").value);
    document.getElementById("resultado").innerHTML = "MCD de: " + x + " y " + y + "<br>";
    if (x > y) {
        for (let index = x; index >= 1; index--) {
            if (((x % index) == 0) && ((y % index) == 0)) {
                z = z + 1;
                document.getElementById("resultado").innerHTML +=  index + "<br>";
                console.log("EL MCD es: " + index);
                alert("EL MCD es: " + index);
                break;   
            }
        }
        if (z == 0) {
            document.getElementById("resultado").innerHTML +=  "No hay ningun divisor en comun" + "<br>";
        }
    } else {
        for (let index = y; index >= 1; index--) {
            if (((x % index) == 0) && ((y % index) == 0)) {
                z = z + 1;
                document.getElementById("resultado").innerHTML +=  index + "<br>";
                console.log("EL MCD es: " + index);
                alert("EL MCD es: " + index);
                break;   
            }
        }
        if (z == 0) {
            document.getElementById("resultado").innerHTML +=  "No hay ningun divisor en comun" + "<br>";
        }
    }
}


const btn = document.getElementById("btn_submit");
btn.addEventListener("click", mcd);