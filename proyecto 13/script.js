let progreso=document.querySelector(".progreso");
let porcentaje =document.querySelector(".porcentaje");
let celebracion=document.querySelector("body");
let avance=0;



let tiempo=setInterval(()=>{
/* CUANDO SE ACTIVE LA FUNCIÓN INTERVALO AVANCE EN 1 EN 1 */
    avance +=1;
    /* aplique estilo */
    progreso.style.width=`${avance}%`
/* cuando avance llegue a 100 debe parar */
    if (avance===100) {
        clearInterval(tiempo)
        /* agregue clase con la animación  */
        celebracion.classList.add("celebracion")
    }
    /* registrar porcentaje */ 
    porcentaje.textContent=`${avance}%`
/* el intervalo se refresque a 75 millisegundos */
}, 75); 