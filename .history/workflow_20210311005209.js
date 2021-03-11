//home page
document.querySelector(".home-info").innerHTML += TitleSquareUI();
document.querySelector(".home-info").innerHTML += TitleDescUI("Enter these people’s lives and learn more about how you can positively impact their lives through simple discussions. ");
document.querySelector(".home-button").innerHTML += LargeButtonUI("Begin");

// door page
document.querySelector(".door-up-button").innerHTML += TriangleButtonUI("door-screen1");
document.querySelector("#door-screen1").innerHTML += DoorUI()
document.querySelector(".door-down-button").innerHTML += TriangleButtonUI("door-screen2", "images/Circle-Triangle-UpsideDown.png");

document.querySelector("#door-screen2").innerHTML += TriangleButtonUI("door-screen1");
document.querySelector("#door-screen2").innerHTML += DoorUI("STACY");
document.querySelector("#door-screen2").innerHTML += TriangleButtonUI("door-screen3", "images/Circle-Triangle-UpsideDown.png");

document.querySelector("#door-screen3").innerHTML += TriangleButtonUI("door-screen2");
document.querySelector("#door-screen3").innerHTML += DoorUI("GREG");
document.querySelector("#door-screen3").innerHTML += TriangleButtonUI("door-screen1", "images/Circle-Triangle-UpsideDown.png");




