let i = 0;
let j = 0;
let tbl1;

tbl1 = document.getElementById("tabla1");
tbl1.style.display = "none";

function valores(){
    i = parseInt(document.getElementById("filas").value);
    j = parseInt(document.getElementById("columnas").value);

    return { i, j };
}

function mostrar_tabla1(){
    tbl1.style.display = "block";
}

function generar_tabla(){
    let { i, j } = valores();
    mostrar_tabla1();
    const body = document.getElementById("tbl_body");
    body.innerHTML="";
    for (let index = 0; index < i ; index++) {
        const filas = document.createElement("tr");
        for (let indox = 0; indox < j; indox++) {
            const columnas = document.createElement("td");
            columnas.innerText = indox + 1;
            filas.append(columnas);
        }
        body.append(filas);
    }
}

const BTN_C = document.getElementById("generar");
BTN_C.addEventListener("click", generar_tabla);