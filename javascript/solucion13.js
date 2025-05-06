let txt1;
let txt2;
let tbl1;
let tbl2;
let spt1;
let spt2;
let count1;
let count2;
let cnc;
let lng;

tbl1 = document.getElementById("tabla1");
tbl2 = document.getElementById("tabla2");

tbl1.style.display = "none";
tbl2.style.display = "none";

function valores(){
    txt1 = document.getElementById("text_1").value;
    txt2 = document.getElementById("text_2").value;
    spt1 = txt1.toLowerCase().replace(/\s/g, "").split("");
    spt2 = txt2.toLowerCase().replace(/\s/g, "").split("");
    count1 = spt1.filter(word => word === "s").length;
    count2 = spt2.filter(word => word === "s").length;
    cnc = spt1.concat(spt2);
    lng = cnc.length;

    return { txt1, txt2, spt1, spt2, count1, count2, cnc, lng };
}

function mostrar_tabla1(){
    tbl1.style.display = "block";
}

function mostrar_tabla2(){
    tbl2.style.display = "block";
}

function cantidad_caracter(){
    let { cnc, lng } = valores();
    document.getElementById("chc_ttl").innerHTML = "Los dos textos tienen una cantitad total de: " + lng + " caracteres: " + "<br>" +  "[ " + cnc.join(", ") + " ]";
}

function letra_s(){
    let { count1, count2 } = valores();
    mostrar_tabla1();
    document.getElementById("no1").innerHTML = "El numero total de letras s en el texto es de: " + count1;
    document.getElementById("no2").innerHTML = "El numero total de letras s en el texto es de: " + count2;
    document.getElementById("ttl").innerHTML = "El numero total de letras s entre los dos textos es de: " + (count2+count1);
}

function digitos_pares(){
    let { cnc, lng } = valores();
    mostrar_tabla2();
    let html ="";
    let contador=0;
    for (let index = 0; index < lng; index++) {
        if ((index%2 == 0)) {
            contador++;
            html += `<tr><td>${contador}</td><td>${cnc[index]}</td></tr>`;
        }
    }
    document.getElementById("tbl_body").innerHTML = html;
}

const BTN_C = document.getElementById("cnt_chc");
BTN_C.addEventListener("click", cantidad_caracter);

const BTN_L = document.getElementById("ltr_s");
BTN_L.addEventListener("click", letra_s);

const BTN_P = document.getElementById("par_digt");
BTN_P.addEventListener("click", digitos_pares);
