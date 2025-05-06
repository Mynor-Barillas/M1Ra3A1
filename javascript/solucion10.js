let txt;
let words;
let count;
let answer;

function contar(){
    txt = (document.getElementById("text_1").value);
    words = (document.getElementById("word").value);
    answer = txt.toLowerCase().replace(/[.,!?]/g, "").split(/\s+/);
    count = answer.filter(wrd => wrd === words.toLowerCase()).length;
    document.getElementById("resultado").innerHTML = " La palabra: " + words + ", se encuentra en el texto una cantidad de: " + count + " veces." ;
}


const BTN = document.getElementById("btn_submit");
BTN.addEventListener("click", contar);