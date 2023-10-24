function calcularTimpo(){
    
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // para hora la hora normal agregar el siguiente codigo
    /*hora = hora -12;*/

    let pantallaReloj = hora + ":" + minuto + ":" + segundos;
    let relojDigital = document.querySelector(".reloj")
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTimpo, 1000)