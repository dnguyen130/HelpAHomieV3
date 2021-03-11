function TitleSquareUI(title="Help A Homie", w="288px", h="237px", bgcolor="#773EB0", bordcolor="#FFFFFF", bordwidth="5px", bordrad="50px", fsize="54pt", fcolor="#FFFFFF")
{
    return `
    <div
        style='
        width: ${w};
        height: ${h};
        background-color: ${bgcolor};
        color: ${fcolor};
        border-color: ${bordcolor};
        border-width: ${bordwidth};
        border-style: solid;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: ${bordrad};
    '>
        <p
            style='
            font-family: "Oregano", cursive;
            font-size: ${fsize};
            margin: 0;
        '>
        ${title}
        </p>
    </div>
    `
}