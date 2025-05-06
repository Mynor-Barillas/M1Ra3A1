let nota1, nota2, nota3, nota4, nota5, media, suma;
function sumas(){
    nota1 = parseFloat(document.getElementById("nota_1").value);
    nota2 = parseFloat(document.getElementById("nota_2").value);
    nota3 = parseFloat(document.getElementById("nota_3").value);
    nota4 = parseFloat(document.getElementById("nota_4").value);
    nota5 = parseFloat(document.getElementById("nota_5").value);
    suma = nota1 + nota2 + nota3 + nota4 + nota5;
}
function promedio(){
    sumas();
    media = (suma / 5);
    alert("El alumno: " + document.getElementById("persona_1").value + " obtuvo un promedio de: " + media + " en la materia: " + document.getElementById("materia_1").value)    
}

const btn = document.getElementById("btn_submit");
btn.addEventListener("click", promedio);