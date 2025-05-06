let txt;
let chc;
let lng;

document.addEventListener("DOMContentLoaded", function () {
    let tbl = document.getElementById("tabla");
    tbl.style.display = "none";


    function valores() {
        txt = document.getElementById("text_1").value;
        chc = txt.replace(/\s/g, "").split("");
        lng = chc.length;

        return { chc, lng };
    }

    function mostrar_tabla() {
        tbl.style.display = "block";
    }

    function primer_digito() {
        let { chc } = valores();
        mostrar_tabla();
        document.getElementById("primer").innerHTML = chc[0];
    }

    function caracter() {
        let { chc } = valores();
        mostrar_tabla();
        document.getElementById("caracter").innerHTML = "[ " + chc.join(", ") + " ]";
    }

    function ultimo_digito() {
        let { chc, lng } = valores();
        mostrar_tabla();
        document.getElementById("ultimo").innerHTML = chc[(lng - 1)];
    }

    const BTN_P = document.getElementById("btn_primer");
    BTN_P.addEventListener("click", primer_digito);
    const BTN_C = document.getElementById("btn_caracter");
    BTN_C.addEventListener("click", caracter);
    const BTN_U = document.getElementById("btn_ultimo");
    BTN_U.addEventListener("click", ultimo_digito);
});