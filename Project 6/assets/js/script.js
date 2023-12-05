const frameRating = document.querySelector(".rating");
let actualRating = 0;
const limitRating = 5;

const htmlMap = Array.from(Array(limitRating)).map((item, i) =>{
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

frameRating.innerHTML = htmlMap.join("");


document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", e =>{
        console.log("It works.");
        const position = item.getAttribute("data-pos");

        if(actualRating === parseInt(position) + 1){
            return;
        }

        document.querySelectorAll(".item").forEach(cubeGray =>{
            if(cubeGray.classList.contains("select")){
                cubeGray.classList.remove("select");
            }
        });

        for(let i = 0; i <= position; i++){
            const cube = document.querySelector(`.item-${i}`);
            if(!cube.classList.contains("select")){
                cube.classList.add("select");
            }
        }

        actualRating = parseInt(position) + 1;
    });

    item.addEventListener("click", (e) =>{
        const position = item.getAttribute("data-pos");
        actualRating = parseInt(position) + 1;
        console.log(actualRating);
    });
});