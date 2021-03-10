function BackgroundUI(image)
{
    return `
        <div style=
        "
            width: 100vw;
            height: 100vh;
        "
        >
            <img src="${image}"
            />
        </div>
    `
}

// export const Background = BackgroundUI();