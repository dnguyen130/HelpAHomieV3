function BackgroundUI(image="images/backgroundscreen.svg")
{
    return `
        <div style=
        "
            width: auto;
            height: auto;
            object-fit: cover;
            overflow: hidden;
        "
        >
            <img src="${image}"
            />
        </div>
    `
}

// export const Background = BackgroundUI();