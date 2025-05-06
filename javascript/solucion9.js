let txt;
let answer;

function separar(){
    txt = (document.getElementById("text_1").value).replace(/\s/g, "");
    answer = txt.match(/.{1,2}/g);
    document.getElementById("resultado").innerHTML = "[" + answer.join(", ") + "]";
}


const btn = document.getElementById("btn_submit");
btn.addEventListener("click", separar);