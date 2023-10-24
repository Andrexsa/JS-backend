const deg = 6;

const horas = document.querySelector(".hora");
const minutos = document.querySelector(".minuto");
const segundos = document.querySelector(".segundo");

setInterval(()=>{
   let tiempo = new Date();
   
   let hr =tiempo.getHours() *30;
   let min =tiempo.getMinutes() * deg;
   let seg =tiempo.getSeconds() * deg;

   horas.style.transform = `rotate(${(hr)+(min/12)}deg)`
   minutos.style.transform = `rotate(${min}deg)`
   segundos.style.transform = `rotate(${seg}deg)`
});


function cT() {
   let tiempo = new Date();

   let hora = tiempo.getHours();
   let minuto = tiempo.getMinutes();
   let segundo = tiempo.getSeconds();
   
   //crea la variable periodo donde si la hora es menor a 12 sera am, de lo contrario sera pm   
   let periodo = hora < 12 ? "AM" : "PM";
   //crea la pantalla donde guarda periodo
   let pantalla2 = periodo
   //muestra con el inner lo guardado en pantalla 2

   
   hora = (hora % 12) || 12;  // Si es 0, se convierte a 12 en formato de 12 horas

   let relojdigital2 =document.querySelector(".aop");

   hora = hora <10 ? "0" + hora : hora;
   minuto = minuto <10 ? "0" + minuto : minuto;
   segundo = segundo <10 ? "0" + segundo : segundo;

   let pantalla = hora + ":" + minuto + ":" + segundo + ":" +periodo;
   let relojdigital = document.querySelector(".Reloj");
   relojdigital.innerHTML = pantalla;




   
}

setInterval(cT, 100);
