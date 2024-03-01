// clicar na foto do bolo para aparecer um breve texto

let img = document.querySelector("#img-cenoura");
let txtCenoura = document.querySelector("#txt-cenoura");

img.addEventListener("mouseenter", function() {
  txtCenoura.style.display = 'block';  
})

img.addEventListener("mouseleave", function() {
  txtCenoura.style.display = 'none';  
})