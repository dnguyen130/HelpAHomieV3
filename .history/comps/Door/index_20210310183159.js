function DoorUI(image="images/doorclosed.svg", hoverimage="images/dooropened.svg", text="Bradley"){
    return `
        <div style="
            width: 12rem;
            height: 24rem;
        ">
            <div style="

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