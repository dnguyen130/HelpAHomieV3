function HomeToDoors(){
    document.querySelector(".home").classList.add("none");
    document.querySelector(".home").classList.remove("flex");
    document.querySelector(".door-container").classList.add("block");
    document.querySelector(".door-container").classList.remove("none");
}

function DoorsToBradley(){
    document.querySelector(".door-container").classList.add("none");
    document.querySelector(".door-container").classList.remove("flex");
    document.querySelector(".door-container").classList.add("block");
    document.querySelector(".door-container").classList.remove("none");
}