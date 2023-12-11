let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonsonido = new Audio ("./sounds/botonbailar.mp3")
let botonaudio = new Audio ("./sounds/nacional.mp3")

function bailar() {
    if (esqueleto=="off") {
        esqueleto = "on"
        esqueletoStop.classList.add("on")
        console.log("prendio")
        esqueletoStop.addEventListener('click', ()=>{botonsonido.play()})
        esqueletoStop.addEventListener('click', ()=>{botonaudio.play()})
    } else{
        esqueleto="off"
        esqueletoStop.classList.remove("on")
        esqueletoStop.addEventListener('click', ()=>{botonaudio.pause()})
        console.log("apagao")
    }
}