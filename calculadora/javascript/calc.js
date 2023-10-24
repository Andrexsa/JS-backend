const pantalla=document.querySelector(".pantallitaxd")
const botones= document.querySelectorAll(".button")

botones.forEach(boton => {
boton.addEventListener("click", () =>{
    if(boton.id==="borrar"){
        pantalla.textContent = "0";
        return;
    }
    if (boton.id === "fl") {
        if(pantalla.textContent.length===1 || pantalla.textContent === "syntax error"){
        pantalla.textContent = "0";

        }
        else{
        pantalla.textContent = pantalla.textContent.slice(0, -1)
        }
        return;
    }

    if(boton.id === "igual"){
        try{
        pantalla.textContent = eval(pantalla.textContent);
        }
        catch{
            pantalla.textContent = "syntax error"
        }
        try{
            pantalla.textContent = Symbol(pantalla.textContent);
            }
            catch{
                pantalla.textContent = "syntax error"
            }
            return;
        
    }
    const botoEn=boton.textContent;
    if(pantalla.textContent === "0" || pantalla.textContent === "syntax error"){
        pantalla.textContent = botoEn;
        
    } else {
        pantalla.textContent += botoEn;
        return;
    }
  


})

})