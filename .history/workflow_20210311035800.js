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
document.querySelector(".about-me-bradley").innerHTML += AboutUI(
    "About",
    "#5CFFC4",
    "#00C767",
    "asfjas;fjasfasfa faslfjasfjsfjfjafjasf jasfjasfj sakfjaskfjsakf"
);
document.querySelector(".about-me-bradley").innerHTML += AboutUI(
    "Symptoms",
    "#FF5C97",
    "#C70030",
    "asfjas;fjasfasfa faslfjasfjsfjfjafjasf jasfjasfj sakfjaskfjsakf"
);
document.querySelector(".about-me-bradley").innerHTML += AboutUI(
    "Resources",
    "#5C94FF",
    "#0038C7",
    "asfjas;fjasfasfa faslfjasfjsfjfjafjasf jasfjasfj sakfjaskfjsakf"
);
document.querySelector(".about-me-bradley").innerHTML += AboutUI(
    "Treatments",
    "#FFDB5C",
    "#C77700",
    "asfjas;fjasfasfa faslfjasfjsfjfjafjasf jasfjasfj sakfjaskfjsakf"
);
document.querySelector(".about-me-bradley").innerHTML += FactsUI(
    "Eating Disorder Facts",
    "Bulimia is an eating disorder characterized by binge eating followed by purging",
    "Approximately 1 million Canadians have eating disorders",
    "The most common age for bulimia is between 12-25",
    "Although it is much more common in females, 10% of males experience it as well.",
    "images/facts/Bulimia Stomach.svg",
    "images/facts/1 out of 37.svg",
    "images/facts/12 to 25.svg",
    "images/facts/9 out of 10 female.svg",
);


//about stacy
document.querySelector(".about-me-stacy").innerHTML += AboutUI();
document.querySelector(".about-me-stacy").innerHTML += AboutUI();
document.querySelector(".about-me-stacy").innerHTML += AboutUI();
document.querySelector(".about-me-stacy").innerHTML += AboutUI();
document.querySelector(".about-me-stacy").innerHTML += FactsUI();

//about greg
document.querySelector(".about-me-greg").innerHTML += AboutUI();
document.querySelector(".about-me-greg").innerHTML += AboutUI();
document.querySelector(".about-me-greg").innerHTML += AboutUI();
document.querySelector(".about-me-greg").innerHTML += AboutUI();
document.querySelector(".about-me-greg").innerHTML += FactsUI(
    "Exercise Facts",
    "It is recommended to get 150 minutes of moderate-vigorous physical activity per week. ",
    "Only about 16% of Canadians are getting the recommended amount of exercise",
    "87% of Canadians are aware that they don’t get enough exercise",
    "74% of Canadians enjoy being physically active",
    "images/facts/150 minutes.svg",
    "images/facts/16 percent.svg",
    "images/facts/87 percent.svg",
    "images/facts/74 love.svg",

);

