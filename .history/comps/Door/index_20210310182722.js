function DoorUI(image="images/doorclosed.svg", hoverimage="images/dooropened.svg"){
    return `
        <div style="
            width: 12rem;
            height: 24rem;
        ">
            <div style="
            ">
            </div
            <img 
            src="${image}" 
            onmouseover="this.src='${hoverimage}'"
            onmouseout="this.src='${image}'"
            />
        </div>
    `
}


// export const Door = DoorUI();