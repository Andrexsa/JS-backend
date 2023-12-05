const navegacion=document.querySelector("#menu");
const abrir =document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
    /* agregar clase */
    navegacion.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    /* agregar clases */
    navegacion.classList.remove("visible")
})