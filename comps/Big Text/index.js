function InformationUI(wtext="whats in this", widthInfo="700px", heightInfo="200px", borderInfo="50px") {
    return `
    <div style='
    display: flex;
    flex-direction: column;
    width: ${widthInfo};
    height: ${heightInfo};
    background: linear-gradient(270deg, #005E37 0%, rgba(255, 255, 255, 0) 100%), rgba(57, 69, 74, 0.8);
    font-color: "white";
    border: 10px solid #86FF9E;
    border-radius: ${borderInfo};
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #FFFFFF;
    '
    <p>${wtext}</p>
    
    </div>
    `
}

//export const Information = InformationUI();



