function BackgroundUI(image="../images/backgroundscreen.svg")
{
    return `
        <div style=
        "
            width: 100vw;
            height: 100vh;
            
            overflow: hidden;
        "
        >
            <img src="${image}"
            style="
                object-fit: cover;
            "
            />
        </div>
    `
}

// export const Background = BackgroundUI();