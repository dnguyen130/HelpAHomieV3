function TitleDescUI(text="Hello", h="250px", bgcolor="rgba(255,255,255,0.5)", fsize="18pt")
{
    return `
        <div
            style='
            width: 100%;
            height: ${h};
            background-color: ${bgcolor};
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        '>
            <p
                style='
                font-family: Arial, Helvetica, Sans-Serif;
                font-size: ${fsize};
            '>
            ${text}
            </p>
        </div>
    `
}