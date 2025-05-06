let txt1;
let spt1;
let tbl1;
let acumulador_a = 0;
let acumulador_e = 0;
let acumulador_i = 0;
let acumulador_o = 0;
let acumulador_u = 0;
let total = 0;

tbl1 = document.getElementById("tabla1");

tbl1.style.display = "none";

function valores(){
    txt1 = document.getElementById("text_1").value;
    spt1 = txt1.toLowerCase().replace(/\s/g, "").split("");
    return { txt1, spt1 };
}

function mostrar_tabla1(){
    tbl1.style.display = "block";
}

function cantidad_vocales(){
    let { spt1 } = valores();
    mostrar_tabla1();
    for (let index = 0; index < spt1.length; index++) {
        switch (spt1[index]) {
            case "a":
                acumulador_a++;
                break;
            case "e":
                acumulador_e++;
                break;
            case "i":
                acumulador_i++;
                break;
            case "o":
                acumulador_o++;
                break;
            case "u":
                acumulador_u++;
                break;
            ;
        }
        
    }
    total = acumulador_a + acumulador_e + acumulador_i + acumulador_o + acumulador_u;
    document.getElementById("no1").innerHTML ="El texto contiene " + acumulador_a + " vocales A,a";
    document.getElementById("no2").innerHTML ="El texto contiene " + acumulador_e + " vocales E,e";
    document.getElementById("no3").innerHTML ="El texto contiene " + acumulador_i + " vocales I,i";
    document.getElementById("no4").innerHTML ="El texto contiene " + acumulador_o + " vocales O,o";
    document.getElementById("no5").innerHTML ="El texto contiene " + acumulador_u + " vocales U,u";
    document.getElementById("no6").innerHTML ="El texto contiene " + total + " vocales en total";
}

const BTN_C = document.getElementById("cantidad");
BTN_C.addEventListener("click", cantidad_vocales);
