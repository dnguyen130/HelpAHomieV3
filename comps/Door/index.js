function DoorUI(){
    return `
        <div style="
            width: 12rem;
            height: 24rem;
        ">
            <img 
            src="https://svgur.com/i/Uee.svg" 
            onmouseover="this.src='https://svgur.com/i/UgP.svg'"
            onmouseout="this.src='https://svgur.com/i/Uee.svg'"
            />
        </div>
    `
}


export const Door = DoorUI();