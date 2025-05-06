
function convertir_binadec() {
    let operacion = 0;
    let binario = document.getElementById("num_dec").value;
    let potencia = binario.length;
    let conversion = 0;
    for (let digito of binario) {
        potencia-= 1;
        operacion= parseInt(digito)*(2**potencia);
        conversion+=operacion;
    }
    RESULT.innerHTML = binario + " en decimal es: " + conversion;
}

const RESULT = document.getElementById("resultado");
const BTN = document.getElementById("btn_submit");
BTN.addEventListener("click", convertir_binadec);