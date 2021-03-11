function DoorUI(text="BRADLEY", image="images/doorclosed.svg", hoverimage="images/dooropened.svg"){
    return `
        <div style="
            width: 16rem;
            height: 28rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 6px 6px 10px 20px rgba(0, 0, 0, 0.25);
        ">
            <div style="
                width: 16rem;
                height: 3.5rem;
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