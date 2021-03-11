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
    `Bradley is a security guard that works a graveyard shift, from 12am to 8am. <br><br>
    He likes to exercise, but lately hasn't been feeling too good. <br><br>
    Bradley's eating patterns have been off.`
);
document.querySelector(".about-me-bradley").innerHTML += AboutUI(
    "Symptoms",
    "#FF5C97",
    "#C70030",
    `Bradley experiences: <br><br>
    - Episodes of eating large amounts of food. <br><br>
    - Follow-up vomiting after said large meals. <br><br>
    - A fear of being called fat. <br><br>
    - A fear of eating around others`
);
document.querySelector(".about-me-bradley").innerHTML += AboutUI(
    "Resources",
    "#5C94FF",
    "#0038C7",
    `Learn more about eating disorders here: <br>
    <a href='https://www.nationaleatingdisorders.org/warning-signs-and-symptoms'>National Eating Disorders</a><br><br>
    We can also take a look at more treatments here: <br>
    <a href='https://www.helpguide.org/articles/eating-disorders/helping-someone-with-an-eating-disorder.htm'>Help Guide</a><br>`
);
document.querySelector(".about-me-bradley").innerHTML += AboutUI(
    "Treatments",
    "#FFDB5C",
    "#C77700",
    `According to these symptoms, Bradley experiences an eating disorder. <br><br>
    We can help him by: <br><br>
    - Learn what Bradley doesn't like to hear and encourage others to avoid mentioning said things. <br><br>
    - Professional help is recommended in these situations. While you can ease and comfort him, it's best to seek medical help. `
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
document.querySelector(".about-me-stacy").innerHTML += AboutUI(
    "About",
    "#5CFFC4",
    "#00C767",
    `Stacy is a graphic designer that works by commission. <br><br>
    She will be working late into the night when deadlines close in. <br><br>
    When her deadlines aren't close, she doesn't bother to do much work and decides to read. <br><br>
    With this schedule, Stacy is not getting enough sleep when her deadlines close in.`
);
document.querySelector(".about-me-stacy").innerHTML += AboutUI(
    "Symptoms",
    "#FF5C97",
    "#C70030",
    `As a result, Stacy experiences: <br><br>
    - Frequent mood swings. <br><br>
    - Forgetful memory. <br><br>
    - High blood pressure. <br><br>
    - Lots of broken cups and plates around the house.`
);
document.querySelector(".about-me-stacy").innerHTML += AboutUI(
    "Resources",
    "#5C94FF",
    "#0038C7",
    `We can learn more about Stacy's condition here: <br>
    <a href='https://www.sleepfoundation.org/sleep-disorders#:~:text=The%20collective%20term%20sleep%20disorder,for%20underlying%20mental%20health%20issues.'>Sleep Foundation</a><br><br>
    We can also take a look at more treatments here: <br>
    <a href='https://www.helpguide.org/articles/sleep/therapy-for-sleep-disorders.htm'>Help Guide</a>`
);
document.querySelector(".about-me-stacy").innerHTML += AboutUI(
    "Treatments",
    "#FFDB5C",
    "#C77700",
    `As Stacy suffers from sleep deprivation, we can help her by: <br><br>
    - Encouraging her to go to sleep at a proper time. This might involve creating a schedule. <br><br>
    - Keep her personal electronics away from her to prevent nighttime browsing. <br><br>
    - Communicate often and see what might be causing the problem. <br><br>
    - If all else fails, it might be best to seek professional help.`
);
document.querySelector(".about-me-stacy").innerHTML += FactsUI();

//about greg
document.querySelector(".about-me-greg").innerHTML += AboutUI(
    "About",
    "#5CFFC4",
    "#00C767",
    `Greg is a work-at-home coder who doesn't spend much time outside. <br><br>
    He spend most of his time outside of work gaming and streaming. <br><br>
    Lately, Greg has been really demotivated and tired.`
);
document.querySelector(".about-me-greg").innerHTML += AboutUI(
    "Symptoms",
    "#FF5C97",
    "#C70030",
    `Greg experiences: <br><br>
    - Sleepless nights. <br><br>
    - Lower back pains. <br><br>
    - Tiredness from any sort of physical activity. <br><br>
    - Stiff joints. <br><br>
    - Constant depression.`
);
document.querySelector(".about-me-greg").innerHTML += AboutUI(
    "Resources",
    "#5C94FF",
    "#0038C7",
    `Some more resources and symptoms can be found here: <br>
    <a href='https://www.eatthis.com/warning-signs-you-need-to-move-more/'>Lack of Exercise Symptoms</a> <br><br>
    A guide to help people lacking in physical activity can be found here: <br>
    <a href='https://www.helpguide.org/articles/healthy-living/how-to-start-exercising-and-stick-to-it.htm'>How to Start Exercising</a>
    `
);
document.querySelector(".about-me-greg").innerHTML += AboutUI(
    "Treatments",
    "#FFDB5C",
    "#C77700",
    `As Greg experiences symptoms of lack of exercise, we can help him by: <br><br>
    - Doing light physical activities with him to get started. <br><br>
    - Create a routine for Greg to follow every day. <br><br>
    - Make him feel rewarded by giving reinforcing his exercise with positive activities.
    `
);
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

