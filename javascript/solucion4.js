let num1;
function evaluar() {
    num1 = parseFloat(document.getElementById("num_1").value);
    if (num1<0) {
        document.getElementById("resultado").innerHTML="El numero es negativo";
    } else if (num1==0) {
        document.getElementById("resultado").innerHTML="El numero es neutro";
    } else {
        document.getElementById("resultado").innerHTML="El numero es positivo";
    } 
}

const btn = document.getElementById("btn_submit");
btn.addEventListener("click", evaluar);