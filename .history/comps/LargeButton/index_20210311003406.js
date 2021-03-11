function LargeButtonUI(buttontext="Continue", w="300px", h="80px", buttoncolor="#D8B1FF") {
    return `
     <button
     style="
     width: ${w};
     height: ${h};
     background-color: ${buttoncolor};
     color: white;
     border-radius: 30px;
     user-select:none;
     outline: none;
     "
     >
     <h1>${buttontext}</h1>
     </button>
    `
}

// LargeButtonUI.HandleClick = () =>
// {
//     document.querySelector("main").style.backgroundColor = "green";
// }

//nst LargeButton = LargeButtonUI();