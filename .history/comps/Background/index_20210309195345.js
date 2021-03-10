function BackgroundUI(image="images/backgroundscreen.svg")
{
    return `
        <div style=
        "
            
            height: 100vh;
            overflow: hidden;
        "
        >
            <img src="${image}"
            />
        </div>
    `
}

// export const Background = BackgroundUI();