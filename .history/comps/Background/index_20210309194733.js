function BackgroundUI(image)
{
    return `
        <div style=
        "
            width: 100vw;
            height: 50%;
        "
        >
            <img src="${image}"
            />
        </div>
    `
}

// export const Background = BackgroundUI();