function CircleButtonUI(text="DONE"){
    return `
        <div
        style="
            width: 15rem;
            height: 15rem;
            font-size: 2rem;
            font-family: Arial;
            background: linear-gradient(180deg, #FF5C97 0%, #C70030 100%), #39454A;
            box-shadow: 0px 0px 10px 5px rgba(251, 0, 181, 0.7);
            border-radius: 25rem;
            color: #E0FD8E;
            text-shadow: 0px 0px 7px #FAFF00;
            display:inline-flex;
            align-items:center;
            justify-content: center;
        "
        onmouseover = 'this.style.opacity = 0.5'
        onmouseout = 'this.style.opacity = 1'
        >
            <h1>${text}</H1>
        </div>
    `
}

// CircleButtonUI.CircleHover = (el) => {
//     el.style.opacity = 0.5;
// }

export const CircleButton = CircleButtonUI();