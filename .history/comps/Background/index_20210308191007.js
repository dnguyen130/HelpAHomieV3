function BackgroundUI()
{
    return `
        <div style=
        "
            width: 30rem;
            height: 30rem;
        "
        onclick='BackgroundUI.HandCLick(this)'
        >
            <img src="https://svgur.com/i/Ufw.svg"
                onmouseover="this.src='https://svgur.com/i/Uh5.svg'"
                onmouseout="this.src='https://svgur.com/i/Ufw.svg'"
            />
        </div>
    `
}

export const Background = BackgroundUI();