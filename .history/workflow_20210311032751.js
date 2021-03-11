//home page
document.querySelector(".home-info").innerHTML += TitleSquareUI();
document.querySelector(".home-info").innerHTML += TitleDescUI("Enter these people’s lives and learn more about how you can positively impact their lives through simple discussions. ");
document.querySelector(".home-button").innerHTML += LargeButtonUI("Begin");

// door page
document.querySelector(".door-up-button").innerHTML += TriangleButtonUI("door-screen1");
document.querySelector(".door").innerHTML += DoorUI()
document.querySelector(".door-down-button").innerHTML += TriangleButtonUI("door-screen2", "images/Circle-Triangle-UpsideDown.png");

document.querySelector(".door-up-button2").innerHTML += TriangleButtonUI("door-screen1");
document.querySelector(".door2").innerHTML += DoorUI("STACY");
document.querySelector(".door-down-button2").innerHTML += TriangleButtonUI("door-screen3", "images/Circle-Triangle-UpsideDown.png");

document.querySelector(".door-up-button3").innerHTML += TriangleButtonUI("door-screen2");
document.querySelector(".door3").innerHTML += DoorUI("GREG");
document.querySelector(".door-down-button3").innerHTML += TriangleButtonUI("door-screen1", "images/Circle-Triangle-UpsideDown.png");

//bradley room
document.querySelector(".bradley").innerHTML += CharactersUI("images/bradley.svg");
document.querySelector(".about-me").innerHTML += LargeButtonUI("About Me");

//stacy room
document.querySelector(".stacy").innerHTML += CharactersUI("images/stacy.svg");
document.querySelector(".about-me2").innerHTML += LargeButtonUI("About Me");

//greg room
document.querySelector(".greg").innerHTML += CharactersUI("images/greg.svg");
document.querySelector(".about-me3").innerHTML += LargeButtonUI("About Me");

//about bradley
document.querySelector(".about-me-bradley").innerHTML += AboutUI();
document.querySelector(".about-me-bradley").innerHTML += AboutUI();
document.querySelector(".about-me-bradley").innerHTML += AboutUI();
document.querySelector(".about-me-bradley").innerHTML += AboutUI();
document.querySelector(".about-me-bradley").innerHTML += FactsUI();


//about stacy
document.querySelector(".about-me-stacy").innerHTML += AboutUI();
document.querySelector(".about-me-stacy").innerHTML += AboutUI();
document.querySelector(".about-me-stacy").innerHTML += AboutUI();
document.querySelector(".about-me-stacy").innerHTML += AboutUI();
document.querySelector(".about-me-stacy").innerHTML += FactsUI(
    "Bulimia is an eating disorder characterized by binge eating followed by purging",
    "Approximately 1 million Canadians have eating disorders",
    "The most common age for bulimia is between 12-25",
    "",

);

//about greg
document.querySelector(".about-me-greg").innerHTML += AboutUI();
document.querySelector(".about-me-greg").innerHTML += AboutUI();
document.querySelector(".about-me-greg").innerHTML += AboutUI();
document.querySelector(".about-me-greg").innerHTML += AboutUI();
document.querySelector(".about-me-greg").innerHTML += FactsUI();

