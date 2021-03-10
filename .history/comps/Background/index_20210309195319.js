function BackgroundUI(image="images/backgroundscreen.svg")
{
    return `
        <div style=
        "
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            
        "
        >
            <img src="${image}"
            />
        </div>
    `
}

// export const Background = BackgroundUI();