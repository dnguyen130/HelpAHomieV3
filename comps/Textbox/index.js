function TextboxUI(name="Player", dialogue="Sample Text") {
    return `
    <div
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(270deg, #005E37 0%, rgba(255, 255, 255, 0) 100%), rgba(57, 69, 74, 0.8);    margin: 0;
        width: 320px;
        height: 67px;
        border: 5px solid #86FF9E;
        border-radius: 20px;
        color: white;
        font-family: Arial;
        font-size: 32pt;
        position: relative;
        left: 50px;
        top: 35px;
        user-select: none;
    ">
    ${name}
    </div>
    <div
        style="
        width: 1050px;
        display: flex;
        align-items: center;
        justify-content: left;
        height: 220px;
        min-height: 200px;
        background: linear-gradient(270deg, #005E37 0%, rgba(255, 255, 255, 0) 100%), rgba(57, 69, 74, 0.8);    margin: 0;
        border: 6px solid #86FF9E;
        border-radius: 70px;
        "
        onclick='TextboxUI.HandleClick(this)'
    >
        <p
            style="
            font-family: Arial;
            font-size: 24pt;
            padding: 0 5%;
            color: white;
            user-select: none;
        ">
        ${dialogue}
        </p>
    </div>
    `
}

TextboxUI.HandleClick = (el) => {
    el.innerHTML = `<p
        style="
        font-family: Arial;
        font-size: 24pt;
        padding: 0 5%;
        color: white;
        user-select: none;
        ">Hello
        </p>
        `
    el.style.background = 'linear-gradient(270deg, #8B00AD 0%, rgba(255, 255, 255, 0) 100%), rgba(57, 69, 74, 0.8)';      
}
//export const Textbox = TextboxUI();