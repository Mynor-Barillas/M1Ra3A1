let x;

function tabla_multiplicar() {
    x = parseInt(document.getElementById("num_1").value);
    document.getElementById("resultado").innerHTML = "Tabla del " + x + "<br>";
    if (x > 10 ) {
        for (let i = 0; i <= 10; i++) {
            document.getElementById("resultado").innerHTML += x + " x " + i + " = " + (x*i) + "<br>";
        }    
    } else {
        for (let i = 0; i <= 10; i++) {
            document.getElementById("resultado").innerHTML += x + " x " + i + " = " + (x*i) + "<br>";
        }    
    }
    
}


const btn = document.getElementById("btn_submit");
btn.addEventListener("click", tabla_multiplicar);