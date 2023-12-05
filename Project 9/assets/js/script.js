let events = [];
let auxiliarArray = [];

const nameEvent = document.querySelector("#eventName");
const dateEvent = document.querySelector("#eventDate");
const addEvent = document.querySelector("#add");
const listEvent = document.querySelector("#listEvents");

const json = load();

try{
    arr = JSON.parse(json);
} catch(error){
    arr = [];
}

events = arr? [...arr] : [];

showEvents();





document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    addingEvent();
});


function addingEvent(){
    if (nameEvent.value === "" || dateEvent === ""){
        return;
    }

    if (dateDifference(dateEvent.value) < 0){
        return;
    }

    const newEvent = {
        id : (Math.random() * 100).toString(36).slice(3),
        name: nameEvent.value,
        date: dateEvent.value,
    };

    events.unshift(newEvent);


        save(JSON.stringify(events));


    nameEvent.value = "";

    showEvents();
} 


function dateDifference(destiny){
    let destinyDate = new Date(destiny);
    let actualDate = new Date();

    let difference = destinyDate.getTime() - actualDate.getTime();
    let days = Math.ceil(difference / (1000 * 3600 * 24));

    return days;
}


function showEvents(){
    const eventsHTML = events.map((event) => {
        return `
            <div class="events">
                <div class="days">
                    <span class="daysUntil">${dateDifference(event.date)}</span>
                    <span class="text">Días para...</span>
                </div>

                    <div class="nameEvent">${event.name}</div>
                    <div class="dateEvent">${event.date}</div>

                    <div class="actions">
                        <button data-id="${event.id}" class="delete">Eliminar</button>                    
                    </div>        
        
            </div>
        `;
    });

    listEvent.innerHTML = eventsHTML.join("");
    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener("click", e => {
            const id = button.getAttribute('data-id');
            events = events.filter(event => event.id !== id);


                save(JSON.stringify(events));


            showEvents();

        });
    });
}


function save(data){
    localStorage.setItem("list", data);
}

function load(){
    return localStorage.getItem("list");
}