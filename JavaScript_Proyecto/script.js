function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    let tiempoFaltante=(new Date(fechaLimite)- ahora + 1000) /1000;
    let segundosFaltantes=('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes=('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes=('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes=('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return{
        tiempoFaltante,
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        
    }

};

const limite = 'NOV 21 2023 16:46:00 GMT-0500'
let cancion = new Audio('./sound/navidad.mp3')
const musica=() =>{
    const tiempo = obtenerTiempoFaltante(limite)
    if (tiempo.tiempoFaltante <= 0) {
        cancion.play()
    }
}

const parar=() =>{
    cancion.pause()
}

const play = document.getElementById("play")
const pause = document.getElementById("pause")
function cuentaRegresiva(tiempoFaltante,mensaje){
    const dias= document.getElementById('dias');
    const horas= document.getElementById('horas');
    const minutos=document.getElementById('minutos');
    const segundos=document.getElementById('segundos');

    const tiempoActual = setInterval(()=>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML=`${t.diasFaltantes}`;
        horas.innerHTML=`${t.horasFaltantes}`;
        minutos.innerHTML=`${t.minutosFaltantes}`;
        segundos.innerHTML=`${t.segundosFaltantes}`;

        if(t.tiempoFaltante <=1){
            const imagenPapaNoel = document.getElementById("imagen")
            imagenPapaNoel.src = "./img/papaNoel2.gif"
            clearInterval(tiempoActual);
            c = document.getElementById("mensaje")
            c.innerHTML= mensaje;
            dias.innerHTML=`00`;
            horas.innerHTML=`00`;
            minutos.innerHTML=`00`;
            segundos.innerHTML=`00`;
            play.classList.add("red");
            pause.classList.add("red");

        }
    }, 1000)
};

cuentaRegresiva(limite, '¡Feliz Navidad :)!');