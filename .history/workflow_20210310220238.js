function HidePage(class){
    this.classList.add("hidden");
    this.classList.remove("flex");
}



document.querySelector(".door-screen1").innerHTML += TriangleButtonUI();
document.querySelector(".door-screen1").innerHTML += DoorUI()
document.querySelector(".door-screen1").innerHTML += TriangleButtonUI("images/Circle-Triangle-UpsideDown.png");

document.querySelector(".door-screen2").innerHTML += TriangleButtonUI();
document.querySelector(".door-screen2").innerHTML += DoorUI("Stacy");
document.querySelector(".door-screen2").innerHTML += TriangleButtonUI("images/Circle-Triangle-UpsideDown.png");

document.querySelector(".door-screen3").innerHTML += TriangleButtonUI();
document.querySelector(".door-screen3").innerHTML += DoorUI("Greg");
document.querySelector(".door-screen3").innerHTML += TriangleButtonUI("images/Circle-Triangle-UpsideDown.png");




