function imprimir(){
    console.log("Carnet: " + document.getElementById("carnet_usuario").value + "Nombre: " + document.getElementById("usuario_nombre").value);
    alert("Carnet: " + document.getElementById("carnet_usuario").value + "Nombre: " + document.getElementById("usuario_nombre").value);
    document.getElementById("resultado").innerHTML ="Carnet: " + document.getElementById("carnet_usuario").value + " Nombre: " + document.getElementById("usuario_nombre").value;
}

const btn = document.getElementById("btn_submit");
btn.addEventListener("click", imprimir)