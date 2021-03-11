function CharactersUI(url="https://svgur.com/i/Uh4.svg") {
    return `
    <div style='
    '
    onclick='CharactersUI.HandleClick(this)'
    >
        <img style='
        width:25%;
        '
        src='${url}'
        </img>
    </div>
    `
}

// CharactersUI.HandleClick = (zoom) => {
//     zoom.style.width = "30%"
// }

// export const Characters = CharactersUI();