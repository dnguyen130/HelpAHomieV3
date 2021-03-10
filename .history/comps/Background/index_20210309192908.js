function BackgroundUI()
{
    return `
        <div style=
        "
            width: 100vw;
            height: 100vh;
        "
        onclick='BackgroundUI.HandCLick(this)'
        >
            <img src="https://svgur.com/i/Ufw.svg"
            />
        </div>
    `
}

export const Background = BackgroundUI();