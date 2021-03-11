function DoorUI(text="Bradley", image="images/doorclosed.svg", hoverimage="images/dooropened.svg"){
    return `
        <div style="
            width: 18rem;
            height: 24rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        ">
            <div style="
                width: 12rem;
                height: 3rem;
                font-size: 2rem;
                background-color: #191919;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
            ">${text}
            </div>
            <img 
            src="${image}" 
            onmouseover="this.src='${hoverimage}'"
            onmouseout="this.src='${image}'"
            />
        </div>
    `
}


// export const Door = DoorUI();