let num1, num2, num3;

function evaluacion(){
    num1 = parseFloat(document.getElementById("num_1").value);
    num2 = parseFloat(document.getElementById("num_2").value);
    num3 = parseFloat(document.getElementById("num_3").value);

    if (num1>num2) {
        if (num1>num3) {
            if (num2>num3) {
                document.getElementById("resultado").innerHTML=" El numero mayor es: " + num1 + " el numero medio es: " + num2 + " el numero menor es: " + num3;
            } else {
                document.getElementById("resultado").innerHTML=" El numero mayor es: " + num1 + " el numero medio es: " + num3 + " el numero menor es: " + num2;
            }
        } else {
            document.getElementById("resultado").innerHTML=" El numero mayor es: " + num3 + " el numero medio es: " + num1 + " el numero menor es: " + num2;
        }
    } else if (num2>num3) {
        if (num3>num1) {
            document.getElementById("resultado").innerHTML=" El numero mayor es: " + num2 + " el numero medio es: " + num3 + " el numero menor es: " + num1;
        } else {
            document.getElementById("resultado").innerHTML=" El numero mayor es: " + num2 + " el numero medio es: " + num1 + " el numero menor es: " + num3;
        }
    } else {
        document.getElementById("resultado").innerHTML=" El numero mayor es: " + num3 + " el numero medio es: " + num2 + " el numero menor es: " + num1;
    }
    
}

const btn = document.getElementById("btn_submit");
btn.addEventListener("click", evaluacion);