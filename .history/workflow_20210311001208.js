//home page
// document.querySelector(".home").innerHTML += TitleSquareUI();
// document.querySelector(".home").innerHTML += TitleDescUI();

// door page
document.querySelector("#door-screen1").innerHTML += TriangleButtonUI("door-screen1");
document.querySelector("#door-screen1").innerHTML += DoorUI()
document.querySelector("#door-screen1").innerHTML += TriangleButtonUI("door-screen2", "images/Circle-Triangle-UpsideDown.png");

document.querySelector("#door-screen2").innerHTML += TriangleButtonUI("door-screen1");
document.querySelector("#door-screen2").innerHTML += DoorUI("STACY");
document.querySelector("#door-screen2").innerHTML += TriangleButtonUI("door-screen3", "images/Circle-Triangle-UpsideDown.png");

document.querySelector("#door-screen3").innerHTML += TriangleButtonUI("door-screen2");
document.querySelector("#door-screen3").innerHTML += DoorUI("GREG");
document.querySelector("#door-screen3").innerHTML += TriangleButtonUI("door-screen1", "images/Circle-Triangle-UpsideDown.png");




