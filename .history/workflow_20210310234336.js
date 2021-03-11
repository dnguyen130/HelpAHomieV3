// door page
document.querySelector("#door-screen1").innerHTML += TriangleButtonUI("door-screen1");
document.querySelector("#door-screen1").innerHTML += DoorUI()
document.querySelector("#door-screen1").innerHTML += TriangleButtonUI("door-screen2", "images/Circle-Triangle-UpsideDown.png");

document.querySelector("#door-screen2").innerHTML += TriangleButtonUI("door-screen1");
document.querySelector("#door-screen2").innerHTML += DoorUI("Stacy");
document.querySelector("#door-screen2").innerHTML += TriangleButtonUI("door-screen3", "images/Circle-Triangle-UpsideDown.png");

document.querySelector("#door-screen3").innerHTML += TriangleButtonUI("door-screen2");
document.querySelector("#door-screen3").innerHTML += DoorUI("Greg");
document.querySelector("#door-screen3").innerHTML += TriangleButtonUI("door-screen1", "images/Circle-Triangle-UpsideDown.png");




