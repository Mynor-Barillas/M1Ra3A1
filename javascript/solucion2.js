let cat_a, cat_b, hip;

function hipotenusa() {
    cat_a = parseFloat(document.getElementById("cateto_a").value);
    cat_b = parseFloat(document.getElementById("cateto_b").value);
    hip = Math.sqrt((Math.pow(cat_a, 2) + Math.pow(cat_b, 2)));
    alert("La hipotenusa tiene una longitud de: " + hip + " unidades");
}

const btn = document.getElementById("btn_submit");
btn.addEventListener("click", hipotenusa);