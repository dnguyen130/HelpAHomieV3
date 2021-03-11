function HidePage(class){
    document.querySelector("." + class).classList.add("hidden");
    document.querySelector("." + class).classList.remove("flex");

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




